(function(angular) {

    "use strict";

    /**
     * @memberOf lsLenderApp
     * @name dashboard EMI View
     * @param {Service} $scope service to provide scope between controller and view of component
     * @description dashboard EMI View Controller
     */

    /* @ngInject */
    function dashboardEMIController($scope, $compile, DTOptionsBuilder, DTColumnBuilder, $q, $timeout, $filter) {
        var vm = this;

        vm.recentEMI    = {};
        vm.fullSchedule = {};

        
        drawTable();
        function drawTable(){
          
           vm.recentEMI.dtOptions = DTOptionsBuilder.fromFnPromise(function() {
                            return borrowerRecentEMIs();
                          })
                          .withScroller()
                          .withOption('bFilter', false)
                          .withOption('paging', false)
                          .withOption('info', false)
                          .withOption('sort', false)
                          .withOption('responsive', true)
                          .withOption('createdRow', function(row, data, dataIndex) {
                              // Recompiling so we can bind Angular directive to the DT    
                              $compile(angular.element(row).contents())($scope);
                          })
                          .withOption('headerCallback', function(header) {
                              if (!vm.headerCompiled) {
                                  // Use this headerCompiled field to only compile header once
                                  vm.headerCompiled = true;
                                  $compile(angular.element(header).contents())($scope);
                              }
                          });

          vm.recentEMI.dtColumns = [DTColumnBuilder.newColumn('emi_due_date').withTitle('Due Date'),
                          DTColumnBuilder.newColumn('emi_due_amount').withTitle('Emi Amount'),
                          DTColumnBuilder.newColumn('emi_due_principal').withTitle('Principal'),
                          DTColumnBuilder.newColumn('emi_due_interest').withTitle('Interest Earned'),
                          DTColumnBuilder.newColumn('closing_balance').withTitle('Closing Balance'),
                          DTColumnBuilder.newColumn('emi_status').withTitle('Status'),
                          DTColumnBuilder.newColumn('emi_paid_amount').withTitle('Amount Received')
          ];

          vm.recentEMI.dtInstance={};

          vm.fullSchedule.dtOptions = DTOptionsBuilder.fromFnPromise(function() {
                            return borrowerEMIs();
                          })
                          .withScroller()
                          .withOption('bFilter', false)
                          .withOption('paging', false)
                          .withOption('info', false)
                          .withOption('sort', false)
                          .withOption('responsive', true)
                          .withOption('createdRow', function(row, data, dataIndex) {
                              // Recompiling so we can bind Angular directive to the DT
                              $compile(angular.element(row).contents())($scope);
                          })
                          .withOption('headerCallback', function(header) {
                              if (!vm.headerCompiled) {
                                  // Use this headerCompiled field to only compile header once
                                  vm.headerCompiled = true;
                                  $compile(angular.element(header).contents())($scope);
                              }
                          });

          vm.fullSchedule.dtColumns = [DTColumnBuilder.newColumn('emi_due_date').withTitle('Due Date'),
                          DTColumnBuilder.newColumn('emi_due_amount').withTitle('Emi Amount'),
                          DTColumnBuilder.newColumn('emi_due_principal').withTitle('Principal'),
                          DTColumnBuilder.newColumn('emi_due_interest').withTitle('Interest Earned'),
                          DTColumnBuilder.newColumn('closing_balance').withTitle('Closing Balance'),
                          DTColumnBuilder.newColumn('emi_status').withTitle('Status'),
                          DTColumnBuilder.newColumn('emi_paid_amount').withTitle('Amount Received')
          ];
          vm.fullSchedule.dtInstance={};
        }

        function borrowerEMIs(){
          var newObj={};
          var totEMI=0;
          var totPrinciple=0;
          var totInterest=0;
          var totClosingBal=0;
          var totAmt=0;
            for(var i in vm.emiSchedule){
              vm.emiSchedule[i].emi_due_date = $filter('date')(vm.emiSchedule[i].emi_due_date, 'dd/MM/yy');
              totEMI+=parseInt(vm.emiSchedule[i].emi_due_amount);
              totPrinciple+=parseInt(vm.emiSchedule[i].emi_due_principal);
              totInterest+=parseInt(vm.emiSchedule[i].emi_due_interest);
              totClosingBal+=parseInt(vm.emiSchedule[i].closing_balance);
              totAmt+=parseInt(vm.emiSchedule[i].emi_paid_amount);
            }
            newObj["emi_due_date"]="Total";
            newObj["emi_due_amount"]=Math.round(totEMI);
            newObj["emi_due_principal"]=Math.round(totPrinciple);
            newObj["emi_due_interest"]=Math.round(totInterest);
            newObj["closing_balance"]=Math.round(totClosingBal);
            newObj["emi_status"]="-";
            newObj["emi_paid_amount"]=Math.round(totAmt);
            if(vm.emiSchedule[vm.emiSchedule.length-1].emi_due_date != "Total")
                vm.emiSchedule.push(newObj);

            var deferred = $q.defer();
            deferred.resolve(vm.emiSchedule); 
            return deferred.promise;
        }

        function borrowerRecentEMIs(){
            var recentemi=[];
            for(var i in vm.emiSchedule){
              vm.emiSchedule[i].emi_due_date = $filter('date')(vm.emiSchedule[i].emi_due_date, 'dd/MM/yy');
                if(vm.emiSchedule[i]["emi_status"] != "" && vm.emiSchedule[i]["emi_status"] != "-"){
                    recentemi.push(vm.emiSchedule[i]);
                }
            }
            var deferred = $q.defer();
            deferred.resolve(recentemi); 
            return deferred.promise;
        }

        function refreshTable(){
           $timeout(function() {
                vm.recentEMI.dtInstance.reloadData();
                 vm.fullSchedule.dtInstance.reloadData();
                        }, 100);
          
        }

        $scope.$watch(
            function( $scope ) {
                // This becomes the value we're "watching".
                return(vm.emiSchedule);
            },
            function( newValue ) {
               refreshTable();
            }
        );


    };/* controller code end */

    angular.module('lsLenderApp')
        .component('emiComponent', {
            templateUrl: 'app/dashboard/dashboard_EMI/dashboard-emi.html',
            controller: dashboardEMIController,
            controllerAs: 'emiCtrl',
            bindings: {
                emiSchedule: '='
            },
            $routeConfig: [
                
            ]
        });

})(window.angular);
