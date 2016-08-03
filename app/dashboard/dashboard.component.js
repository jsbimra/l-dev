(function(angular) {

    "use strict";

    /**
     * @memberOf lsLenderApp
     * @param {Service} $scope glue between view and controller
     * 
     * @description ... (mean non-terminal in angular) it should continue to match routes in child components
     */

    /* @ngInject */
    function dashboardComponentCtrl($scope, $rootScope, $rootRouter, $timeout, APP_CONSTANT, appFactory, dataservice, $compile, DTOptionsBuilder, DTColumnBuilder, $q, API_ENDPOINT) {
        var vm = this;

        var DASHBOARD_API = API_ENDPOINT + 'lender/dashboard/';
        
        vm.tableData;
        vm.borrowerData = [];
        vm.date         = new Date();

        vm.showEMIS = showEMIS;

        /* Router Lifecycle hooks */
        vm.$routerOnActivate = function(next, prev) {

            /*Redirect user to Home if user not logged in */
             appFactory.userLoggedIn();
             borrowerInvestedData();
        }

         drawTable();
         function drawTable(){
          
           vm.dtOptions = DTOptionsBuilder.fromFnPromise(function() {
                            return getDataForTable();
                          })
                          .withScroller()
                          .withOption('bFilter', false)
                          .withOption('order', [0, 'asc'])
                          .withOption('deferRender', true)
                          .withOption('paging', false)
                          .withOption('info', false)
                          .withOption('processing', true)
                          .withOption('scrollY', 350)
                          .withOption('scrollCollapse', true)
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
          vm.dtColumns = [DTColumnBuilder.newColumn('loan_no').withTitle('# Loan No'),
                          DTColumnBuilder.newColumn('borrower_name').withTitle('<img src="img/purpose_white.png"/> Borrower'),
                          DTColumnBuilder.newColumn('amount').withTitle('<img src="img/amount_white.png"/> Amount'),
                          DTColumnBuilder.newColumn('tenure').withTitle('<img src="img/tenure_white.png"/> Tenure'),
                          DTColumnBuilder.newColumn('interest_rate').withTitle('<img src="img/interest_white.png"/> Interest'),
                          DTColumnBuilder.newColumn(null).withTitle('').notSortable()
                              .renderWith(function(data, type, full, meta) {
                                return '<a ng-click="dashboardCtrl.showEMIS('+meta.row+',$event)"><i class="show-det fa fa-chevron-down" aria-hidden="true"></i></a>';
                                 // return '<emi-component emi-schedule="dashboardCtrl.borrowerData['+meta.row+'].emis"></emi-component>';
                              })
          ];
          vm.dtInstance = {};
        }

        function getDataForTable(){
            vm.tableData=[];
            if(vm.borrowerData["investments"] != undefined){
              vm.tableData = vm.borrowerData["investments"];
            }
            var deferred = $q.defer();
            deferred.resolve(vm.tableData); 
            return deferred.promise;
        }

        function borrowerInvestedData(){
          var config = appFactory.setToken();
          dataservice.getData(DASHBOARD_API, {}, config).then(function(data, status) {
            console.log(data);
                if (data) {
                    if (data.status) {
                        vm.borrowerData = data;//data.data[0]["investments"];
                        vm.borrowerData.interest_earned=Math.round(vm.borrowerData.interest_earned);
                        vm.borrowerData.amount_invested=Math.round(vm.borrowerData.amount_invested);
                        vm.borrowerData.average_roi=Math.round(vm.borrowerData.average_roi);
                        vm.borrowerData.projected_interest=Math.round(vm.borrowerData.projected_interest);
                         $timeout(function() {
                              vm.dtInstance.reloadData();
                          }, 100);
                    }
                }

            }, function() {
                console.log('Dashboard pool API error');
            });
           /* var data=[{
                        "investments": [
                          {
                            "loan_no": "LS42432",
                            "borrower_name": "Biishal Shekjhar",
                            "amount": 456456,
                            "emi": 455,
                            "interest_rate": 11,
                            "tenure": 12,
                            "emis": [
                              {
                                "emi_due_date": "date",
                                "emi_due_amount": 456456,
                                "emi_due_principal": 456645,
                                "emi_due_interest": 785,
                                "emi_due_others": 44,
                                "emi_status": "paid"
                              },
                              {
                                "emi_due_date": "date",
                                "emi_due_amount": 456456,
                                "emi_due_principal": 456645,
                                "emi_due_interest": 785,
                                "emi_due_others": 44,
                                "emi_status": "not paid"
                              }
                            ],
                            "purpose": "Education",
                            "investment_date": "date",
                            "percent_paid": 23
                          },
                          {
                            "loan_no": "LS42432",
                            "borrower_name": "Biishal Shekjhar",
                            "amount": 456456,
                            "emi": 455,
                            "interest_rate": 11,
                            "tenure": 12,
                            "emis": [
                              {
                                "emi_due_date": "date",
                                "emi_due_amount": 456456,
                                "emi_due_principal": 456645,
                                "emi_due_interest": 785,
                                "emi_due_others": 44,
                                "emi_status": "paid"
                              },
                              {
                                "emi_due_date": "date",
                                "emi_due_amount": 456456,
                                "emi_due_principal": 456645,
                                "emi_due_interest": 785,
                                "emi_due_others": 44,
                                "emi_status": "not paid"
                              }
                            ],
                            "purpose": "Education",
                            "investment_date": "date",
                            "percent_paid": 23
                          }
                        ]
                      }];*/
                     
            
        }

        function showEMIS(pos,event){
            var link = angular.element(event.currentTarget),
            icon = link.find('.show-det'),
            tr = link.parent().parent(),
            table = vm.dtInstance.DataTable,
            row = table.row(tr);

            if (row.child.isShown()) {
              document.getElementById("dashboard-table").style.borderSpacing = "0px 9px";
              document.getElementById("dashboard-table").style.marginTop = "0px";
              icon.removeClass('fa-chevron-up').addClass('fa-chevron-down');             
              row.child.hide();
              tr.removeClass('shown');
            }
            else {
              document.getElementById("dashboard-table").style.borderSpacing = "0px";
              document.getElementById("dashboard-table").style.marginTop = "18px";
              icon.removeClass('fa-chevron-down').addClass('fa-chevron-up');
              row.child($compile('<div class="detInfo"><div class="col"><p>Purpose</p><p ng-bind="dashboardCtrl.tableData['+pos+'].purpose"></p></div><div class="col"><p>Investment Date</p><p><span>{{dashboardCtrl.tableData['+pos+'].investment_date | date:"dd/MM/yyyy"}}</span></p></div></div><emi-component emi-schedule="dashboardCtrl.tableData['+pos+'].emis"></emi-component>')($scope)).show();
              tr.addClass('shown');
            }

        }

    }

    angular.module('lsLenderApp')
        .component('dashboardComponent', {
            templateUrl: 'app/dashboard/dashboard.html',
            controller: dashboardComponentCtrl,
            controllerAs: 'dashboardCtrl',
        });

})(window.angular);
