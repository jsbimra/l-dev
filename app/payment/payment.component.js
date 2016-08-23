(function(angular) {

    "use strict";

    /**
     * @memberOf lsLenderApp
     * @param {Service} $scope glue between view and controller
     * 
     * @description ... (mean non-terminal in angular) it should continue to match routes in child components
     */

    /* @ngInject */
    function paymentController($scope, $rootScope, $rootRouter, appFactory, APP_CONSTANT, dataservice, API_ENDPOINT, $timeout) {
        var vm = this;

        var PAYMENT_DATA_API = API_ENDPOINT + 'investment/invest_now/';
        var PAYMENT_DONE_API = API_ENDPOINT + 'investment/mark_paid/';
        var config           = appFactory.setToken();
        var riskMapping      = APP_CONSTANT.RATE_RISKS;

        vm.userPref;
        vm.totalAmount      = 0;
        vm.paymentObj       = undefined;
        vm.showBeneficiary  = true;
        vm.LSfees           = 0;

        vm.beneficiary = [{
            dispName: 'Name',
            value: 'LoanSingh'
        }, {
            dispName: 'Account Number',
            value: '7765372637944'
        }, {
            dispName: 'IFSC Code',
            value: 'HDFC74893930'
        }];

        vm.deleteBorrower   = deleteBorrower;
        vm.markPaymentDone  = markPaymentDone;
        vm.openConductPopup = openConductPopup;

        /* Router Lifecycle hooks */
        vm.$routerOnActivate = function(next, prev) {

            /* scroll page to top */
            appFactory.scrollToTop();
            appFactory.hamburgerOpen();
            /*Redirect user to Home if user not logged in */
            var loggedStatus = appFactory.userLoggedIn();
            if(loggedStatus){
                getPaymentData();
            }
        }

        function getPaymentData() {

            dataservice.getData(PAYMENT_DATA_API, {}, config).then(function(data, status) {
                if (data) {
                    if (data.status) {
                         vm.paymentObj=data.data;
                        for (var i in vm.paymentObj) {
                              vm.totalAmount += vm.paymentObj[i].invested_amount;
                        }
                        vm.LSfees = vm.totalAmount*0.01;
                        vm.totalAmount += vm.LSfees;
                    }
                    else{
                        vm.paymentObj = [];
                    }
                }

            }, function() {
                vm.paymentObj = [];
            });

        }

        /**Function to delete a borrower**/
        function deleteBorrower(borrowerID){
            var data = $.param({
                id:  borrowerID
            });
            dataservice.xdelete(PAYMENT_DATA_API+borrowerID, {id:  borrowerID}, config).then(function(data, status) {
                if (data) {
                    if (data.status) {
                        for(var i in vm.paymentObj){
                          if(vm.paymentObj[i].id == borrowerID){
                            vm.totalAmount-=vm.paymentObj[i].invested_amount;
                            vm.paymentObj.splice(i,1);
                          }
                        }
                    }
                }

            }, function() {
                console.log('Create pool API error');
            });

        }

        /*Function to mark payment done*/
        function markPaymentDone() {
            var postObj={};
            postObj.ids=[];
            for(var i in vm.paymentObj){
               postObj.ids.push(vm.paymentObj[i].id);
            }

            dataservice.postData(PAYMENT_DONE_API, postObj, config).then(function(data, status) {
                if (data) {
                    if (data.status) {
                        vm.paymentObj        = [];
                       // appFactory.scrollToTop();
                        vm.modSuccessPayment = true;
                         /*$timeout(function() {
                            vm.modSuccessPayment = true;
                              //appFactory.scrollToDiv($('.scrollClass').offset().top);
                          }, 500);*/
                    
                    }
                }

            }, function() {});

        }

        /*Function to show code of conduct popup*/
        function openConductPopup(){
            $('#lender-code-conduct').modal({
                backdrop: 'static',
                keyboard: false
            });
        }

    }

    angular.module('lsLenderApp')
        .component('paymentComponent', {
            templateUrl: 'app/payment/payment.html',
            controller: paymentController,
            controllerAs: 'paymentCtrl',
            $routeConfig: []
        });

})(window.angular);
