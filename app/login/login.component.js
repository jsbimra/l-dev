(function(angular) {

    "use strict";

    /**
     * @memberOf lsLenderApp
     * @name login
     * @param {Service} $scope service to provide scope between controller and view of component
     * @description login controller
     */

    /* @ngInject */
    function loginController($scope, $location, $timeout, appFactory, dataservice, APP_CONSTANT, API_ENDPOINT, $rootRouter) {
        var vm = this;
        var OTPTimeOut = undefined;

        var LOGIN_API = API_ENDPOINT + 'auth/login/';
        var REGISTER_API = API_ENDPOINT + 'auth/reg/';
        var REGISTER_RESEND_OTP_API = API_ENDPOINT + 'auth/resend/otp/';
        var REGISTER_VERIFY_OTP_API = API_ENDPOINT + 'auth/verify/otp/';
        var REGISTER_CHANGE_MOBILE_API = API_ENDPOINT + 'auth/change_mobile/';
        var REGISTER_CHANGE_EMAIL_API = API_ENDPOINT + 'auth/change_email/';
        var REGISTER_CHANGE_PASSWORD_API = API_ENDPOINT + 'auth/change_pass/';
        var REGISTER_RESEND_EMAIL_API = API_ENDPOINT + 'auth/resend/email/';
        var config = appFactory.setToken();

        vm.OTPTimer = APP_CONSTANT.COUNT_DOWN_VALUE;
        vm.tempOTP = 1234;
        vm.regexMobileEmail = /^([_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,5}))|^[0-9]{10,10}$/;
        vm.user = {
            /*mobOrEmail: '7020427374',
            password: 'LyE3mPqQne'*/
        };
        vm.createPassword = {
            newPassword: '',
            confirmPasword: ''
        };
        vm.modSignup = {
            /*mobileno: 1230456789,
            email: 'test@test.com',
            password: '15420'*/
        };
        vm.modForgotPwdEmail = '';
        vm.alreadyRegisterUserMsg = '';
        vm.loginServerErrorMsg = undefined;

        /* Invoking default and defining in callback to use it other scenarios */
        setDefaultViewOffFlags();

        function setDefaultViewOffFlags() {

            vm.nonTabActive              = false;
            vm.showForgotPwdPanel        = false;
            vm.showForgotPwdSuccessPanel = false;
            vm.showCreateNewPwdPanel     = false;
            vm.showSignupOTPPanel        = false;
            vm.changeOTPMobileField      = false;
            vm.showSignupResendOTPPanel  = false;
            vm.showVerifyEmailPanel      = false;
            vm.showChangeEmailIdPanel    = false;
            vm.successEmailIdFlag        = false;
            vm.alreadyRegisterUserFlag   = false;
            vm.OTPResendMsgFlag          = false;
            vm.processing                = false;
            vm.forgotPwdWrongEmailMsg    = false;
        };


        /* method vm definiations */
        vm.backToLoginScreen = backToLoginScreen;
        vm.forgotPwdTrigger = forgotPwdTrigger;
        vm.createNewPwdTrigger = createNewPwdTrigger;
        vm.changeMobileNoTrigger = changeMobileNoTrigger;
        vm.submitChangeMobile = submitChangeMobile;
        vm.submitLogin = submitLogin;
        vm.submitSignupOTPVerify = submitSignupOTPVerify;
        vm.resendSignupOTP = resendSignupOTP;
        vm.changeEmailIDTrigger = changeEmailIDTrigger;
        vm.resendEmailAddress = resendEmailAddress;
        vm.submitSignup = submitSignup;
        vm.submitChangeEmailId = submitChangeEmailId;
        vm.submitForgotPassword = submitForgotPassword;
        vm.resetForm = resetForm;
        vm.resetModalToNormal = resetModalToNormal;
        vm.timerCountDown = timerCountDown;
        vm.submitCreatePassword = submitCreatePassword;

        vm.$routerOnActivate = function(next, prev) {

            /**
             * @function emit
             * @param {Boolean} true to emit hideNavFlag
             */
            $scope.$emit('hideNavFlag', true);

            /* set setLoadingBar false */
            $scope.$emit('setLoadingBar', false);

            /* Default Bootstrap Modal settings invoke before modal has show */
            $('#loginSignupModal').on('show.bs.modal', function(e) {
                console.info('show.bs.modal');
                vm.resetModalToNormal();
            });

            /* Default Bootstrap Modal settings invoke before modal has hide */
            $('#loginSignupModal').on('show.bs.modal', function(e) {
                console.info('hide.bs.modal');
                vm.resetModalToNormal();
                stopCountDownTimer();
            });
        };

        vm.$routerOnDeactivate = function() {
            /**
             * @function emit
             * @param {Boolean} false to emit hideNavFlag
             */
            $scope.$emit('hideNavFlag', false);
        };


        function authenticateUser() {

            var postObj = {
                mobile: vm.user.mobOrEmail,
                password: vm.user.password,
                req_end: 'L'
            };

            // Show processing loader
            vm.processing = true;

            // postObj =  JSON.stringify(postObj);

            return dataservice.postData(LOGIN_API, postObj).then(function(data) {
                    if(data){
                        if(data.token){
                            // Hide processing loader
                            hideProcessing();

                            vm.loginDetails = data;
                            appFactory.setLocalStorageData(APP_CONSTANT.LOGIN_TOKEN, data.token);
                            if(!data.email_verified){
                               // vm.createNewPwdTrigger();
                            } else if(data.email_verified){
                                    appFactory.setLocalStorageData(APP_CONSTANT.LOGIN_STATUS, true);
                                    if(appFactory.getLocalStorageData(APP_CONSTANT.INVEST_NOW_BTN) == "true"){
                                        if(data.auto_flow)
                                             $rootRouter.navigate(['AutoInvest']);
                                         else
                                             $rootRouter.navigate(['Invest']);

                                        appFactory.setLocalStorageData(APP_CONSTANT.INVEST_NOW_BTN, false);
                                    }else{
                                        $rootRouter.navigate(['Home']);
                                    }
                                    
                                   // 
                                    $('#loginSignupModal').modal('hide'); 

                            /* Fire emit to show menu visible after login */
                            $scope.$emit('userLoggedInStatus', true);
                        }

                    }

                    if (!data.status) {
                        console.info(data.error);
                        vm.loginServerErrorMsg = 'error' in data ? data.error : undefined;

                        // Hide processing loader
                        hideProcessing();
                    }
                }else{

                    // Hide processing loader
                    hideProcessing();
                }

                // 
                // console.info('login api hit response ', data);

                // return vm.loginDetails;
            });
        }


        /*
         * Login: Take users back to login screen on POPUP modal
         */
        function backToLoginScreen() {
            vm.nonTabActive = false;
            vm.showForgotPwdPanel = false;
            vm.showCreateNewPwdPanel = false;


            /* invoke reset form method */
            vm.resetForm('login');
        }


        /*
         * Login: submitLogin take user to the flow
         */
        function submitLogin(form) {
            if (form && form.$valid) {
                console.info('Login form submitted ');

                authenticateUser();
            }
        }


        /*
         * Forgot Password: Invoked when forgot password link triggerd
         */
        function forgotPwdTrigger() {
            vm.nonTabActive = true;
            vm.showForgotPwdPanel = true;

            /* invoke reset form method */
            vm.resetForm('login');
        }


        /*
         * Create New Password: Invoked when create new password link triggerd
         */
        function createNewPwdTrigger() {
            vm.nonTabActive = true;
            vm.showForgotPwdPanel = false;
            vm.showCreateNewPwdPanel = true;
        }


        /* Reset form fields navigating between screens */
        function resetForm(form) {

            /*Resetting login form */
            if (form && form === 'login') {
                $timeout(function() {
                    vm.frmLogin.$setPristine();
                    vm.user.mobOrEmail = '';
                    vm.user.password = '';
                    vm.loginServerErrorMsg = undefined;
                    vm.changeOTPMobileField = false;
                    vm.alreadyRegisterUserFlag = false;
                }, 0);

            }

            /* Resetting signup form */
            if (form && form === 'signup') {
                $timeout(function() {
                    vm.frmSignup.$setPristine();
                    vm.modSignup.number = '';
                    vm.modSignup.email = '';
                    vm.modSignup.password = '';


                    /* Hide if signup otp form and make visible signup form */
                    vm.frmSignupOTP.$setPristine();
                    vm.modSignupOTP = '';
                    vm.showSignupOTPPanel = false;
                    vm.alreadyRegisterUserFlag = false;
                }, 0);

            }


            /*Resetting forgotPwd form */
            if (form && form === 'forgotPwd') {
                $timeout(function() {
                    vm.showForgotPwdSuccessPanel = false;
                    // vm.frmForgotPassword.$setPristine();
                    vm.modForgotPwdEmail = '';
                }, 0);
            }

        }


        /* Register: Show mobile no field on changeMobileNoTrigger link clicked */
        function changeMobileNoTrigger() {
            vm.changeOTPMobileField = true;


        }

        /* Register: Submit change mobile number */
        function submitChangeMobile(form) {
            vm.changeOTPMobileField = false;
            var postObj = {
                mobile: vm.modSignup.mobileno,
                new_mobile: vm.modSignup.newmobileno
            };

            return dataservice.postData(REGISTER_CHANGE_MOBILE_API, postObj).then(function(data, status) {

                console.info('change mobile api hit response ', data);
                if (data) {
                    if (data.status) {
                        vm.modSignup.mobileno = vm.modSignup.newmobileno;

                        /* restart the resend otp timer */
                        reStartCountDownTimer();
                    }
                } else {
                    console.error('Error, object')
                }

            }, function() {
                console.info('verify otp api connecting error', data, status);
            });
        }


        /*
         * Register: Submiting Signup/Register form
         */
        function submitSignup(form, saveType) {
            if (form.$valid) {

                var postObj = {
                    mobile: vm.modSignup.mobileno,
                    email: vm.modSignup.email,
                    req_end: 'L'
                };

                // Show processing loader
                vm.processing = true;

                vm.alreadyRegisterUserFlag = false;

                /* Submit the sign-up form */
                return dataservice.postData(REGISTER_API, postObj).then(function(data, status) {

                    // console.info('register api hit response ', data);

                    if (data) {

                        /* If request successfuly and found status valid/true */
                        if (data.status) {
                            /* Show OTP panel view */
                            vm.showSignupOTPPanel = true;

                            /* Show Resend OTP panel view */
                            vm.showSignupResendOTPPanel = true;

                            /*Starting resend countdown timer once showSignupResendOTPPanel shown */
                            startCountDownTimer();

                        } else if (!data.status && 'message' in data) {
                            console.info('reposne message ', data.message);
                            vm.alreadyRegisterUserFlag = true;
                            vm.alreadyRegisterUserMsg = data.message;
                        } else {
                            console.error('Error, looking for key in data object not found ', data);
                        }


                        /* Create item */
                        if (saveType && saveType === 'saveSignup') {
                            console.info('create signup fired');
                        }

                        if (saveType && saveType === 'saveChangeMobNo') {
                            console.info('create change mobile no fired');

                            if (!vm.alreadyRegisterUserFlag) {
                                vm.changeOTPMobileField = false;
                                vm.showSignupOTPPanel = true;
                            }
                        }


                        //Hide processing loader
                        hideProcessing();

                    } else {

                        //Hide processing loader
                        hideProcessing();

                        console.error('Error, object');
                    }

                }, function() {
                    console.info('register api connecting error', data, status);
                });


                /* Reseting form when modal re-open in the current flow */
                vm.frmSignupOTP.$setPristine();
                vm.modSignupOTP = '';
            }
        }


        /*
         * Register: Verify Signup OTP
         */
        function submitSignupOTPVerify(form) {
            //console.info(form);

            vm.invalidOTPMsgFlag = false;
            vm.showForgotPwdPanel = false;
            vm.showForgotPwdSuccessPanel = false;
            // vm.showSignupResendOTPPanel = true;    //show when successful signup callback fired in submitSignup method

            /*Starting countdown timer */
            startCountDownTimer();

            var postObj = {
                otp: parseInt(vm.modSignupOTP),
                mobile: vm.modSignup.mobileno,
                req_end: 'L'
            };

            if ((form.$valid && vm.OTPTimer !== 0) || form.$valid && !vm.showSignupResendOTPPanel) {

                // Show processing loader
                vm.processing = true;

                /* Verify OTP */
                return dataservice.postData(REGISTER_VERIFY_OTP_API, postObj).then(function(data, status) {

                    console.info('register verify otp api hit response ', data);

                    if (data) {

                        /* If request successfuly and found status valid/true */
                        if (data.verified) {
                            console.info('signup otp form validated');

                            vm.showSignupResendOTPPanel = true;

                            // if(parseInt(vm.modSignupOTP) == 1234){

                            vm.nonTabActive = true;
                            vm.showVerifyEmailPanel = true;
                            vm.validOTPMsgFlag = true;

                            /* Stop the countdown timer if successfuly passed the OTP */
                            stopCountDownTimer();

                            // }else{
                            /*vm.invalidOTPMsgFlag = true;
                                        
                                    Starting countdown timer 
                                    startCountDownTimer();   
                                }*/
                        } else if (!data.verified) {
                            vm.invalidOTPMsgFlag = true;

                            $timeout(function() {
                                vm.invalidOTPMsgFlag = false;
                            },3000)

                        } else {
                            console.error('Error, looking for key in data object not found ', data);
                        }

                        //Hide processing loader
                        hideProcessing();

                    } else {

                        //Hide processing loader
                        hideProcessing();

                        console.error('Error, object');
                    }

                }, function() {
                    console.info('verify otp api connecting error', data, status);
                });


            }
        }


        /*
         * Register: resend signup otp method
         */
        function resendSignupOTP(form) {
            console.info('Resend sign-up otp triggered');

            // vm.showSignupResendOTPPanel = false; // not to hide the resend opt panel again

            /*Resetting counter time*/
            vm.OTPTimer = APP_CONSTANT.COUNT_DOWN_VALUE;

            if (form) {
                form.$setPristine();
                form.$setUntouched();
            }

            /*Starting countdown timer */
            // reStartCountDownTimer();

            /*RESET OTP MODEL VALUE */
            vm.modSignupOTP = '';

            var postObj = {
                mobile: vm.modSignup.mobileno,
                req_end: 'L'
            };

            return dataservice.postData(REGISTER_RESEND_OTP_API, postObj).then(function(data, status) {

                console.info('register resend otp api hit response ', data);

                if (data) {
                    if ('message' in data){
                        console.info(data.message);

                        vm.OTPResendMsgFlag = true;
                        
                        /* if OTP resent again start the counter again */
                        reStartCountDownTimer();

                        $timeout(function() {
                            vm.OTPResendMsgFlag = false;
                        },2500);
                    }
                } else {
                    console.error('Error, object')
                }

            }, function() {
                console.info('verify otp api connecting error', data, status);
            });
        }


        /*
         * Register: Allowing to change the email address again
         */
        function changeEmailIDTrigger(form) {
            console.info('Changed email address triggered ', form);
            vm.showChangeEmailIdPanel = true;
        }


        /*
         * Register: Submitting changed email address again.
         */
        function submitChangeEmailId(form) {
            console.info('Change email address form submitted');
            if (form && form.$valid) {

                vm.showChangeEmailIdPanel = false;


                var postObj = {};
                postObj = {
                    mobile: vm.modSignup.mobileno,
                    email: vm.modSignup.email,
                    new_email: vm.modSignup.newemail
                };

                return dataservice.postData(REGISTER_CHANGE_EMAIL_API, postObj).then(function(data, status) {

                    console.info('change email api hit response ', data);
                    if (data) {
                        if (data.status) {
                            vm.successEmailIdFlag = true;
                            vm.modSignup.email = vm.modSignup.newemail;
                        }
                    } else {
                        console.error('Error, object')
                    }

                }, function() {
                    console.info('change email api connecting error', data, status);
                });

                /*show success sent message and show back the resend email button after some secs*/
                /*Removed resend email button*/
                /*$timeout(function(){
                    vm.showChangeEmailIdPanel = false;
                    vm.successEmailIdFlag = false;
                },1500);*/

            }
        }


        /*
         * Register: Resending email address back to user
         */
        function resendEmailAddress(email) {
            if (email) {
                console.info('resend email fired', email);
            }
        }



        /*
         * Forgot Password: submit forgot password form
         */
        function submitForgotPassword(form) {
            console.info('forgot password form ');

            var postObj = {
                email: vm.modForgotPwdEmail
            };

            /* reset password form */
            if (form && form.$valid) {
                // console.info('Form validated successfully');

                // Show processing loader
                vm.processing = true;

                return dataservice.postData(REGISTER_RESEND_EMAIL_API, postObj).then(function(data, status) {

                    console.info('resend email api hit response ', data);
                    if (data) {
                        if (data.status) {
                            vm.showForgotPwdSuccessPanel = true;
                        }else{
                            if('message' in data){
                                console.info(data.message);
                                vm.forgotPwdWrongEmailMsg = true;

                                $timeout(function() {
                                    vm.forgotPwdWrongEmailMsg = false;
                                },3000)
                            }
                        }

                        //Hide processing loader
                        hideProcessing();
                    } else {
                        console.error('Error, object');

                        //Hide processing loader
                        hideProcessing();
                    }

                }, function() {
                    console.info('resend email api connecting error', data, status);
                });

            }
        }

        /*Create Password: new user*/
        function submitCreatePassword(form) {
            var postObj = {
                password: vm.createPassword.confirmPassword
            };

            return dataservice.postData(REGISTER_CHANGE_PASSWORD_API, postObj, config).then(function(data, status) {

                console.info('change password api hit response ', data);
                if (data) {
                    if (data.status) {
                        appFactory.setLocalStorageData(APP_CONSTANT.LOGIN_STATUS, true);
                        $rootRouter.navigate(['AutoPortfolio']);
                        $('#loginSignupModal').modal('hide');
                    }
                } else {
                    console.error('Error, object')
                }

            }, function() {
                console.info('verify otp api connecting error', data, status);
            });
        }



        /*
         * Register: Method to make the timer count down in start mode
         */
        function startCountDownTimer() {

            /*cancel the OTP timeout before invoking it again */
            $timeout.cancel(OTPTimeOut);
            vm.OTPTimer = APP_CONSTANT.COUNT_DOWN_VALUE; //Check and remove if needed
            OTPTimeOut = $timeout(vm.timerCountDown, 1000);
        }

        /*
         * Register: Method to make the restart the timer count down back again
         */
        function reStartCountDownTimer() {
            vm.OTPTimer = APP_CONSTANT.COUNT_DOWN_VALUE;
            OTPTimeOut = $timeout(vm.timerCountDown, 1000);
        }


        /* 
         * Register: Timer counter to count down to 0  
         */
        function timerCountDown() {
            vm.OTPTimer--;
            OTPTimeOut = $timeout(vm.timerCountDown, 1000);

            if (vm.OTPTimer === 0) {
                stopCountDownTimer();
            }
        }

        function stopCountDownTimer() {
            $timeout.cancel(OTPTimeOut);
        }


        /* Reset the modal back to normal after completing signup flow */
        function resetModalToNormal() {
            // console.info('reset modal back to normal fired ');

            angular.element('.nav-tabs').find('li').removeClass('active');
            angular.element('.nav-tabs').find('li:eq(0)').addClass('active');
            $('#signup-tab').removeClass('fade in active');
            $('#login-tab').addClass('fade in active');

            vm.resetForm('login');
            /* reset the view flags*/
            setDefaultViewOffFlags();
        }



        // Hide processing loader callback
        function hideProcessing(){
            vm.processing = false;
        }

    }; /* controller code end */

    angular.module('lsLenderApp')
        .component('loginComponent', {
            templateUrl: 'app/login/login.html',
            controller: loginController,
            controllerAs: 'loginCtrl',
            $routeConfig: [

            ]
        });

})(window.angular);
