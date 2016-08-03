/**
*	@author Loan Singh
*	@copyright 2016 lender.loansingh.com All right reserved.
*/
(function(angular){

	"use strict";

	/**
	* @ngdoc module
	* @namespace lsLenderApp
	* @desc default module
	*/

	angular.module('lsLenderApp', [
		'ngComponentRouter',
		'ngAnimate',
		'ngMessages',
		'ngRoute',
		'app.widget'
	]);

})(window.angular);
 ;/**
*	@author Loan Singh
*	@copyright 2016 lender.loansingh.com All right reserved.
*/
(function(angular){

	"use strict";

	/**
	* @ngdoc module
	* @namespace app.widget
	* @desc default module
	*/

	angular.module('app.widget', [
		'validation.match',
		'rzModule',
		'ngFileUpload',
		'ui.bootstrap',
		'datatables',
		'datatables.scroller',
		'dynamicNumber'
	]);

})(window.angular);
 ;(function(angular){

	"use strict";

	/**
    * @memberof lsLenderApp
    * @ngdoc value
    * @name value
    * @param {String} $routerRootComponent set default component value 'shellComp' to $routerRootComponent
    */
	angular.module('lsLenderApp').value('$routerRootComponent', 'shellComp');
	
	/*
		.config(['$routeProvider',function($routeProvider) {
			$routeProvider.when('/',{
				template: ''
		});
	*/
	
	angular.module('lsLenderApp')
		.run(function($http) {
			$http.defaults.headers.common = 'application/json';
		});
/*
	angular.module('lsLenderApp')
		.run(['$rootScope', '$location', 'appFactory', 'APP_CONSTANT', function ($rootScope, $location, appFactory, APP_CONSTANT) {
	        
	        	console.info($rootScope);
	        	
	        $rootScope.$on('$routeChangeStart', function (event) {
	        	console.info('inside route change start ');
	        	console.info(localStorage.getItem('login_status'));

			        if (localStorage.getItem('login_status') === null || localStorage.getItem('login_status') === undefined) {
			          console.log('DENY : Redirecting to HOME if not login');
			          event.preventDefault();
			          $location.path('/');
			        }
			        else {
			          console.log('ALLOW');
			        }
			  });
	    }]);
*/

	angular.module('lsLenderApp')
		/*@ngInject*/
		.config(['dynamicNumberStrategyProvider', function(dynamicNumberStrategyProvider){
			dynamicNumberStrategyProvider.addStrategy('price', {
				// numInt: 3,
				numFract: 2,
				numSep: '.',
				numPos: true,
				numNeg: false,
				numRound: 'floor',
				numThousand: true
			});
	}]);
})(window.angular);
 ;
(function(angular) {

	"use strict";

    /**
    * @name APP_CONSTANT
    * @memberof lsLenderApp
    * @ngdoc constant 
    * @param {object} object list of properties defined as constants
    * @desc defining constants to be used for entire applications
    */
    angular.module('lsLenderApp')
             
        .constant('APP_CONSTANT', {
            "LOGIN_TOKEN"            : 'token',
            
            "LOGIN_STATUS"           : 'login_status',

            "INVEST_NOW_BTN"         : 'invest_now_btn',

            "COUNT_DOWN_VALUE"       : 10,

            "POOL_CREATION_STATUS"   : 'pool_created',

            "PORTFOLIO_PREF"         : 'portfolio_pref',

            "RATE_RISKS"             : [
                                        {name: 'Low', code: 1, class: 'low', value: '12-16%'},
                                        {name: 'Medium', code: 2, class: 'medium', value: '16-20%'},
                                        {name: 'High', code: 3, class: 'high', value: '20-24%'}
                                       ],

            "LENDER_INFO"            : 'lender_info' ,

            "ADDRESS_DOCUMENT_LISTS" : [
                                        { name: 'Passport', value: 'PASSPORT' },
                                        { name: 'Driving License', value: 'DRIVINGLICENSE' },
                                        { name: 'Voter ID', value: 'VOTERID' },
                                        { name: 'Aadhaar', value: 'AADHAAR' },
                                        { name: 'Bank Statement', value: 'BANKSTATEMENT' }
                                       ],
        })

})(window.angular);

 ;(function(angular) {

    "use strict";

    /**
    * @name appFactory
    * @memberof lsLenderApp
    * @ngdoc factory 
    * @param {service} $timeout angular window.setTimeout service
    * @param {object} APP_CONSTANT constants defined at application levels
    * @desc appFactory hold the system utility methods
    */
    
    /*@ngInject*/
    function appFactory($timeout,APP_CONSTANT, $rootRouter) {
        var factory = {
            timerCountDown      : timerCountDown,
            setLocalStorageData : setLocalStorageData,
            getLocalStorageData : getLocalStorageData,
            setToken            : setToken,
            userLoggedIn        : userLoggedIn,
            scrollToTop         : scrollToTop,
            showSignUpModal     : showSignUpModal
        };

        return factory;

        /**
         * Timer counter to count down the default value
         * @memberof appFactory
         */
        function timerCountDown() {

        }

        /**
         * set value to browser localStorage in key value pair, function requires two parameter one key and other value
         * @memberof appFactory
         * @param {string} key holding name of the local storage key
         * @param {object} val holding json data object 
         */
        function setLocalStorageData(key, val) {
            if ((key !== undefined && key !== '') && (val !== undefined && val !== '')) {
                if (window.localStorage) {
                    localStorage.setItem(key, val);
                } else {
                    console.error('Your browser doesn\'t support localStorage, please try latest another browser');
                }
            }
        }


        /**
         * get localStorage value
         * @memberof appFactory
         * @param {string} key holding name of the local storage key to fetch the value
         * @returns {object} value holding json data 
         */
        function getLocalStorageData(key) {
            if ((key !== undefined && key !== '')) {
                if (window.localStorage) {
                    return localStorage.getItem(key);
                } else {
                    console.error('Your browser doesn\'t support localStorage, please try latest another browser');
                }
            }
        }


        /**
         * set token for each $http request
         * @memberof appFactory
         * @returns {object} config object holding header
         */
        function setToken(){
            var header = {
                           'Authorization': 'Token ' + getLocalStorageData(APP_CONSTANT.LOGIN_TOKEN)
                         };
            var config = {headers:header};
            return config;
        }


        /**
         * check if login status of user logged in or not
         * @memberof appFactory
         * @returns {boolean} return false if user is logged in or not
         */
        function userLoggedIn(){
            // console.info($rootRouter);

            if (localStorage.getItem('login_status') === null || localStorage.getItem('login_status') === undefined || JSON.parse(localStorage.getItem('login_status')) === false) {
                $rootRouter.navigate(['Home']);
                return false;
            }else{
                return true;
            }
        }



        /**
         * scroll page to top of the view port
         * @memberof appFactory
         */
        function scrollToTop() {
            // console.info('scroll to fired');
            /* have to reduce the animation timeout from 1000 to 0 due to flickring issue when scrollbar is at bottom */
            $('html,body').animate({ scrollTop: $('body').offset().top }, 0);
            // return $('html,body').animate({scrollTop: $('body').offset().top }, 0); // causing  not to work scroll top
        }


        /**
         * to show the login-signup modal with signup tab enabled by default
         * @memberof appFactory
         */
        function showSignUpModal() {
            console.info('show signup modal fired');
            $('a[href="#signup-tab"]').tab('show'); // Select tab by name
            $('#loginSignupModal').modal('show');
        }
    };


    angular.module('lsLenderApp').factory('appFactory', ['$timeout', 'APP_CONSTANT', '$rootRouter', appFactory]);

})(window.angular);

 ;(function() {
    'use strict';


    /**
    * Data service to 
    * @ngdoc service
    * @memberOf lsLenderApp
    * @name dataservice
    * @param {service} $http service to make ajax call and get the response
    * @param {object} Upload service to upload the files
    */

    /* @ngInject */
    function dataservice($http,Upload) {
        return {
            getData: getData,
            postData: postData,
            uploadDocument: uploadDocument,
            xdelete: xdelete,
        };


        /**
         * get result of data from query request
         * @memberof dataservice
         * @param {string} serviceURL end point url to fetch data
         * @param {object} data to sent along with the $http request
         * @returns {object} response data
         */
        function getData(serviceURL, data, config) {

            if (data != undefined && angular.isObject(data)) {
                return $http.get(serviceURL, config)
                    .then(getDataComplete)
                    .catch(getDataFailed);
            } else {
                return $http.get(serviceURL)
                    .then(getDataComplete)
                    .catch(getDataFailed);
            }

            function getDataComplete(response) {
                return response.data;

            }

            function getDataFailed(error) {
                return error.data;
                //console.log('XHR Failed for fetch page data.' + error.data);
            }
        }


        /**
         * post data to server
         * @memberof dataservice
         * @param {string} serviceURL end point url to fetch data
         * @param {object} data to sent along with the $http request
         * @param {object} config object to sent along with the $http request
         * @returns {object} response data
         */
        function postData(serviceURL, data, config) {

            if (data != undefined && angular.isObject(data)) {
                return $http.post(serviceURL, data, config)
                    .then(getDataComplete)
                    .catch(getDataFailed);
            }

            function getDataComplete(response) {
                return response.data;

            }

            function getDataFailed(error) {
                return error.data;
               // console.log('XHR Failed for fetch page data.' + error.data);
            }
        }



        /**
         * uploading file to server
         * @memberof dataservice
         * @param {string} serviceURL end point url to fetch data
         * @param {object} data to sent along with the $http request
         * @param {object} config object to sent along with the $http request
         * @returns {object} Upload object handles status of file upload success or failure results
         */
        function uploadDocument(serviceURL, data, config) {
             if (data != undefined && angular.isObject(data)) {
                return Upload.upload({url:serviceURL,
                                      data:data, 
                                      transformRequest: angular.identity,
                                      headers:config.headers
                                    })
                       .then(function (response) {
                            return response.data;
                        }, function (error) {
                            return error.data;
                        }, function (evt) {
                            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                           // console.log(progressPercentage );
                            return progressPercentage;
                        });/*then(getDataComplete, getEventProgress)
                                     .catch(getDataFailed);*/
             }

             /***Find a method to write this way//////
             function getDataComplete(response) {
                return response.data;

            }

            function getDataFailed(error) {
                return error.data;
                console.log('XHR Failed for fetch page data.' + error.data);
            }
            ****/
         }



        /**
         * deleting file from server
         * @memberof dataservice
         * @param {string} serviceURL end point url to fetch data
         * @param {object} data to sent along with the $http request
         * @param {object} config object to sent along with the $http request
         * @returns {service} $http service delete method to delete the file
         */
         function xdelete(serviceURL, data, config) {
             if (data != undefined && angular.isObject(data)) {
                return $http.delete(serviceURL, config)
                    .then(getDataComplete)
                    .catch(getDataFailed);
            }
            function getDataComplete(response) {
                return response.data;

            }

            function getDataFailed(error) {
                console.log('XHR Failed for fetch page data.' + error.data);
                return error.data;
            }
         }
     }

    dataservice.$inject = ['$http','Upload'];
    angular.module('lsLenderApp').factory('dataservice', dataservice);

})();

 ;
