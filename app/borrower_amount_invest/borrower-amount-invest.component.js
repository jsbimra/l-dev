(function(angular) {

    "use strict";

    /**
     * @memberOf lsLenderApp
     * @name borrowerAmount
     * @param {Service} $scope service to provide scope between controller and view of component
     * @description borrowerAmount controller
     */

    /* @ngInject */
    function borrowerAmountController($scope, $location, $timeout, appFactory, dataservice, APP_CONSTANT, API_ENDPOINT, $rootRouter) {
        var vm = this;


        vm.selectAmount  = selectAmount;
        vm.closeBorrower = closeBorrower;

        /**Function to add the selected amount to the corresponding borrower
            @pos: index of selected borrower
            @amount: the amount selected to be invested on the particular borrower
        **/
        function selectAmount(pos,amount){
           vm.selectedborrowers[pos].selected_amount = amount;
        }

        /*Function to cancel amount selection*/
        function closeBorrower(){
            $('#borrowerAmountModal').modal('hide');
        }

    };/* controller code end */

    angular.module('lsLenderApp')
        .component('borrowerAmountComponent', {
            templateUrl: 'app/borrower_amount_invest/borrower-amount-invest.html',
            controller: borrowerAmountController,
            controllerAs: 'amtCtrl',
            bindings: {
                selectedborrowers: '=',
                submitAmounts: '&'
            },
            $routeConfig: [
                
            ]
        });

})(window.angular);
