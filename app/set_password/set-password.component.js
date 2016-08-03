(function(angular){

	"use strict";

	/**
	* @memberOf lsLenderApp
	* @param {Service} $scope glue between view and controller
	* 
	* @description ... (mean non-terminal in angular) it should continue to match routes in child components
	*/

	/* @ngInject */
	function pwdSetComponentCtrl($scope, $rootScope, $rootRouter, $window, appFactory, dataservice, APP_CONSTANT, API_ENDPOINT,$location){
		var vm = this;
		var REGISTER_SET_PASSWORD_API = API_ENDPOINT+'auth/change_pass/';
		var CHECK_VALID_USER_API = API_ENDPOINT+'auth/verify/email/';
		var idParameter;

		vm.createPassword       = {
            newPassword: '',
            confirmPasword: ''
        };
        vm.showCreateNewPwdPanel = false;
        vm.emailLinkExpired      = false;

		vm.submitCreatePassword =submitCreatePassword;

        vm.$routerOnActivate = function() {
            $('.app-header-fixed').addClass('hide');
            $('.app-footer').addClass('hide');
            checkUID();
         }

         /*Remove hide class from header and footer*/
         function toggleNavVisibility() {
            $('.app-header-fixed').removeClass('hide');
            $('.app-footer').removeClass('hide');
         }

		/*Create Password: new user*/
        function submitCreatePassword(){
            var postObj = {
            	    id: idParameter,
                    password: vm.createPassword.confirmPassword
            };

            return dataservice.postData(REGISTER_SET_PASSWORD_API, postObj).then(function(data) {
                    if(data){
                        if(data.status){
                            appFactory.setLocalStorageData(APP_CONSTANT.LOGIN_TOKEN, data.token);
                            appFactory.setLocalStorageData(APP_CONSTANT.LOGIN_STATUS, true);
                            $rootRouter.navigate(['Home']);
                            toggleNavVisibility();
                            
                        }
                    }
                
            },function(){
                    console.info('set password api connecting error', data, status);
            });
             
        }
        vm.$onDestroy = function () {
            toggleNavVisibility();
      // component scope is destroyed
    };

        /*Check for valid UID*/
        function checkUID(){
        	idParameter = getUrlParameters("id", "", true);

        	var postObj = {
                    id: idParameter
            };

            return dataservice.postData(CHECK_VALID_USER_API, postObj).then(function(data) {
                    if(data){
                        if(data.status){
                            vm.showCreateNewPwdPanel = true;
                        }
                        else{
                            vm.emailLinkExpired = true;
                        } 
                    }
                
            },function(){
                    vm.emailLinkExpired = true;
                    console.info('check valid user api connecting error', data, status);
            });

        }

        function getUrlParameters(parameter, staticURL, decode){
		   /*
		    Function: getUrlParameters

		   */
		   var currLocation = (staticURL.length)? staticURL : $location.search;
	       var parArr = $location.search()[parameter];
	       return parArr;  
		}

		

	}

	angular.module('lsLenderApp')
		.component('passwordComp', {
            templateUrl: 'app/set_password/set-password.html',
            controller: pwdSetComponentCtrl,
            controllerAs: 'pwdCtrl',
            $routeConfig: [
            ]
		});

})(window.angular);