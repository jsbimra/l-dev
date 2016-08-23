(function(angular){

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
				numInt: 7,
				numFract: 2,
				numSep: '.',
				numPos: true,
				numNeg: false,
				numRound: 'floor',
				numThousand: true
			});
	}]);
})(window.angular);