(function(angular) {

	"use strict";
    
    /**
    * @name API_ENDPOINT
    * @memberof lsLenderApp
    * @ngdoc constant 
    * @param {string} API_ENDPOINT holds the api end point url
    * @desc defining API end point url
    */
    angular.module('lsLenderApp')
        

       // .constant('API_ENDPOINT', 'http://192.168.200.222:8000/') //NAVNEET MACHINE IP
        .constant('API_ENDPOINT', 'http://los.loansingh.com/')
       // .constant('API_ENDPOINT', 'http://192.168.200.151:8000/') //YOGESH MACHINE IP

     

})(window.angular);

 ;/**
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
            },
            controller: InvestWidgetController,
            controllerAs: '$ctrl',
            // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
            // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
            // template: '',
            templateUrl: 'app/directives/invest-widget.directive.html',
            // replace: true,
            // transclude: true,
            // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
            link: function($scope, iElm, iAttrs, controller, appFactory, APP_CONSTANT) {

                /* required to invoke after dirctive initialize */
                $('[data-toggle="tooltip"]').tooltip();

                //Controller is created before link, slider wont be available in controller initially if declared here	
                /*$scope.slider = {
							  	min: 6,
								max: 12,
								options: {
									floor: 12,
									ceil: 24,
									minRange: 1,
									noSwitching: true,
									stepsArray : [3, 6, 12, 24, 36],
									bindIndexForStepsArray : true
								}
							};
*/
            }
        };
    }; /* directive mehod end */

     
    /* @ngInject */
    function InvestWidgetController($scope, $element, $attrs, $transclude, appFactory, APP_CONSTANT) {
        var vm = this;

        vm.userPreference        = {};
        vm.slider                = {
            min: 3,
            max: 24,
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

        vm.riskRates             = APP_CONSTANT.RATE_RISKS;
        vm.goToDirectiveInvest   = goToDirectiveInvest;
    	vm.tenureMonthsList      = [3,6,12,18,24];
    	vm.tenureSelection	     = tenureSelection;

        function setPreferencesSelected() {
        	setWidgetHeaders();

            vm.userPreference.rateRisk = 'Medium';
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

        }

        /*Set header texts*/
        function setWidgetHeaders(){
        	if(vm.investText == undefined){
        		vm.widgetText = ["I want to invest","My Risks & Return Preferences","For Tenure"];
        	}
        	else
        		vm.widgetText = vm.investText;
        }

        function goToDirectiveInvest() {
            vm.userPreference.tenureMin = vm.slider.min;
            vm.userPreference.tenureMax = vm.slider.max;
            var pref = vm.userPreference;
            appFactory.setLocalStorageData(APP_CONSTANT.PORTFOLIO_PREF, JSON.stringify(pref));
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

 ;/**
 *  @author Loan Singh
 *  @copyright 2016 lender.loansingh.com All right reserved.
 */
(function(angular) {

    "use strict";

    /**
     * @ngdoc directive
     * @namespace lsLenderApp
     * @desc Risk Meter directive
     */

    /* @ngInject */
    function riskMeterMethod() {
        // Runs during compile
        return {
            // name: '',
            // priority: 1,
            // terminal: true,
            scope: {}, // {} = isolate, true = child, false/undefined = no change
            bindToController: {
                risk: '='
            },
            controller: RiskMeterController,
            controllerAs: 'riskMeterCtrl',
            templateUrl: 'app/directives/risk_meter/risk-meter.directive.html',
            link: function($scope, iElm, iAttrs, controller, appFactory, APP_CONSTANT) {

            }
        };
    }; /* directive mehod end */

    /* @ngInject */
    function RiskMeterController($scope, $element, $attrs, $transclude, appFactory, APP_CONSTANT, $interval) {
        var vm = this;

        var layer1;
        var layer2;
        var layer3;
        var ctx1;
        var ctx2;
        var ctx3;
        var x = 130;
        var y = 130;
        var dx = 2;
        var dy = 4;
        var WIDTH = 130;
        var HEIGHT = 130;


        var totalSeg = 3;
        // one segment represents a risk category so divide degrees by no of segments
        var segmentWidth = (2.2 - 0.8) / totalSeg;
        // begin at 0.8 and end at one segment width
        var startAngle;
        var endAngle;
        var colorArray = ['#D6EAF8', '#F1C40F', '#C2C8CE'];
        var riskArray = [16, 20, 24];
        var riskPosition;
        var i = 0.9 + (vm.risk - 12) / 2;
        var lineAngle;
        var lineEndAngle;
        var lineAngleCircum;
        var lineEndAngleCircum;
        var showSegments;


        /**Function to redraw meter when redirected**/
        $scope.$on('reDrawMeter', function(event) {
            clearContext();
        });


        function init() {
            showSegments = true;
            startAngle = 0.8;
            endAngle = (0.8 + segmentWidth);
            lineAngle = 0.55;
            lineEndAngle = 0.55;
            lineAngleCircum = 0.55;
            lineEndAngleCircum = 0.55;

            layer1 = document.getElementById("layer1");
            ctx1 = layer1.getContext("2d");
            layer2 = document.getElementById("layer2");
            ctx2 = layer2.getContext("2d");
            layer3 = document.getElementById("layer3");
            ctx3 = layer3.getContext("2d");

            if (vm.risk == 0 || isNaN(vm.risk)) {
                showSegments = false;
                $('#layer2').addClass("hide");
            } else {
                $('#layer2').removeClass("hide");
                lineEndAngle = ((((vm.risk - 12) / 2) * 0.23) + 0.55);
            }
            drawAll();
        }

        function clearContext() {
            ctx1.setTransform(1, 0, 0, 1, 0, 0);
            ctx1.clearRect(0, 0, WIDTH, HEIGHT);
            init();
        }

        function drawAll() {
            drawGear();
            $interval(drawRiskNeedle, 100, 1);
        }

        function drawGear() {
            //Start outer circle
            ctx1.beginPath();
            ctx1.translate(65, 65);
            ctx1.arc(0, 0, 53, 0, Math.PI * 2);
            ctx1.lineWidth = 7;
            ctx1.strokeStyle = '#514f4e';
            ctx1.stroke();
            //End outer circle

            //Start inner arc
            ctx1.beginPath();
            ctx1.arc(0, 0, 43, 0.8 * Math.PI, Math.PI * 2.2);
            ctx1.lineWidth = 5;
            ctx1.strokeStyle = "#514f4e";
            ctx1.stroke();
            //End arc

            drawCircumLines();

            //Draw segments
            if (showSegments) {
                for (var j = 0; j < riskArray.length; j++) {
                    if (vm.risk <= riskArray[j]) {
                        riskPosition = j + 1;
                        drawSegments();
                        break;
                    }
                }
            }


        }

        function drawCircumLines() {
            ctx3.lineWidth = 3;
            ctx3.lineCap = "round";
            var increment, angle, secHandLength, x1, x2, y1, y2;

            for (var i = 0; i < 7; i++) {

                increment = 0.8 + (segmentWidth / 2 * i);
                if (i == 0) {
                    increment += 0.01;
                }
                if (i == 6) {
                    increment -= 0.01;
                }

                angle = increment * Math.PI; // THE ANGLE TO MARK.
                ctx3.beginPath();
                secHandLength = 41.5;
                x1 = (WIDTH / 2) + Math.cos(angle) * (secHandLength);
                y1 = (HEIGHT / 2) + Math.sin(angle) * (secHandLength);
                x2 = (WIDTH / 2) + Math.cos(angle) * (secHandLength - (secHandLength / 8));
                y2 = (HEIGHT / 2) + Math.sin(angle) * (secHandLength - (secHandLength / 8));

                lineAngleCircum += 0.17;
                ctx3.moveTo(x1, y1);
                ctx3.lineTo(x2, y2);

                ctx3.strokeStyle = '#514f4e';
                ctx3.stroke();
            }

        }

        function drawRiskNeedle() {
            ctx2.setTransform(1, 0, 0, 1, 0, 0);
            ctx2.clearRect(0, 0, WIDTH, HEIGHT);
            //Start needle
            ctx2.beginPath();
            ctx2.translate(65, 65);
            ctx2.save();
            ctx2.rotate(lineAngle * Math.PI);

            ctx2.arc(0, 0, 4, 0, Math.PI * 2, false);
            ctx2.moveTo(-10, -10); // Start at the center
            ctx2.lineTo(20, 20); // Draw a line outwards
            ctx2.fillStyle = "#514f4e";
            ctx2.fill();
            ctx2.lineWidth = 3;
            ctx2.strokeStyle = "#514f4e";
            ctx2.stroke();
            ctx2.restore();
            if (lineAngle != lineEndAngle) {
                lineAngle += 0.17;
                if (lineAngle < lineEndAngle) {

                    $interval(drawRiskNeedle, 100, 1);
                } else {
                    lineAngle = lineEndAngle;
                    $interval(drawRiskNeedle, 100, 1);
                }
            }

            //End needle
        }

        function drawSegments() {
            for (var i = 0; i < riskPosition; i++) {
                ctx1.save();
                ctx1.beginPath();
                ctx1.moveTo(0, 0);
                ctx1.arc(0, 0, 41, startAngle * Math.PI, endAngle * Math.PI, false);
                ctx1.lineTo(0, 0);
                ctx1.closePath();
                ctx1.lineWidth = 0;
                ctx1.fillStyle = colorArray[i];
                ctx1.fill();
                ctx1.restore();
                // increase per segment        
                startAngle += segmentWidth;
                endAngle += segmentWidth;
            }
        }

        init();

        $scope.$watch(
            function($scope) {
                // This becomes the value we're "watching".
                return (vm.risk);
            },
            function(newValue) {
                clearContext();
            }
        );

    };

    angular.module('lsLenderApp')
        .directive('riskMeter', [riskMeterMethod]);

})(window.angular);

 ;(function(angular){

	"use strict";

	/**
	* @memberOf lsLenderApp
	* @param {Service} $scope glue between view and controller
	* 
	* @description ... (mean non-terminal in angular) it should continue to match routes in child components
	*/

	/* @ngInject */
	function shellComponentCtrl($scope, $rootScope, $rootRouter, $timeout,API_ENDPOINT, APP_CONSTANT, appFactory, dataservice){
		var vm = this;

		var LOGOUT_API      = API_ENDPOINT+'auth/logout/'; 
		var USER_VISIT_API  = API_ENDPOINT + 'lender/flow_decision/';

		vm.heading        = 'Shell successfully launched';
		vm.hideNav        = true;
		vm.selectedMenu   = null;
		vm.showLoadingBar = false;

		vm.login        = login;
		vm.logout       = logout;
		vm.getUserVisit = getUserVisit;

		/*/* Toggle top nav based if login page or not */
		$scope.$on('hideNavFlag', function(event, data){
			vm.hideNav = data;
			//console.log('hideNavFlag fired ' + vm.hideNav);
		});

		 // Highlight current menu item on view 
		$scope.$on('setActiveMenu', function(event, data){
			vm.selectedMenu = data;
		});
		
		/* Actiavte loading bar on view */
		$scope.$on('setLoadingBar', function(event, data){
			vm.showLoadingBar = data;
		});


		/* check if user logged in then show other menus */
		$scope.$on('userLoggedInStatus', function(event, data){
			console.info('userLoggedInStatus ', data);
			vm.loggedIn = data;
		});

		//console.log(vm.$router);

		/* To callback after dom loadded */
		$timeout(function () {
		},0);

		function login(){
            $('a[href="#login-tab"]').tab('show'); // Select tab by name

            appFactory.setLocalStorageData(APP_CONSTANT.INVEST_NOW_BTN, false);
			$('#loginSignupModal').modal({
                backdrop: 'static',
                keyboard: false,
            });
		}

		/*Logout*/
		function logout(){

 			/* set the loggedIn status to false */
 			vm.loggedIn = false;
 			
			return dataservice.getData(LOGOUT_API, {}, appFactory.setToken()).then(function(data) {

                // console.info('logout api hit response ', data);

                if(data){
                	if(data.message == "Logged Out"){

                		window.localStorage.clear();

			            $rootRouter.navigate(['Home']);

			            /* Reload the page when user's logout */
			            // window.location.reload();
                	}
                }

            });
			
		}

        /**Function to get uservisit status**/
		function getUserVisit(){
            var config = appFactory.setToken();
            dataservice.getData(USER_VISIT_API, {}, config).then(function(data, status) {
                if (data) {
                    if (data.status) {
                        if(data.auto_flow)
                            $rootRouter.navigate(['AutoInvest']);
                         else
                            $rootRouter.navigate(['Invest']);
                    }
                }

            }, function() {
                return false;
            });
        }

		$scope.$watch(
            function( $scope ) {
                // This becomes the value we're "watching".
                return(appFactory.getLocalStorageData(APP_CONSTANT.LOGIN_STATUS));
            },
            function( newValue ) {
             if(newValue == 'true')
             	vm.loggedIn = true;
             else
             	vm.loggedIn = false;
            }
        );

		

	}

	angular.module('lsLenderApp')
		.component('shellComp', {
			templateUrl: 'app/layout/core-shell.html',
			controller: shellComponentCtrl,
			controllerAs: 'shellCtrl',
			// bindings: {$router: '<'}, // need to only use with child components
			$routeConfig: [
      			// {path: '/',    redirectTo: ['Login']},
				// {path: '/', name: 'Login', component: 'loginComponent', useAsDefault: true}
				{path: '/', name: 'Home', component: 'homeComponent', useAsDefault: true},
				{path: '/autoInvest', name: 'AutoInvest', component: 'autoInvestComponent'},
				{path: '/payment', name: 'Payment', component: 'paymentComponent'},
				{path: '/setPassword', name: 'SetPassword', component: 'passwordComp'},
				{path: '/dashboard', name: 'Dashboard', component: 'dashboardComponent'},
				{path: '/invest', name: 'Invest', component: 'investComponent'},
				{path: '/faq', name: 'FAQ', component: 'faq'},
				{path: '/privacy-policy', name: 'PrivacyPolicy', component: 'privacypolicy'},
				{path: '/terms-and-conditions', name: 'TermsConditions', component: 'termsconditions'},
				{path: '/about-us', name: 'AboutUs', component: 'aboutus'},
				{path: '/contact-us', name: 'ContactUs', component: 'contactus'},
				{path: '/how-it-works', name: 'HowItWorks', component: 'howitworks'},


				{path: '/*path', redirectTo: ['Home']}
			]
		});

})(window.angular);
 ;(function(angular) {

    "use strict";

    /**
     * @memberOf lsLenderApp
     * @param {Service} $scope glue between view and controller
     * 
     * @description ... (mean non-terminal in angular) it should continue to match routes in child components
     */

    /* @ngInject */
    function homeComponentCtrl($scope, $rootScope, $rootRouter, $timeout, APP_CONSTANT, appFactory, dataservice, API_ENDPOINT) {
        var vm = this;

        vm.fromInvestBtn = false;

        vm.submitInvestNow = submitInvestNow;
        vm.showSignUpModal = appFactory.showSignUpModal;


        /* on Router actiavte callback */
        vm.$routerOnActivate = function(next, prev) {
            appFactory.scrollToTop();
        }

        /* To callback after dom loadded */
        $timeout(function() {}, 0);


        function submitInvestNow(pref) {

            appFactory.setLocalStorageData(APP_CONSTANT.POOL_CREATION_STATUS, false);
            if(appFactory.getLocalStorageData(APP_CONSTANT.LOGIN_STATUS) == 'true'){
                vm.shellCtrl.getUserVisit();
            }

            else{
                appFactory.setLocalStorageData(APP_CONSTANT.INVEST_NOW_BTN, true);
                vm.fromInvestBtn = true;
                $('#loginSignupModal').modal({
                backdrop: 'static',
                keyboard: false
            });
            }

            
		}

		$(window).scroll(function() {
			if($('#graph-sec').offset()!=undefined){
				var hT = $('#graph-sec').offset().top,
			       hH = $('#graph-sec').outerHeight(),
			       wH = $(window).height(),
			       wS = $(this).scrollTop();
			    // console.log((hT-wH) , wS);
			   if (wS > (hT+hH-wH)){
			     //alert('you have scrolled to the graph-sec!');
			     $("#f-product1").attr('checked', 'checked');
			   }
			}
		   
		});

	}


    angular.module('lsLenderApp')
        .component('homeComponent', {
            templateUrl: 'app/home/home.html',
            controller: homeComponentCtrl,
            controllerAs: 'homeCtrl',
            require: {
                shellCtrl: '^shellComp'
              },
            $routeConfig: [
                // {path: '/',    redirectTo: ['Login']},
                // {path: '/', name: 'Login', component: 'loginComponent', useAsDefault: true}
                { path: '/', name: 'Login', component: 'loginComponent' }
            ]
        });

})(window.angular);

 ;(function(angular) {

    "use strict";

    /**
     * @memberOf lsLenderApp
     * @name login
     * @param {Service} $scope service to provide scope between controller and view of component
     * @description login controller
     */

    /* @ngInject */
    function loginController($scope, $location, $timeout, appFactory, dataservice, APP_CONSTANT, API_ENDPOINT, $rootRouter) {
        var vm = this;
        var OTPTimeOut = undefined;

        var LOGIN_API = API_ENDPOINT + 'auth/login/';
        var REGISTER_API = API_ENDPOINT + 'auth/reg/';
        var REGISTER_RESEND_OTP_API = API_ENDPOINT + 'auth/resend/otp/';
        var REGISTER_VERIFY_OTP_API = API_ENDPOINT + 'auth/verify/otp/';
        var REGISTER_CHANGE_MOBILE_API = API_ENDPOINT + 'auth/change_mobile/';
        var REGISTER_CHANGE_EMAIL_API = API_ENDPOINT + 'auth/change_email/';
        var REGISTER_CHANGE_PASSWORD_API = API_ENDPOINT + 'auth/change_pass/';
        var REGISTER_RESEND_EMAIL_API = API_ENDPOINT + 'auth/resend/email/';
        var config = appFactory.setToken();

        vm.OTPTimer = APP_CONSTANT.COUNT_DOWN_VALUE;
        vm.tempOTP = 1234;
        vm.regexMobileEmail = /^([_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,5}))|^[0-9]{10,10}$/;
        vm.user = {
            /*mobOrEmail: '7020427374',
            password: 'LyE3mPqQne'*/
        };
        vm.createPassword = {
            newPassword: '',
            confirmPasword: ''
        };
        vm.modSignup = {
            /*mobileno: 1230456789,
            email: 'test@test.com',
            password: '15420'*/
        };
        vm.modForgotPwdEmail = '';
        vm.alreadyRegisterUserMsg = '';
        vm.loginServerErrorMsg = undefined;

        /* Invoking default and defining in callback to use it other scenarios */
        setDefaultViewOffFlags();

        function setDefaultViewOffFlags() {

            vm.nonTabActive              = false;
            vm.showForgotPwdPanel        = false;
            vm.showForgotPwdSuccessPanel = false;
            vm.showCreateNewPwdPanel     = false;
            vm.showSignupOTPPanel        = false;
            vm.changeOTPMobileField      = false;
            vm.showSignupResendOTPPanel  = false;
            vm.showVerifyEmailPanel      = false;
            vm.showChangeEmailIdPanel    = false;
            vm.successEmailIdFlag        = false;
            vm.alreadyRegisterUserFlag   = false;
            vm.OTPResendMsgFlag          = false;
            vm.processing                = false;
            vm.forgotPwdWrongEmailMsg    = false;
        };


        /* method vm definiations */
        vm.backToLoginScreen = backToLoginScreen;
        vm.forgotPwdTrigger = forgotPwdTrigger;
        vm.createNewPwdTrigger = createNewPwdTrigger;
        vm.changeMobileNoTrigger = changeMobileNoTrigger;
        vm.submitChangeMobile = submitChangeMobile;
        vm.submitLogin = submitLogin;
        vm.submitSignupOTPVerify = submitSignupOTPVerify;
        vm.resendSignupOTP = resendSignupOTP;
        vm.changeEmailIDTrigger = changeEmailIDTrigger;
        vm.resendEmailAddress = resendEmailAddress;
        vm.submitSignup = submitSignup;
        vm.submitChangeEmailId = submitChangeEmailId;
        vm.submitForgotPassword = submitForgotPassword;
        vm.resetForm = resetForm;
        vm.resetModalToNormal = resetModalToNormal;
        vm.timerCountDown = timerCountDown;
        vm.submitCreatePassword = submitCreatePassword;

        vm.$routerOnActivate = function(next, prev) {

            /**
             * @function emit
             * @param {Boolean} true to emit hideNavFlag
             */
            $scope.$emit('hideNavFlag', true);

            /* set setLoadingBar false */
            $scope.$emit('setLoadingBar', false);

            /* Default Bootstrap Modal settings invoke before modal has show */
            $('#loginSignupModal').on('show.bs.modal', function(e) {
                console.info('show.bs.modal');
                vm.resetModalToNormal();
            });

            /* Default Bootstrap Modal settings invoke before modal has hide */
            $('#loginSignupModal').on('show.bs.modal', function(e) {
                console.info('hide.bs.modal');
                vm.resetModalToNormal();
                stopCountDownTimer();
            });
        };

        vm.$routerOnDeactivate = function() {
            /**
             * @function emit
             * @param {Boolean} false to emit hideNavFlag
             */
            $scope.$emit('hideNavFlag', false);
        };


        function authenticateUser() {

            var postObj = {
                mobile: vm.user.mobOrEmail,
                password: vm.user.password,
                req_end: 'L'
            };

            // Show processing loader
            vm.processing = true;

            // postObj =  JSON.stringify(postObj);

            return dataservice.postData(LOGIN_API, postObj).then(function(data) {
                    if(data){
                        if(data.token){
                            // Hide processing loader
                            hideProcessing();

                            vm.loginDetails = data;
                            appFactory.setLocalStorageData(APP_CONSTANT.LOGIN_TOKEN, data.token);
                            if(!data.email_verified){
                               // vm.createNewPwdTrigger();
                            } else if(data.email_verified){
                                    appFactory.setLocalStorageData(APP_CONSTANT.LOGIN_STATUS, true);
                                    if(appFactory.getLocalStorageData(APP_CONSTANT.INVEST_NOW_BTN) == "true"){
                                        if(data.auto_flow)
                                             $rootRouter.navigate(['AutoInvest']);
                                         else
                                             $rootRouter.navigate(['Invest']);

                                        appFactory.setLocalStorageData(APP_CONSTANT.INVEST_NOW_BTN, false);
                                    }else{
                                        $rootRouter.navigate(['Home']);
                                    }
                                    
                                   // 
                                    $('#loginSignupModal').modal('hide'); 

                            /* Fire emit to show menu visible after login */
                            $scope.$emit('userLoggedInStatus', true);
                        }

                    }

                    if (!data.status) {
                        console.info(data.error);
                        vm.loginServerErrorMsg = 'error' in data ? data.error : undefined;

                        // Hide processing loader
                        hideProcessing();
                    }
                }else{

                    // Hide processing loader
                    hideProcessing();
                }

                // 
                // console.info('login api hit response ', data);

                // return vm.loginDetails;
            });
        }


        /*
         * Login: Take users back to login screen on POPUP modal
         */
        function backToLoginScreen() {
            vm.nonTabActive = false;
            vm.showForgotPwdPanel = false;
            vm.showCreateNewPwdPanel = false;


            /* invoke reset form method */
            vm.resetForm('login');
        }


        /*
         * Login: submitLogin take user to the flow
         */
        function submitLogin(form) {
            if (form && form.$valid) {
                console.info('Login form submitted ');

                authenticateUser();
            }
        }


        /*
         * Forgot Password: Invoked when forgot password link triggerd
         */
        function forgotPwdTrigger() {
            vm.nonTabActive = true;
            vm.showForgotPwdPanel = true;

            /* invoke reset form method */
            vm.resetForm('login');
        }


        /*
         * Create New Password: Invoked when create new password link triggerd
         */
        function createNewPwdTrigger() {
            vm.nonTabActive = true;
            vm.showForgotPwdPanel = false;
            vm.showCreateNewPwdPanel = true;
        }


        /* Reset form fields navigating between screens */
        function resetForm(form) {

            /*Resetting login form */
            if (form && form === 'login') {
                $timeout(function() {
                    vm.frmLogin.$setPristine();
                    vm.user.mobOrEmail = '';
                    vm.user.password = '';
                    vm.loginServerErrorMsg = undefined;
                    vm.changeOTPMobileField = false;
                    vm.alreadyRegisterUserFlag = false;
                }, 0);

            }

            /* Resetting signup form */
            if (form && form === 'signup') {
                $timeout(function() {
                    vm.frmSignup.$setPristine();
                    vm.modSignup.number = '';
                    vm.modSignup.email = '';
                    vm.modSignup.password = '';


                    /* Hide if signup otp form and make visible signup form */
                    vm.frmSignupOTP.$setPristine();
                    vm.modSignupOTP = '';
                    vm.showSignupOTPPanel = false;
                    vm.alreadyRegisterUserFlag = false;
                }, 0);

            }


            /*Resetting forgotPwd form */
            if (form && form === 'forgotPwd') {
                $timeout(function() {
                    vm.showForgotPwdSuccessPanel = false;
                    // vm.frmForgotPassword.$setPristine();
                    vm.modForgotPwdEmail = '';
                }, 0);
            }

        }


        /* Register: Show mobile no field on changeMobileNoTrigger link clicked */
        function changeMobileNoTrigger() {
            vm.changeOTPMobileField = true;


        }

        /* Register: Submit change mobile number */
        function submitChangeMobile(form) {
            vm.changeOTPMobileField = false;
            var postObj = {
                mobile: vm.modSignup.mobileno,
                new_mobile: vm.modSignup.newmobileno
            };

            return dataservice.postData(REGISTER_CHANGE_MOBILE_API, postObj).then(function(data, status) {

                console.info('change mobile api hit response ', data);
                if (data) {
                    if (data.status) {
                        vm.modSignup.mobileno = vm.modSignup.newmobileno;

                        /* restart the resend otp timer */
                        reStartCountDownTimer();
                    }
                } else {
                    console.error('Error, object')
                }

            }, function() {
                console.info('verify otp api connecting error', data, status);
            });
        }


        /*
         * Register: Submiting Signup/Register form
         */
        function submitSignup(form, saveType) {
            if (form.$valid) {

                var postObj = {
                    mobile: vm.modSignup.mobileno,
                    email: vm.modSignup.email,
                    req_end: 'L'
                };

                // Show processing loader
                vm.processing = true;

                vm.alreadyRegisterUserFlag = false;

                /* Submit the sign-up form */
                return dataservice.postData(REGISTER_API, postObj).then(function(data, status) {

                    // console.info('register api hit response ', data);

                    if (data) {

                        /* If request successfuly and found status valid/true */
                        if (data.status) {
                            /* Show OTP panel view */
                            vm.showSignupOTPPanel = true;

                            /* Show Resend OTP panel view */
                            vm.showSignupResendOTPPanel = true;

                            /*Starting resend countdown timer once showSignupResendOTPPanel shown */
                            startCountDownTimer();

                        } else if (!data.status && 'message' in data) {
                            console.info('reposne message ', data.message);
                            vm.alreadyRegisterUserFlag = true;
                            vm.alreadyRegisterUserMsg = data.message;
                        } else {
                            console.error('Error, looking for key in data object not found ', data);
                        }


                        /* Create item */
                        if (saveType && saveType === 'saveSignup') {
                            console.info('create signup fired');
                        }

                        if (saveType && saveType === 'saveChangeMobNo') {
                            console.info('create change mobile no fired');

                            if (!vm.alreadyRegisterUserFlag) {
                                vm.changeOTPMobileField = false;
                                vm.showSignupOTPPanel = true;
                            }
                        }


                        //Hide processing loader
                        hideProcessing();

                    } else {

                        //Hide processing loader
                        hideProcessing();

                        console.error('Error, object');
                    }

                }, function() {
                    console.info('register api connecting error', data, status);
                });


                /* Reseting form when modal re-open in the current flow */
                vm.frmSignupOTP.$setPristine();
                vm.modSignupOTP = '';
            }
        }


        /*
         * Register: Verify Signup OTP
         */
        function submitSignupOTPVerify(form) {
            //console.info(form);

            vm.invalidOTPMsgFlag = false;
            vm.showForgotPwdPanel = false;
            vm.showForgotPwdSuccessPanel = false;
            // vm.showSignupResendOTPPanel = true;    //show when successful signup callback fired in submitSignup method

            /*Starting countdown timer */
            startCountDownTimer();

            var postObj = {
                otp: parseInt(vm.modSignupOTP),
                mobile: vm.modSignup.mobileno,
                req_end: 'L'
            };

            if ((form.$valid && vm.OTPTimer !== 0) || form.$valid && !vm.showSignupResendOTPPanel) {

                // Show processing loader
                vm.processing = true;

                /* Verify OTP */
                return dataservice.postData(REGISTER_VERIFY_OTP_API, postObj).then(function(data, status) {

                    console.info('register verify otp api hit response ', data);

                    if (data) {

                        /* If request successfuly and found status valid/true */
                        if (data.verified) {
                            console.info('signup otp form validated');

                            vm.showSignupResendOTPPanel = true;

                            // if(parseInt(vm.modSignupOTP) == 1234){

                            vm.nonTabActive = true;
                            vm.showVerifyEmailPanel = true;
                            vm.validOTPMsgFlag = true;

                            /* Stop the countdown timer if successfuly passed the OTP */
                            stopCountDownTimer();

                            // }else{
                            /*vm.invalidOTPMsgFlag = true;
                                        
                                    Starting countdown timer 
                                    startCountDownTimer();   
                                }*/
                        } else if (!data.verified) {
                            vm.invalidOTPMsgFlag = true;

                            $timeout(function() {
                                vm.invalidOTPMsgFlag = false;
                            },3000)

                        } else {
                            console.error('Error, looking for key in data object not found ', data);
                        }

                        //Hide processing loader
                        hideProcessing();

                    } else {

                        //Hide processing loader
                        hideProcessing();

                        console.error('Error, object');
                    }

                }, function() {
                    console.info('verify otp api connecting error', data, status);
                });


            }
        }


        /*
         * Register: resend signup otp method
         */
        function resendSignupOTP(form) {
            console.info('Resend sign-up otp triggered');

            // vm.showSignupResendOTPPanel = false; // not to hide the resend opt panel again

            /*Resetting counter time*/
            vm.OTPTimer = APP_CONSTANT.COUNT_DOWN_VALUE;

            if (form) {
                form.$setPristine();
                form.$setUntouched();
            }

            /*Starting countdown timer */
            // reStartCountDownTimer();

            /*RESET OTP MODEL VALUE */
            vm.modSignupOTP = '';

            var postObj = {
                mobile: vm.modSignup.mobileno,
                req_end: 'L'
            };

            return dataservice.postData(REGISTER_RESEND_OTP_API, postObj).then(function(data, status) {

                console.info('register resend otp api hit response ', data);

                if (data) {
                    if ('message' in data){
                        console.info(data.message);

                        vm.OTPResendMsgFlag = true;
                        
                        /* if OTP resent again start the counter again */
                        reStartCountDownTimer();

                        $timeout(function() {
                            vm.OTPResendMsgFlag = false;
                        },2500);
                    }
                } else {
                    console.error('Error, object')
                }

            }, function() {
                console.info('verify otp api connecting error', data, status);
            });
        }


        /*
         * Register: Allowing to change the email address again
         */
        function changeEmailIDTrigger(form) {
            console.info('Changed email address triggered ', form);
            vm.showChangeEmailIdPanel = true;
        }


        /*
         * Register: Submitting changed email address again.
         */
        function submitChangeEmailId(form) {
            console.info('Change email address form submitted');
            if (form && form.$valid) {

                vm.showChangeEmailIdPanel = false;


                var postObj = {};
                postObj = {
                    mobile: vm.modSignup.mobileno,
                    email: vm.modSignup.email,
                    new_email: vm.modSignup.newemail
                };

                return dataservice.postData(REGISTER_CHANGE_EMAIL_API, postObj).then(function(data, status) {

                    console.info('change email api hit response ', data);
                    if (data) {
                        if (data.status) {
                            vm.successEmailIdFlag = true;
                            vm.modSignup.email = vm.modSignup.newemail;
                        }
                    } else {
                        console.error('Error, object')
                    }

                }, function() {
                    console.info('change email api connecting error', data, status);
                });

                /*show success sent message and show back the resend email button after some secs*/
                /*Removed resend email button*/
                /*$timeout(function(){
                    vm.showChangeEmailIdPanel = false;
                    vm.successEmailIdFlag = false;
                },1500);*/

            }
        }


        /*
         * Register: Resending email address back to user
         */
        function resendEmailAddress(email) {
            if (email) {
                console.info('resend email fired', email);
            }
        }



        /*
         * Forgot Password: submit forgot password form
         */
        function submitForgotPassword(form) {
            console.info('forgot password form ');

            var postObj = {
                email: vm.modForgotPwdEmail
            };

            /* reset password form */
            if (form && form.$valid) {
                // console.info('Form validated successfully');

                // Show processing loader
                vm.processing = true;

                return dataservice.postData(REGISTER_RESEND_EMAIL_API, postObj).then(function(data, status) {

                    console.info('resend email api hit response ', data);
                    if (data) {
                        if (data.status) {
                            vm.showForgotPwdSuccessPanel = true;
                        }else{
                            if('message' in data){
                                console.info(data.message);
                                vm.forgotPwdWrongEmailMsg = true;

                                $timeout(function() {
                                    vm.forgotPwdWrongEmailMsg = false;
                                },3000)
                            }
                        }

                        //Hide processing loader
                        hideProcessing();
                    } else {
                        console.error('Error, object');

                        //Hide processing loader
                        hideProcessing();
                    }

                }, function() {
                    console.info('resend email api connecting error', data, status);
                });

            }
        }

        /*Create Password: new user*/
        function submitCreatePassword(form) {
            var postObj = {
                password: vm.createPassword.confirmPassword
            };

            return dataservice.postData(REGISTER_CHANGE_PASSWORD_API, postObj, config).then(function(data, status) {

                console.info('change password api hit response ', data);
                if (data) {
                    if (data.status) {
                        appFactory.setLocalStorageData(APP_CONSTANT.LOGIN_STATUS, true);
                        $rootRouter.navigate(['AutoPortfolio']);
                        $('#loginSignupModal').modal('hide');
                    }
                } else {
                    console.error('Error, object')
                }

            }, function() {
                console.info('verify otp api connecting error', data, status);
            });
        }



        /*
         * Register: Method to make the timer count down in start mode
         */
        function startCountDownTimer() {

            /*cancel the OTP timeout before invoking it again */
            $timeout.cancel(OTPTimeOut);
            vm.OTPTimer = APP_CONSTANT.COUNT_DOWN_VALUE; //Check and remove if needed
            OTPTimeOut = $timeout(vm.timerCountDown, 1000);
        }

        /*
         * Register: Method to make the restart the timer count down back again
         */
        function reStartCountDownTimer() {
            vm.OTPTimer = APP_CONSTANT.COUNT_DOWN_VALUE;
            OTPTimeOut = $timeout(vm.timerCountDown, 1000);
        }


        /* 
         * Register: Timer counter to count down to 0  
         */
        function timerCountDown() {
            vm.OTPTimer--;
            OTPTimeOut = $timeout(vm.timerCountDown, 1000);

            if (vm.OTPTimer === 0) {
                stopCountDownTimer();
            }
        }

        function stopCountDownTimer() {
            $timeout.cancel(OTPTimeOut);
        }


        /* Reset the modal back to normal after completing signup flow */
        function resetModalToNormal() {
            // console.info('reset modal back to normal fired ');

            angular.element('.nav-tabs').find('li').removeClass('active');
            angular.element('.nav-tabs').find('li:eq(0)').addClass('active');
            $('#signup-tab').removeClass('fade in active');
            $('#login-tab').addClass('fade in active');

            vm.resetForm('login');
            /* reset the view flags*/
            setDefaultViewOffFlags();
        }



        // Hide processing loader callback
        function hideProcessing(){
            vm.processing = false;
        }

    }; /* controller code end */

    angular.module('lsLenderApp')
        .component('loginComponent', {
            templateUrl: 'app/login/login.html',
            controller: loginController,
            controllerAs: 'loginCtrl',
            $routeConfig: [

            ]
        });

})(window.angular);

 ;(function(angular) {

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

 ;(function(angular) {

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

 ;(function(angular) {

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

 ;(function(angular) {

    "use strict";

    /**
     * @memberOf lsLenderApp
     * @name login
     * @param {Service} $scope service to provide scope between controller and view of component
     * @description login controller
     */

    /* @ngInject */
    function borrowerInfoController($scope, $location, $timeout, appFactory, dataservice, APP_CONSTANT, API_ENDPOINT, $rootRouter) {
        var vm = this;

        var LENDER_INFO_API     = API_ENDPOINT+'lender/profile/';
        var LENDER_DOC_API     = API_ENDPOINT+'api/profile/document/vault/';

        var config = appFactory.setToken();
        var now = new Date();
        var eighteen_years_ago = new Date(now.getFullYear() - 18, now.getMonth(), now.getDay());

        vm.profileAddressOption = APP_CONSTANT.ADDRESS_DOCUMENT_LISTS;
        vm.documentType         = "Address Proof";
        vm.format               = "dd/MM/yyyy";
        vm.userProfile          = {};
        vm.uploadedDoc;

        vm.dateOptions = {
                    formatYear: 'yyyy',
                    initDate: new Date(1988, 4, 1),
                    maxDate: eighteen_years_ago,
                    minDate: new Date(1960, 1, 1),
                    startingDay: 0,
                    datepickerMode: "year",
                    showWeeks : false
                  };


         /* method vm definiations */
        vm.saveLenderInfo         = saveLenderInfo;
        vm.saveDataToLocal        = saveDataToLocal;
        vm.uploadAddressProof     = uploadAddressProof;
        vm.deleteSelectedDocument = deleteSelectedDocument;
        vm.trimName               = trimName;

         vm.$routerOnActivate = function(next, prev) {
             getDataFromLocal();
         };

         vm.$routerOnDeactivate = function() {

         };

        /**Function to upload address proof document**/
        function uploadAddressProof(file){
            vm.uploadedDoc = file[0];
             var postObj = {
                document: file[0],
                type: vm.userProfile.documentType.value
            };
            
            dataservice.uploadDocument(LENDER_DOC_API, postObj,config).then(function(data, status){
                console.log(data);
                if(data){
                    if(data.status){
                        vm.uploadedDoc.doc_id = data.doc_id;
                        vm.uploadedDocument = true;
                   }
                }
                
            },function(error){
            },
            function(progress){
                //console.log(progress);
            });
        }

         /***Function to delete address proof documents***/
        function deleteSelectedDocument(doc) {

            var data = $.param({
                id:  vm.uploadedDoc.doc_id
            });
            dataservice.xdelete(LENDER_DOC_API+'?'+data, { id: doc.doc_id }, config).then(function(data, status){
                if(data){
                    if(data.status){
                        vm.uploadedDocument = false;
                   }
                }
                
            },function(){
            });
        }

        function getLenderInfo(){
            dataservice.getData(LENDER_INFO_API, {},config).then(function(data, status){
                if(data){
                    if(data.status){
                        vm.userProfile = data.data;
                        vm.userProfile.name = [data.data.f_name, data.data.l_name]
                    .filter(function(x) {
                        return x }).join(' ');

                    if (data.data.birthdate != null) {
                        var dateStr = data.data.birthdate;
                        dateArr = dateStr.split('-');
                        vm.userProfile.dob = new Date(dateArr[0], dateArr[1] - 1, dateArr[2]);
                    }
                   }
                }
                
            },function(){
            });
        }

        /***Function to save lender info***/
        function saveLenderInfo(){

            var userInfo = {};
           
            userInfo = (JSON.parse(JSON.stringify(vm.userProfile)));
            delete userInfo["name"]; 
            delete userInfo["dob"];
            delete userInfo["dobShort"];
            delete userInfo["documentType"]; 
            userInfo.first_name = vm.userProfile.name.substring(0, vm.userProfile.name.indexOf(' '));
            userInfo.last_name = vm.userProfile.name.substring(vm.userProfile.name.indexOf(' ') + 1);
            userInfo.birthdate = formatDate(vm.userProfile.dob);
            //userInfo.documentType = vm.userProfile.documentType.value;

            dataservice.postData(LENDER_INFO_API, userInfo,config).then(function(data, status){
                if(data){
                    if(data.status){
                        $rootRouter.navigate(['Payment']);
                        $('#borrowerInfoModal').modal('hide');
                   }
                }
                
            },function(){
            });
        }

        function formatDate(dateStr){
            var options = {year: 'numeric', month: '2-digit', day: '2-digit' };
            dateStr = dateStr.toLocaleDateString('en-US', options);
            //console.log(Date.parse(dateStr.toDateString()));
            var dateArr = dateStr.split('/');
            return dateArr[2] + '-' + dateArr[0] + '-' + dateArr[1];
        }

        function saveDataToLocal(){
            if(vm.userProfile.dob)
               vm.userProfile.dobShort = formatDate(vm.userProfile.dob);
            appFactory.setLocalStorageData(APP_CONSTANT.LENDER_INFO,JSON.stringify(vm.userProfile));
        }

        function getDataFromLocal(){
            //console.log(($("#borrowerInfoModal").data('bs.modal') || {}).isShown)
            vm.userProfile=JSON.parse(appFactory.getLocalStorageData(APP_CONSTANT.LENDER_INFO));
            if(vm.userProfile == null){
                vm.userProfile     = {};
                vm.userProfile.dob = new Date(1988, 4, 1);
            }
            else{
                var dateArr = vm.userProfile.dobShort.split('-');
                vm.userProfile.dob = new Date(parseInt(dateArr[0]), parseInt(dateArr[1])-1, parseInt(dateArr[2]));
            }
        }

        /*Function to trim the file name*/
        function trimName(fileName) {
            if (fileName) {
                var strng = fileName;
                if (fileName.length > 15)
                    return fileName.slice(0, 7) + ".." + strng.substring(fileName.length - 7);
                else {
                    return fileName;
                }
            }

        }


    };/* controller code end */

    angular.module('lsLenderApp')
        .component('borrowerinfoComponent', {
            templateUrl: 'app/borrower_info/borrower-info.html',
            controller: borrowerInfoController,
            controllerAs: 'infoCtrl',
            $routeConfig: [
                
            ]
        });

})(window.angular);

 ;(function(angular) {

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

 ;(function(angular) {

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

        vm.showRiskData = true;
        vm.riskFactor;

        vm.investnow        = investnow;
        vm.changePoolAmount = changePoolAmount;
        vm.deleteFromPool       = deleteFromPool;

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
                        $('#borrowerInfoModal').modal({
                            backdrop: 'static',
                            keyboard: false
                        });
                      }

                    }
                }
            }, function() {
                $('#borrowerInfoModal').modal({
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
                deletepool: '&'
            },
            $routeConfig: []
        });

})(window.angular);

 ;(function(angular){

    "use strict";

    /**
    * @memberOf lsLenderApp
    * @param {Service} $scope glue between view and controller
    * 
    * @description ... (mean non-terminal in angular) it should continue to match routes in child components
    */

    /* @ngInject */
    function tabController($scope, $rootScope, $rootRouter, $timeout){
        var vm = this;

        var panes = vm.panes = [];
        
        vm.select = select;
        vm.addPane = addPane;

        function select(pane) {
          angular.forEach(panes, function(pane) {
            pane.selected = false;
          });
          pane.selected = true;
        };
        function addPane(pane) {
          if (panes.length === 0) {
            vm.select(pane);
          }
          panes.push(pane);
        };

    }

    angular.module('lsLenderApp')
        .component('tabComponent', {
            transclude: true,
            templateUrl: 'app/components/tab_pane_component/tab.html',
            controller: tabController,
            controllerAs: 'tabCtrl'
        });

})(window.angular);
 ;(function(angular){

    "use strict";

    /**
    * @memberOf lsLenderApp
    * @param {Service} $scope glue between view and controller
    * 
    * @description ... (mean non-terminal in angular) it should continue to match routes in child components
    */

    /* @ngInject */
    function paneController($scope, $rootScope, $rootRouter, $timeout){
        var vm = this;

        vm.$onInit = function() {
           vm.tabsCtrl.addPane(this);
        };

    }

    angular.module('lsLenderApp')
        .component('paneComponent', {
            transclude: true,
            require: {
                tabsCtrl: '^tabComponent'
              },
            bindings: {
                title: '@'
              },
            templateUrl: 'app/components/tab_pane_component/pane.html',
            controller: paneController,
            controllerAs: 'paneCtrl'
        });

})(window.angular);
 ;(function(angular){

	"use strict";

	/**
	* @memberOf lsLenderApp
	* @param {Service} $scope glue between view and controller
	* 
	* @description ... (mean non-terminal in angular) it should continue to match routes in child components
	*/

	/* @ngInject */
	function pwdSetComponentCtrl($scope, $rootScope, $rootRouter, $window, appFactory, dataservice, APP_CONSTANT, API_ENDPOINT,$location){
		var vm = this;
		var REGISTER_SET_PASSWORD_API = API_ENDPOINT+'auth/change_pass/';
		var CHECK_VALID_USER_API = API_ENDPOINT+'auth/verify/email/';
		var idParameter;

		vm.createPassword       = {
            newPassword: '',
            confirmPasword: ''
        };
        vm.showCreateNewPwdPanel = false;
        vm.emailLinkExpired      = false;

		vm.submitCreatePassword =submitCreatePassword;

        vm.$routerOnActivate = function() {
            $('.app-header-fixed').addClass('hide');
            $('.app-footer').addClass('hide');
            checkUID();
         }

         /*Remove hide class from header and footer*/
         function toggleNavVisibility() {
            $('.app-header-fixed').removeClass('hide');
            $('.app-footer').removeClass('hide');
         }

		/*Create Password: new user*/
        function submitCreatePassword(){
            var postObj = {
            	    id: idParameter,
                    password: vm.createPassword.confirmPassword
            };

            return dataservice.postData(REGISTER_SET_PASSWORD_API, postObj).then(function(data) {
                    if(data){
                        if(data.status){
                            appFactory.setLocalStorageData(APP_CONSTANT.LOGIN_TOKEN, data.token);
                            appFactory.setLocalStorageData(APP_CONSTANT.LOGIN_STATUS, true);
                            $rootRouter.navigate(['Home']);
                            toggleNavVisibility();
                            
                        }
                    }
                
            },function(){
                    console.info('set password api connecting error', data, status);
            });
             
        }
        vm.$onDestroy = function () {
            toggleNavVisibility();
      // component scope is destroyed
    };

        /*Check for valid UID*/
        function checkUID(){
        	idParameter = getUrlParameters("id", "", true);

        	var postObj = {
                    id: idParameter
            };

            return dataservice.postData(CHECK_VALID_USER_API, postObj).then(function(data) {
                    if(data){
                        if(data.status){
                            vm.showCreateNewPwdPanel = true;
                        }
                        else{
                            vm.emailLinkExpired = true;
                        } 
                    }
                
            },function(){
                    vm.emailLinkExpired = true;
                    console.info('check valid user api connecting error', data, status);
            });

        }

        function getUrlParameters(parameter, staticURL, decode){
		   /*
		    Function: getUrlParameters

		   */
		   var currLocation = (staticURL.length)? staticURL : $location.search;
	       var parArr = $location.search()[parameter];
	       return parArr;  
		}

		

	}

	angular.module('lsLenderApp')
		.component('passwordComp', {
            templateUrl: 'app/set_password/set-password.html',
            controller: pwdSetComponentCtrl,
            controllerAs: 'pwdCtrl',
            $routeConfig: [
            ]
		});

})(window.angular);
 ;(function(angular) {

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

 ;(function(angular) {

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

 ;(function(angular){

    "use strict";

    /**
    * @memberOf lsLenderApp
    * @name faqController
    * @param {Service} $scope glue between view and controller
    * 
    * @description ... (mean non-terminal in angular) it should continue to match routes in child components
    */

    /* @ngInject */
    function faqController($scope, $rootScope, $rootRouter, $timeout, appFactory){
        var vm = this;    

        vm.$routerOnActivate = function(next,prev){
            appFactory.scrollToTop();
        }
    }

    angular.module('lsLenderApp')
        .component('faq', {
            templateUrl: 'app/components/faq.html',
            controller: faqController,
            controllerAs: 'faqCtrl'
        });

})(window.angular);
 ;(function(angular){

    "use strict";

    /**
    * @memberOf lsLenderApp
    * @name PrivacyPolicyController
    * @param {Service} $scope glue between view and controller
    * 
    * @description ... (mean non-terminal in angular) it should continue to match routes in child components
    */

    /* @ngInject */
    function PrivacyPolicyController($scope, $rootScope, $rootRouter, $timeout, appFactory){
        var vm = this;    


        vm.$routerOnActivate = function(next,prev){
            appFactory.scrollToTop();
        }
    }

    angular.module('lsLenderApp')
        .component('privacypolicy', {
            templateUrl: 'app/components/privacy-policy.html',
            controller: PrivacyPolicyController,
            controllerAs: 'privacyPolicyCtrl'
        });

})(window.angular);
 ;(function(angular){

    "use strict";

    /**
    * @memberOf lsLenderApp
    * @name TermsConditionsController
    * @param {Service} $scope glue between view and controller
    * 
    * @description ... (mean non-terminal in angular) it should continue to match routes in child components
    */

    /* @ngInject */
    function TermsConditionsController($scope, $rootScope, $rootRouter, $timeout, appFactory){
        var vm = this;    


        vm.$routerOnActivate = function(next,prev){
            appFactory.scrollToTop();
        }
    }

    angular.module('lsLenderApp')
        .component('termsconditions', {
            templateUrl: 'app/components/terms-conditions.html',
            controller: TermsConditionsController,
            controllerAs: 'tcCtrl'
        });

})(window.angular);
 ;(function(angular){

    "use strict";

    /**
    * @memberOf lsLenderApp
    * @name AboutUsController
    * @param {Service} $scope glue between view and controller
    * 
    * @description ... (mean non-terminal in angular) it should continue to match routes in child components
    */

    /* @ngInject */
    function AboutUsController($scope, $rootScope, $rootRouter, $timeout, appFactory){
        var vm = this;    


        vm.$routerOnActivate = function(next,prev){
            appFactory.scrollToTop();
        }
    }

    angular.module('lsLenderApp')
        .component('aboutus', {
            templateUrl: 'app/components/about-us.html',
            controller: AboutUsController,
            controllerAs: 'tcCtrl'
        });

})(window.angular);
 ;(function(angular){

    "use strict";

    /**
    * @memberOf lsLenderApp
    * @name ContactUsController
    * @param {Service} $scope glue between view and controller
    * 
    * @description ... (mean non-terminal in angular) it should continue to match routes in child components
    */

    /* @ngInject */
    function ContactUsController($scope, $rootScope, $rootRouter, $timeout, API_ENDPOINT, appFactory, dataservice){
        var vm = this;    

        var config = appFactory.setToken();
        var CONTACT_US_API = API_ENDPOINT + 'api/contact_us/';

        vm.successPostMsgFlag = false;
        vm.saveContactUs = saveContactUs;


        vm.$routerOnActivate = function(next,prev){
            appFactory.scrollToTop();
        }


        /**
        * @memberOf ContactUsController
        * @function saveContactUs
        * validating the contact us form and submitting form data using post data service
        */
        function saveContactUs(form){

            if(form && form.$valid){

                var formData = {};
                formData.name = vm.contName;
                formData.mobile = vm.telNo;
                formData.message = vm.message;
                formData.related = vm.related;

                return dataservice.postData(CONTACT_US_API, formData).then(function(data, status) {
                   
                    if (data && data.status) {

                        console.info('data response ', data);
                        vm.successPostMsgFlag = true;
                        vm.contName = '';
                        vm.telNo = '';
                        vm.message = '';
                        vm.related = '';
                        
                        //Scroll to top
                        appFactory.scrollToTop(); 

                    }else{
                        console.error('Error, saving in data')
                    }

                });
            }
        }
    }

    angular.module('lsLenderApp')
        .component('contactus', {
            templateUrl: 'app/components/contact-us.html',
            controller: ContactUsController,
            controllerAs: 'contactCtrl'
        });

})(window.angular);
 ;(function(angular){

    "use strict";

    /**
    * @memberOf lsLenderApp
    * @name HowItWorksController
    * @param {Service} $scope glue between view and controller
    * 
    * @description ... (mean non-terminal in angular) it should continue to match routes in child components
    */

    /* @ngInject */
    function HowItWorksController($scope, $rootScope, $rootRouter, $timeout, appFactory){
        var vm = this;    

        vm.toggleContentView = false;
        vm.toggleContent = toggleContent;
        vm.showSignUpModal = appFactory.showSignUpModal;

        vm.$routerOnActivate = function(next,prev){
            appFactory.scrollToTop();
        }

        /* parent variable/function available inside oninit method */
        // vm.$onInit = function() {
        //     vm.bindToid = vm.parentCtrl.loggedIn;

        //     console.info(vm.bindToid);
        // };

        /*Method to toggle content view */
        function toggleContent (ele) {
            var curEle = angular.element(ele.target)[0];

            // console.log(curEle);

            if($(curEle).hasClass('down-arrow')){
                $(curEle).addClass('up-arrow').removeClass('down-arrow');
                $(curEle).text('Show less');
                $('.jsToggleContentView').addClass('ng-enter').removeClass('ng-leave');

                vm.toggleContentView = true;
            }else{
                $(curEle).addClass('down-arrow').removeClass('up-arrow');
                $(curEle).text('Show more');
                $('.jsToggleContentView').addClass('ng-leave').removeClass('ng-enter');
                vm.toggleContentView = false;
            }
        }

        
    }

    angular.module('lsLenderApp')
        .component('howitworks', {
            templateUrl: 'app/components/how-it-works.html',
            controller: HowItWorksController,
            controllerAs: '$hCtrl',
            require: {
                parentCtrl: '^shellComp'
            }
        });

})(window.angular);