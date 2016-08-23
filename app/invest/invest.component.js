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
        var INVEST_API = API_ENDPOINT + 'investment/invest_now/';
        var EDIT_POOL = API_ENDPOINT + 'investment/edit_pool/';
        var USER_VISIT_API  = API_ENDPOINT + 'user/visit_status/';
        var LENDER_INFO_API = API_ENDPOINT + 'lender/profile/';
        var dataSet = [];
        var borrowerData = [];
        var directInvest = false;
        var respDT;

        vm.dataInfo = [];
        vm.createdpool = [];
        vm.selectedBorrowers = [];
        vm.tableData = [];
        vm.borrowerNumber = 0;
        vm.rowSelector = false;
        vm.investWidgetString = ["Amount to Invest", "Select your rate of return", "Choose your desired tenure"];
        vm.collapsePool = true;

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
            appFactory.hamburgerOpen();
            var loggedStatus = appFactory.userLoggedIn();
            if(loggedStatus){
                vm.userPref = JSON.parse(appFactory.getLocalStorageData(APP_CONSTANT.PORTFOLIO_PREF));
                getUserVisit();
                getPool();
                $timeout(function() {
                    setPoolHeight();
                }, 100);
                
                
                $scope.$broadcast('reDrawMeter');
            }
        };

        /**Function to render the table-cant be called from routerActive(referential error)*/
        drawTable();

        function drawTable() {
            var brkPts = [
                            { name: 'desktop',  width: Infinity },
                            { name: 'tablet-l', width: 1024 },
                            { name: 'tablet-p', width: 768 },
                            { name: 'mobile-l', width: 425 },
                            { name: 'mobile-m', width: 375 },
                            { name: 'mobile-p', width: 320 }
                        ];
            var titleHtml = '<input type="checkbox" id="select-all" name="rowSelected" id="rowSelected" ng-model="investCtrl.rowSelector" ng-change="investCtrl.selectAllBorrowers()">';
            respDT = {breakpoints:brkPts, details: {renderer: rendererRows}};
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
                .withOption('scrollY', 504)
                .withOption('scrollCollapse', true)
                .withOption('responsive', respDT)
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
                DTColumnBuilder.newColumn('tenure').withTitle('<img src="img/tenure_white.png"/> Tenure').withClass('desktop tablet-l tablet-p mobile-l mobile-m'),
                DTColumnBuilder.newColumn('rate_of_interest').withTitle('<img src="img/interest_white.png"/> Interest').withClass('desktop tablet-l tablet-p mobile-l'),
                DTColumnBuilder.newColumn('percent_invested').withTitle('<img src="img/status_white.png"/> Status').withClass('desktop tablet-l tablet-p')
                .renderWith(function(data, type, full, meta) {
                    return '<div class="status_wrapper"><p><span>' + data + '</span> %</p><div class="progress progress-striped"><div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: ' + data + '%"></div></div><p>need <span>' + vm.tableData[meta.row].remaining_amount + '</span> more</p></div>';
                })
            ];
            vm.dtInstance = {};
        }

         function rendererRows( api, rowIdx ,columns) {

        /**
         *
         * Override the default renderer for child's rows.
         *
         * @params {object}: API instance from datatable
         * @params {int}: Contains the row index
         *
         * @type {*|string}
         **/
        
        var data = api.cells( rowIdx, ':hidden' ).eq(0).map( renderCell ).toArray().join('');

          function renderCell( cell ) {

                /**
                 *
                 * Render the childs columns keeping the events used in
                 * @renderWith option.
                 *
                 * @params {object}: Cell api instance from datatables.
                 *
                 * @return {string}: The child's row html.
                 *
                 **/

                var header, _cell, cellData, index, column, columnData, rowObject;

                // gets the header
                header = angular.element(api.column(cell.column).header());

                // gets the target cell from map
                _cell = api.cell(cell);

                // gets the cell's data
                cellData = _cell.data();

                // gets the indexes info
                // @index is an object with row and column index
                index = _cell.index();

                // gets the angular-datable column instance.
                column = _cell.context[0].aoColumns[index.column];

                // gets the object that is filling the table row information
                rowObject = _cell.context[0].aoData[index.row]._aData;
                // checks if the @renderWith is a function
                if(angular.isFunction(column.mRender)) {
                    //if(cell.column!=6)
                    columnData = column.mRender(cellData, null, rowObject,cell);
                } else {

                    columnData = cellData;
                }

                // create the new row template
                var template = '<li>'+
                               '    <span><b>'+
                                     header.text() + ':' +
                               '    </b></span>'+
                               '    <span> '+
                                     columnData+
                               '    </span>'+
                               '</li>';

                return template;
            }

            // gets the table and append the rows
            var table = angular
                            .element('<ul/>')
                            .append(data);

            // compile the table to keep the events
            $compile(table.contents())($scope);
            return table;
 }

        /***Function to get pool- if pool empty send default preference to get pool***/

        function getPool() {
            dataservice.getData(POOL_DATA_API, {}, config).then(function(data, status) {
                if (data) {
                    if (data.status) {
                        vm.createdpool = data.data.pool;
                        borrowerData = data.data.loans;
                        $timeout(function() {
                            vm.dtInstance.reloadData();
                        }, 100);

                    }
                }

            }, function() {
                console.log('get pool API error');
            });
        }
        function buildPool(scrollBoolean) {
            vm.userPref = JSON.parse(appFactory.getLocalStorageData(APP_CONSTANT.PORTFOLIO_PREF));
            submitInvest();
            if(scrollBoolean){
                vm.collapsePool = true;
                appFactory.scrollToDiv($('.scrollClass').offset().top);
            }
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
                vm.borrowerNumber = vm.tableData.length;
            } else {
                vm.borrowerNumber = 0;
            }
            for (var i in vm.tableData) {
                vm.tableData[i]["check"] = vm.rowSelector;
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
        function addBorrowersToPool(invest) {
            directInvest = invest;
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
          if(!directInvest){
              var inPool = false;
              var borrowerObj;
              vm.borrowerNumber = 0;
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
         else{
            investDirectly(borrowers);
          }
        }

        /*Function to invest directly*/
        function investDirectly(borrowers){
            var postObj={};
            var loan=[];
            var brwrLoan;
            var totAmt = 0;

            for(var i in borrowers){
                brwrLoan = {};
                brwrLoan.loan_code = borrowers[i].loan_code;
                brwrLoan.invest_amount = borrowers[i].selected_amount;
                totAmt+=borrowers[i].selected_amount;
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

        /*Check for lender profile*/

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

        /**Function called from borrowers popup after amount is selected**/
        function submitedAmounts(borrowers,addToInvest) {
            if(addToInvest){
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
        }

        /*Function to format borrower data*/
        function formatBorrowerData(){
           // setBorrowerCarouselData(); //For dummy data
            vm.tableData = [];

            vm.tableData = (JSON.parse(JSON.stringify(borrowerData)));

            for (var i in vm.tableData) {
                vm.tableData[i]["check"] = false;
                vm.tableData[i]["tenure"] += " Months";
                vm.tableData[i]["loan_amount"] = $filter('awnum')(vm.tableData[i]["loan_amount"],2,".","round",false,true,",",'','');
                vm.tableData[i]["rate_of_interest"] += " %";
                vm.tableData[i]["percent_invested"] = Math.round(vm.tableData[i]["percent_invested"]);
                vm.tableData[i]["remaining_amount"] = $filter('awnum')(vm.tableData[i]["remaining_amount"],2,".","round",false,true,"'",'','');
               //console.log(vm.tableData[i]["remaining_amount"]);
               // vm.tableData[i]["remaining_amount"] = vm.tableData[i]["remaining_amount"].replace(/"/g, '&quot;');
            }
             //buidCarouselView(); For borrower card layout
            /* $timeout(function() {
                  vm.dtInstance.reloadData();
              }, 100);*/
        }

        /**Get set of all borrowers**/
        function getBorrowerTable() {
            formatBorrowerData();
            var deferred = $q.defer();
            deferred.resolve(vm.tableData);
            return deferred.promise;
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
          
        }
        
        /**Check for intro status**/
        function getUserVisit(){
            dataservice.getData(USER_VISIT_API, {}, config).then(function(data, status) {
                if (data) {
                    if (data.status) {
                        if(data.show_tutorial){
                            setTutrorialValue();
                            if(appFactory.detectIsMobile()){
                                // console.info('mobile detected');
                                startIntro('MobileOrTablet');
                            }else{
                                // console.info('desktop detected');
                                startIntro('Desktop');
                            }

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

        /***Borrower Carousel View***/
         function setBorrowerCarouselData(){
            borrowerData = [
                        {"loan_code":1,
                         "name":"XYZ",
                         "purpose":"Education",
                         "loan_amount":150000,
                         "tenure":24,
                         "rate_of_interest":18,
                         "percent_invested":90,
                         "remaining_amount":10000},
                         {"loan_code":1,
                         "name":"XYZ",
                         "purpose":"Education",
                         "loan_amount":150000,
                         "tenure":24,
                         "rate_of_interest":18,
                         "percent_invested":90,
                         "remaining_amount":10000},
                         {"loan_code":1,
                         "name":"XYZ",
                         "purpose":"Education",
                         "loan_amount":150000,
                         "tenure":24,
                         "rate_of_interest":18,
                         "percent_invested":90,
                         "remaining_amount":10000},
                         {"loan_code":1,
                         "name":"XYZ",
                         "purpose":"Education",
                         "loan_amount":150000,
                         "tenure":24,
                         "rate_of_interest":18,
                         "percent_invested":90,
                         "remaining_amount":10000},
                         {"loan_code":1,
                         "name":"XYZ",
                         "purpose":"Education",
                         "loan_amount":150000,
                         "tenure":24,
                         "rate_of_interest":18,
                         "percent_invested":90,
                         "remaining_amount":10000},
                         {"loan_code":1,
                         "name":"XYZ",
                         "purpose":"Education",
                         "loan_amount":150000,
                         "tenure":24,
                         "rate_of_interest":18,
                         "percent_invested":90,
                         "remaining_amount":10000},
                         {"loan_code":1,
                         "name":"XYZ",
                         "purpose":"Education",
                         "loan_amount":150000,
                         "tenure":24,
                         "rate_of_interest":18,
                         "percent_invested":90,
                         "remaining_amount":10000},
                         {"loan_code":1,
                         "name":"XYZ",
                         "purpose":"Education",
                         "loan_amount":150000,
                         "tenure":24,
                         "rate_of_interest":18,
                         "percent_invested":90,
                         "remaining_amount":10000},
                         {"loan_code":1,
                         "name":"XYZ",
                         "purpose":"Education",
                         "loan_amount":150000,
                         "tenure":24,
                         "rate_of_interest":18,
                         "percent_invested":90,
                         "remaining_amount":10000}
                         ];
         }

         /*Function to build carousel view*/
         function buidCarouselView(){
             $timeout(function() {
                  showBorrowerCarousel();
              }, 100);
            
         }

         

        /* Funtion is checking for Window size*/
        var $window = $(window);

        function setPoolHeight(){
            if($window.width() >= 768 && $window.width() <= 991){
                $('.pool-container').height(parseInt($('#auto-invest-sec .one-forth-box').height())+14 +"px");
            }
            else if($window.width() > 991){
                $('.pool-container').height('531px');
            }
            else{
                $('.pool-container').height('auto');
            }
         }

        function resize() {
            if ($window.width() < 769) {
                $timeout(function() {
                     $('.form-pref-group-TEMP').removeClass('invest-data-wrapper');
                }, 100);
                return;
            }
            $('.form-pref-group-TEMP').addClass('invest-data-wrapper');
            setPoolHeight();

        }
        $window
            .resize(resize)
            .trigger('resize');
        
 
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
