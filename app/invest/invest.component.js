(function(angular) {

    "use strict";

    /**
     * @memberOf lsLenderApp
     * @param {Service} $scope glue between view and controller
     * 
     * @description ... (mean non-terminal in angular) it should continue to match routes in child components
     */

    /* @ngInject */
    function investComponentCtrl($scope, $rootScope, $rootRouter, $timeout, $http, APP_CONSTANT, API_ENDPOINT, appFactory, dataservice, $compile, DTOptionsBuilder, DTColumnBuilder, $q, $filter, $sce) {
        var vm = this;

        var riskMapping = APP_CONSTANT.RATE_RISKS;
        var config = appFactory.setToken();
        var POOL_DATA_API = API_ENDPOINT + 'investment/create_pool/';
        var INVEST_DATA_API = API_ENDPOINT + 'investment/invest_now/';
        var EDIT_POOL = API_ENDPOINT + 'investment/edit_pool/';
        var USER_VISIT_API  = API_ENDPOINT + 'user/visit_status/';
        var dataSet = [];
        var borrowerData = [];

        vm.dataInfo = [];
        vm.createdpool = [];
        vm.selectedBorrowers = [];
        vm.tableData = [];
        vm.borrowerNumber = 0;
        vm.rowSelector = false;
        vm.investWidgetString = ["Amount to Invest", "Select your rate of return", "Choose your desired tenure"];

        vm.buildPool          = buildPool;
        vm.selectAllBorrowers = selectAllBorrowers;
        vm.addBorrowersToPool = addBorrowersToPool;
        vm.submitedAmounts    = submitedAmounts;
        vm.setCheckboxValue   = setCheckboxValue;
        vm.deleteFromPool     = deleteFromPool;
        vm.changePoolAmount   = changePoolAmount;


        vm.$routerOnActivate = function(next, prev) {

            /* scroll page to top */
            appFactory.scrollToTop();
            
            /*Redirect user to Home if user not logged in */
            appFactory.userLoggedIn();
            
            vm.userPref = JSON.parse(appFactory.getLocalStorageData(APP_CONSTANT.PORTFOLIO_PREF));
            getUserVisit();
            getPool();
            $scope.$broadcast('reDrawMeter');


            // var titleHtml = '<input type="checkbox" id="select-all" name="rowSelected" id="rowSelected" ng-model="investCtrl.rowSelector" ng-change="investCtrl.selectAllBorrowers()">';
            //getBorrowerTable();

        };

        /**Function to render the table-cant be called from routerActive(referential error)*/
        drawTable();

        function drawTable() {
            var titleHtml = '<input type="checkbox" id="select-all" name="rowSelected" id="rowSelected" ng-model="investCtrl.rowSelector" ng-change="investCtrl.selectAllBorrowers()">';

            vm.dtOptions = DTOptionsBuilder.fromFnPromise(function() {
                    return getBorrowerTable();
                })
                .withScroller()
                .withOption('bFilter', false)
                .withOption('order', [1, 'asc'])
                .withOption('deferRender', true)
                .withOption('paging', false)
                .withOption('info', false)
                .withOption('processing', true)
                .withOption('scrollY', 350)
                .withOption('scrollCollapse', true)
                .withOption('responsive', true)
                .withOption('oLanguage', {"sEmptyTable" : "Currently no borrower's available to show"})
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
            vm.dtColumns = [DTColumnBuilder.newColumn(null).withTitle(titleHtml).notSortable()
                .renderWith(function(data, type, full, meta) {
                    //vm.selected[full.id] = false;
                    return '<input type="checkbox" id="borrowerCheck" ng-checked="investCtrl.rowSelector" ng-model="investCtrl.tableData [' + meta.row + '].check" ng-change="investCtrl.setCheckboxValue(' + meta.row + ')">';
                }),

                DTColumnBuilder.newColumn('name').withTitle('<img src="img/name_white.png"/> Name'),
                DTColumnBuilder.newColumn('purpose').withTitle('<img src="img/purpose_white.png"/> Purpose'),
                DTColumnBuilder.newColumn('loan_amount').withTitle('<img src="img/amount_white.png"/> Amount'),
                DTColumnBuilder.newColumn('tenure').withTitle('<img src="img/tenure_white.png"/> Tenure'),
                DTColumnBuilder.newColumn('rate_of_interest').withTitle('<img src="img/interest_white.png"/> Interest'),
                DTColumnBuilder.newColumn('percent_invested').withTitle('<img src="img/status_white.png"/> Status')
                .renderWith(function(data, type, full, meta) {
                    return '<div class="status_wrapper"><p><span  ng-bind="' + data + '"></span> %</p><div class="progress progress-striped"><div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: ' + data + '%"></div></div><p>need <span ng-bind=' + vm.tableData[meta.row].remaining_amount + '></span> more</p></div>';
                })
            ];
            vm.dtInstance = {};
        }

        /***Function to get pool- if pool empty send default preference to get pool***/

        function getPool() {
            dataservice.getData(POOL_DATA_API, {}, config).then(function(data, status) {
                if (data) {
                    if (data.status) {
                        vm.createdpool = data.data.pool;
                        borrowerData = data.data.loans;
                        if (vm.createdpool.length == 0 && vm.userPref) {
                            buildPool();
                        }
                        else{
                          $timeout(function() {
                              vm.dtInstance.reloadData();
                          }, 100);

                        }

                    }
                }

            }, function() {
                console.log('get pool API error');
            });
        }
        function buildPool() {
              submitInvest();
        }

        function submitInvest() {
            var prefData = {};
            prefData.amount = vm.userPref.amounttoinvest;
            for (var i in riskMapping) {
                if (riskMapping[i].name == vm.userPref.rateRisk) {
                    prefData.risk_category = riskMapping[i].code;
                    break;
                }
            }
            prefData.min_tenure = vm.userPref.tenureMin;
            prefData.max_tenure = vm.userPref.tenureMax;
            dataservice.postData(POOL_DATA_API, prefData, config).then(function(data, status) {
                if (data) {
                    if (data.status) {
                        vm.createdpool = data.data.pool;
                        borrowerData = data.data.loans;
                        vm.dtInstance.reloadData();
                    }
                }

            }, function() {
                console.log('Create pool API error');
            });

        }


        /***Function to select all the borrowers***/
        function selectAllBorrowers() {
            if (vm.rowSelector) {
                vm.borrowerNumber = vm.dataInfo.length;
            } else {
                vm.borrowerNumber = 0;
            }
            for (var i in vm.dataInfo) {
                vm.dataInfo[i]["check"] = vm.rowSelector;
            }
        }

        /**Function to select individual borrowers**/
        function setCheckboxValue(pos) {
            if (vm.tableData[pos]["check"]) {
                vm.borrowerNumber++;
            } else {
                var el = $('#select-all').get(0);
                if (el && el.checked && ('indeterminate' in el)) {
                    // Set visual state of "Select all" control 
                    // as 'indeterminate'
                    el.indeterminate = true;
                }
                vm.borrowerNumber--;
            }
        }

        /**Function add selected borrowers to pool**/
        function addBorrowersToPool() {
            vm.selectedBorrowers = [];
            for (var i in vm.tableData) {
                if (vm.tableData[i]["check"]) {
                    vm.selectedBorrowers.push(borrowerData[i]);
                }
            }
            $('#borrowerAmountModal').modal({
                backdrop: 'static',
                keyboard: false
            });
        }

        /**Function to update the pool table with selected amounts**/
        function getUpdatedTables(borrowers) {
          var inPool = false;
          var borrowerObj;
          for(var j in borrowers){
            inPool = false;
            for (var i in vm.createdpool) {
               // borrowerObj=borrowers[j];
                if(vm.createdpool[i].loan_code === borrowers[j].loan_code){
                   inPool = true;
                    vm.createdpool[i].selected_amount = borrowers[j].selected_amount;
                }
            }
            if(!inPool){
                  vm.createdpool.push(borrowers[j]);
            }
          }
        }

        /**Function called from borrowers popup after amount is selected**/
        function submitedAmounts(borrowers) {
            var postObj = {};
            var borrower;
            var selectedBorwrs = [];

            
            for(var j in borrowers){
                for(var br in borrowerData){
                  if(borrowerData[br].loan_code == borrowers[j].loan_code){
                    borrowerData.splice(br,1);
                  }
                }
            }
            vm.dtInstance.reloadData();

            for (var i in borrowers) {
                borrower = {};
                borrower.loan_code = borrowers[i].loan_code;
                borrower.invest_amount = borrowers[i].selected_amount;
                selectedBorwrs.push(borrower);

            }
            postObj.loans = selectedBorwrs;
            dataservice.postData(EDIT_POOL, postObj, config).then(function(data, status) {
                if (data) {
                    if (data.status) {
                        getUpdatedTables(borrowers);
                    }
                }

            }, function() {
                console.log('Create pool API error');
            });

        }

        /**Get set of all borrowers**/
        function getBorrowerTable() {
            vm.tableData = [];

            vm.tableData = (JSON.parse(JSON.stringify(borrowerData)));
            for (var i in vm.tableData) {
                vm.tableData[i]["check"] = false;
                vm.tableData[i]["tenure"] += " Months";
                vm.tableData[i]["loan_amount"] = $filter('awnum')(vm.tableData[i]["loan_amount"],2,".","round",false,true,",",'','');
                vm.tableData[i]["rate_of_interest"] += " %";
                vm.tableData[i]["percent_invested"] = Math.round(vm.tableData[i]["percent_invested"]);
                vm.tableData[i]["remaining_amount"] = JSON.stringify($filter('awnum')(vm.tableData[i]["remaining_amount"],2,".","round",false,true,"'",'',''));
                vm.tableData[i]["remaining_amount"] = vm.tableData[i]["remaining_amount"].replace(/"/g, '&quot;');
            }
            var deferred = $q.defer();
            deferred.resolve(vm.tableData);
            return deferred.promise;

            /* dataSet=[{
                   "check": true,
                   "name": "Rahul asd",
                   "purpose": "Education",
                   "loan_amount": 75000,
                   "tenure": 18,
                   "rate_of_interest": 17,
                   "status": [{
                       "val": 20,
                       "remAmt": 150000
                   }]
               },{
                   "check": true,
                   "name": "Sahul asd",
                   "purpose": "Education",
                   "loan_amount": 75000,
                   "tenure": 18,
                   "rate_of_interest": 17,
                   "status": [{
                       "val": 50,
                       "remAmt": 150000
                   }]
               },{
                   "check": true,
                   "name": "Aahul asd",
                   "purpose": "Education",
                   "loan_amount": 75000,
                   "tenure": 18,
                   "rate_of_interest": 17,
                   "status": [{
                       "val": 50,
                       "remAmt": 150000
                   }]
               },{
                   "check": true,
                   "name": "Dahul asd",
                   "purpose": "Education",
                   "loan_amount": 75000,
                   "tenure": 18,
                   "rate_of_interest": 17,
                   "status": [{
                       "val": 50,
                       "remAmt": 150000
                   }]
               },{
                   "check": true,
                   "name": "Rahul asd",
                   "purpose": "Education",
                   "loan_amount": 75000,
                   "tenure": 18,
                   "rate_of_interest": 17,
                   "status": [{
                       "val": 50,
                       "remAmt": 150000
                   }]
               },{
                   "check": true,
                   "name": "Rahul asd",
                   "purpose": "Education",
                   "loan_amount": 75000,
                   "tenure": 18,
                   "rate_of_interest": 17,
                   "status": [{
                       "val": 50,
                       "remAmt": 150000
                   }]
               },{
                   "check": true,
                   "name": "Rahul asd",
                   "purpose": "Education",
                   "loan_amount": 75000,
                   "tenure": 18,
                   "rate_of_interest": 17,
                   "status": [{
                       "val": 50,
                       "remAmt": 150000
                   }]
               },{
                   "check": true,
                   "name": "Rahul asd",
                   "purpose": "Education",
                   "loan_amount": 75000,
                   "tenure": 18,
                   "rate_of_interest": 17,
                   "status": [{
                       "val": 50,
                       "remAmt": 150000
                   }]
               },{
                   "check": true,
                   "name": "Rahul asd",
                   "purpose": "Education",
                   "loan_amount": 75000,
                   "tenure": 18,
                   "rate_of_interest": 17,
                   "status": [{
                       "val": 50,
                       "remAmt": 150000
                   }]
               },{
                   "check": true,
                   "name": "Rahul asd",
                   "purpose": "Education",
                   "loan_amount": 75000,
                   "tenure": 18,
                   "rate_of_interest": 17,
                   "status": [{
                       "val": 30,
                       "remAmt": 150000
                   }]
               },{
                   "check": true,
                   "name": "Rahul asd",
                   "purpose": "Education",
                   "loan_amount": 75000,
                   "tenure": 18,
                   "rate_of_interest": 17,
                   "status": [{
                       "val": 50,
                       "remAmt": 150000
                   }]
               },{
                   "check": true,
                   "name": "Rahul asd",
                   "purpose": "Education",
                   "loan_amount": 75000,
                   "tenure": 18,
                   "rate_of_interest": 17,
                   "status": [{
                       "val": 70,
                       "remAmt": 150000
                   }]
               }];*/
        }

        /*Function to change amount when borrower is selected from pool*/
        function changePoolAmount(brwr){
          vm.selectedBorrowers = [];
          vm.selectedBorrowers.push(brwr);
           $('#borrowerAmountModal').modal({
                backdrop: 'static',
                keyboard: false
            });
        }

        /*Function to delete borrower from pool*/
        function deleteFromPool(brwr){

          var data = $.param({
                loan_code:  brwr.loan_code
          });
            dataservice.xdelete(EDIT_POOL+'?'+data, {loan_code:  brwr.loan_code}, config).then(function(data, status) {
                if (data) {
                    if (data.status) {
                        for(var i in vm.createdpool){
                          if(vm.createdpool[i].loan_code == brwr.loan_code){
                            vm.createdpool.splice(i,1);
                            borrowerData.push(brwr);
                             vm.dtInstance.reloadData();
                          }
                        }
                    }
                }

            }, function() {
                console.log('Create pool API error');
            });
          
          console.log(vm.createdpool);
        }
        
        /**Check for intro status**/
        function getUserVisit(){
            dataservice.getData(USER_VISIT_API, {}, config).then(function(data, status) {
                if (data) {
                    if (data.status) {
                        if(data.show_tutorial){
                            startIntro();
                            setTutrorialValue();
                        }
                           
                    }
                }

            }, function() {
                return false;
            });
        }

        function setTutrorialValue(){
             dataservice.postData(USER_VISIT_API, {}, config).then(function(data, status) {
                if (data) {
                   
                }

            }, function() {
                return false;
            });
        }

          


    }

    angular.module('lsLenderApp')
        .component('investComponent', {
            templateUrl: 'app/invest/invest.html',
            controller: investComponentCtrl,
            controllerAs: 'investCtrl',
            // bindings: {$router: '<'}, // need to only use with child components
            $routeConfig: []
        });

})(window.angular);
