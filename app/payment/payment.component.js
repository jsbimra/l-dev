(function(angular) {

    "use strict";

    /**
     * @memberOf lsLenderApp
     * @param {Service} $scope glue between view and controller
     * 
     * @description ... (mean non-terminal in angular) it should continue to match routes in child components
     */

    /* @ngInject */
    function paymentController($scope, $rootScope, $rootRouter, appFactory, APP_CONSTANT, dataservice, API_ENDPOINT) {
        var vm = this;

        var PAYMENT_DATA_API = API_ENDPOINT + 'investment/invest_now/';
        var config           = appFactory.setToken();
        var riskMapping      = APP_CONSTANT.RATE_RISKS;

        vm.userPref;
        vm.totalAmount = 0;
        vm.paymentObj  = [];

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

        vm.deleteBorrower = deleteBorrower;

        /* Router Lifecycle hooks */
        vm.$routerOnActivate = function(next, prev) {

            /* scroll page to top */
            appFactory.scrollToTop();
            
            /*Redirect user to Home if user not logged in */
            // appFactory.userLoggedIn();

            getPaymentData();
        }

        function getPaymentData() {

            dataservice.getData(PAYMENT_DATA_API, {}, config).then(function(data, status) {
                if (data) {
                    if (data.status) {
                         vm.paymentObj=data.data;
                        for (var i in vm.paymentObj) {
                              vm.totalAmount += vm.paymentObj[i].invested_amount;
                        }
                    }
                }

            }, function() {});

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

    }

    angular.module('lsLenderApp')
        .component('paymentComponent', {
            templateUrl: 'app/payment/payment.html',
            controller: paymentController,
            controllerAs: 'paymentCtrl',
            $routeConfig: []
        });

})(window.angular);
