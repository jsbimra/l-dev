/**
 *	@author Loan Singh
 *	@copyright 2016 lender.loansingh.com All right reserved.
 */
(function(angular) {

    "use strict";

    /**
     * @ngdoc directive
     * @namespace lsLenderApp
     * @desc Invest Widget directive
     */

    /* @ngInject */
    function investWidgetMethod() {
        // Runs during compile
        return {
            // name: '',
            // priority: 1,
            // terminal: true,
            scope: {}, // {} = isolate, true = child, false/undefined = no change
            bindToController: {
                onInvestNow: '&onInvestNow',
                buttonText: '@',
                investText: '=',
                buttonColor: '@'
            },
            controller: InvestWidgetController,
            controllerAs: '$ctrl',
            //require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
           // restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
            // template: '',
            templateUrl: 'app/directives/invest-widget.directive.html',
            // replace: true,
            // transclude: true,
            // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
            link: function($scope, iElm, iAttrs, controller) {

                /* required to invoke after dirctive initialize */
                $('[data-toggle="tooltip"]').tooltip({ html: true });
                //Controller is created before link, slider wont be available in controller initially if declared here	
                
            }
        };
    }; /* directive mehod end */

     
    /* @ngInject */
    function InvestWidgetController($scope, $element, $attrs, $transclude, appFactory, APP_CONSTANT,$timeout) {
        var vm = this;

        vm.userPreference        = {};
        vm.slider                = {
            min: 6,
            max: 12,
            options: {
                floor: 3,
                ceil: 24,
                minRange: 0,
                noSwitching: true,
                stepsArray: [3, 6, 12, 18, 24],
                bindIndexForStepsArray: true,
                showTicks : false,
                showTicksValues : true
            }
        };
        vm.buttonStyle = {
            'background-color': vm.buttonColor
        };

        vm.riskRates             = APP_CONSTANT.RATE_RISKS;
        vm.goToDirectiveInvest   = goToDirectiveInvest;
    	vm.tenureMonthsList      = [3,6,12,18,24];
    	vm.tenureSelection	     = tenureSelection;

        function setPreferencesSelected() {
        	setWidgetHeaders();
            //Timer required to delay intialization till html through ng-repeat is rendered
            $timeout(function() {
                  $('[data-toggle="tooltip"]').tooltip({ html: true });
              }, 100);
            
            vm.userPreference.rateRisk = 'Low';
            vm.userPreference.amounttoinvest = 100000;
            var prefer = JSON.parse(appFactory.getLocalStorageData(APP_CONSTANT.PORTFOLIO_PREF));
            if (prefer) {
                if (prefer.hasOwnProperty("amounttoinvest"))
                    vm.userPreference.amounttoinvest = prefer.amounttoinvest;
                if (prefer.hasOwnProperty("rateRisk"))
                    vm.userPreference.rateRisk = prefer.rateRisk;
                if (prefer.hasOwnProperty("tenureMin"))
                    vm.slider.min = prefer.tenureMin;
                if (prefer.hasOwnProperty("tenureMax"))
                    vm.slider.max = prefer.tenureMax;
            }
            else{
                setPreferenceLS();
            }

        }

        /*Set header texts*/
        function setWidgetHeaders(){
        	if(vm.investText == undefined){
        		vm.widgetText = ["I want to invest","My Risks & Return Preferences","For Tenure"];
        	}
        	else
        		vm.widgetText = vm.investText;
        }

        function setPreferenceLS(){
            vm.userPreference.tenureMin = vm.slider.min;
            vm.userPreference.tenureMax = vm.slider.max;
            var pref = vm.userPreference;
            appFactory.setLocalStorageData(APP_CONSTANT.PORTFOLIO_PREF, JSON.stringify(pref)); 
             
        }

        function goToDirectiveInvest() {
            setPreferenceLS();
            vm.onInvestNow();
        }

        setPreferencesSelected();

        function tenureSelection(value,curEle){
        	if(value && curEle){
        		var curEleObj = angular.element(curEle.target);

        		curEleObj.parents('li').addClass('active');
        		
	        	console.info('tenure option selected', value);
	        	console.info('tenure option selected', angular.element(curEle.target).text());
        	}
        }
    };

    angular.module('lsLenderApp')
        .directive('investWidget', [investWidgetMethod]);

})(window.angular);
