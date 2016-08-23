(function(angular) {

    "use strict";

    /**
     * @memberOf lsLenderApp
     * @param {Service} $scope glue between view and controller
     * 
     * @description ... (mean non-terminal in angular) it should continue to match routes in child components
     */

    /* @ngInject */
    function portfolioPoolCtrl($scope, $rootScope, $rootRouter, $timeout, appFactory, dataservice, API_ENDPOINT){
        var vm = this;

        var LENDER_INFO_API = API_ENDPOINT + 'lender/profile/';
        var INVEST_API = API_ENDPOINT + 'investment/invest_now/';
        var config;         

        //vm.showRiskData = true;
        vm.riskFactor;
        vm.createdpool = undefined;

        vm.investnow        = investnow;
        vm.changePoolAmount = changePoolAmount;
        vm.deleteFromPool   = deleteFromPool;
        vm.collapsePoolData = collapsePoolData;


        function calculateRiskFactor() {
            var riskCumilative = 0;
            var totalAmt = 0;
            if (vm.createdpool == undefined)
                vm.riskFactor = 0;
            else {
                for (var i in vm.createdpool) {
                    riskCumilative += (vm.createdpool[i].rate_of_interest * vm.createdpool[i].loan_amount);
                    totalAmt += vm.createdpool[i].loan_amount;
                }
                vm.riskFactor = riskCumilative / totalAmt;
            }

        }

        function investnow(){
            config = appFactory.setToken();
             sentInvestDataToDB();
        }

        function checkForUserProfile() {
            
            dataservice.getData(LENDER_INFO_API, {}, config).then(function(data, status) {
                if (data) {
                    if (data.status) {
                       if(data.data.ifsc!="" && data.data.ifsc!=undefined){
                          $rootRouter.navigate(['Payment']);
                        }
                       else{
                        $('#lenderInfoModal').modal({
                            backdrop: 'static',
                            keyboard: false
                        });
                      }

                    }
                }
            }, function() {
                $('#lenderInfoModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
            });

        }

        function sentInvestDataToDB(){
            var postObj={};
            var loan=[];
            var brwrLoan;
            var totAmt = 0;

            for(var i in vm.createdpool){
                brwrLoan = {};
                brwrLoan.loan_code = vm.createdpool[i].loan_code;
                brwrLoan.invest_amount = vm.createdpool[i].selected_amount;
                totAmt+=vm.createdpool[i].selected_amount;
                loan.push(brwrLoan);
            }
            postObj.total_amount = totAmt;
            postObj.loans = loan;

             dataservice.postData(INVEST_API, postObj, config).then(function(data, status) {
                if (data) {
                    if (data.status) {
                        checkForUserProfile();
                    }
                }
            }, function() {
               
            });
        }

        /*To pass borrower to invest page*/
        function changePoolAmount(borrower){
            vm.changepoolpop({brwr:borrower});
        }

        function deleteFromPool(borrower){
            vm.deletepool({brwr:borrower});
        }

        /*Function to collapse pool*/
        function collapsePoolData(){
            if(vm.showRiskData)
                $('.pool-container').css('height', $('.pool-container').height());
            vm.showRiskData=!vm.showRiskData;
        }
        $scope.$watch('poolCtrl.createdpool', function(newVal, oldVal){
            calculateRiskFactor();
         },true);

        $timeout(function() {
            /* hide dropdown if click outside of itself */
            $(document).click(function(e) {
                 e.stopPropagation();
                var container = $(".jsPoolDropdownTrigger");

                //check if the clicked area is dropDown or not
                if (container.has(e.target).length === 0) {
                    $('.jsDropDownMenu').hide();
                }
            });

            /* Clicks within the dropdown won't make it past the dropdown itself */
            // $(".jsDropDownMenu").click(function(e) {
            //     e.stopPropagation();
            // });

            $(document).on('click', '.jsPoolDropdownTrigger', function() {
                console.info('menu item trigger');

                var $this = $(this),
                    pos = $this.position();


                $('.jsDropDownMenu').hide();

                var menuTargetSel = $this.data('target'),
                    menuTargetObj = $('#' + menuTargetSel);

                menuTargetObj.css({
                    position: 'absolute',
                    left: pos.left + 20,
                    top: pos.top,
                    zIndex: 1000
                });

                menuTargetObj.show();
            });

        }, 0); // timeout end
    }

    angular.module('lsLenderApp')
        .component('portfolioPoolComponent', {
            templateUrl: 'app/components/pool_component/portfolio-pool.html',
            controller: portfolioPoolCtrl,
            controllerAs: 'poolCtrl',
            bindings: {
                createdpool: '=',
                userpref: '=',
                collapsible: '@',
                changepoolpop: '&',
                deletepool: '&',
                showRiskData: '='
            },
            $routeConfig: []
        });

})(window.angular);
