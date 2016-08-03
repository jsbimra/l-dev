(function(angular) {

    "use strict";

    /**
     * @memberOf lsLenderApp
     * @param {Service} $scope glue between view and controller
     * 
     * @description ... (mean non-terminal in angular) it should continue to match routes in child components
     */

    /* @ngInject */
    function autoInvestController($scope, $location, $rootScope, $rootRouter, $timeout, appFactory, APP_CONSTANT, dataservice, API_ENDPOINT) {
        var vm = this;

        var POOL_DATA_API   = API_ENDPOINT + 'investment/create_pool/';
        var LENDER_INFO_API = API_ENDPOINT + 'lender/profile/';
        var USER_VISIT_API  = API_ENDPOINT + 'lender/flow_decision/';
        var riskMapping = APP_CONSTANT.RATE_RISKS;
        var config;

        vm.showPool = false;
        vm.createdpool;
        
        vm.userPref;
        vm.buildPortfolio = buildPortfolio;

        
        /* Router Lifecycle hooks */
	    vm.$routerOnActivate = function(next, prev) {

             /* scroll page to top */
            appFactory.scrollToTop();

	    	/*Redirect user to Home if user not logged in */
			appFactory.userLoggedIn();

            init();
            $scope.$broadcast('reDrawMeter');
		}


        function init() {
            config = appFactory.setToken();
            userVisitStatus();
            if (appFactory.getLocalStorageData(APP_CONSTANT.POOL_CREATION_STATUS) == "true") {
                vm.showPool = true;
                vm.userPref = JSON.parse(appFactory.getLocalStorageData(APP_CONSTANT.PORTFOLIO_PREF));
                if(vm.userPref)
                   postUserPreference();
            }

        }

        /**Function to mark in db that user has visited the page**/
        function userVisitStatus(){
             dataservice.postData(USER_VISIT_API, {}, config).then(function(data, status) {
                if (data) {
                    if (data.status) {
                    }
                }

            }, function() {});
        }

        function buildPortfolio() {
            console.info('build now button');
            appFactory.setLocalStorageData(APP_CONSTANT.POOL_CREATION_STATUS, true);
            vm.userPref = JSON.parse(appFactory.getLocalStorageData(APP_CONSTANT.PORTFOLIO_PREF));
            postUserPreference();
            vm.showPool = true;
        }

        function postUserPreference() {
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
                    }
                }

            }, function() {});

        }

        

    }

    angular.module('lsLenderApp')
        .component('autoInvestComponent', {
            templateUrl: 'app/auto_invest/auto-invest.html',
            controller: autoInvestController,
            controllerAs: 'autoCtrl',
            $routeConfig: []
        });

})(window.angular);
