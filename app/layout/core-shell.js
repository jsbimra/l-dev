(function(angular){

	"use strict";

	/**
	* @memberOf lsLenderApp
	* @param {Service} $scope glue between view and controller
	* 
	* @description ... (mean non-terminal in angular) it should continue to match routes in child components
	*/

	/* @ngInject */
	function shellComponentCtrl($scope, $rootScope, $rootRouter, $location, $timeout, API_ENDPOINT, APP_CONSTANT, appFactory, dataservice){
		var vm = this;

		var LOGOUT_API      = API_ENDPOINT+'auth/logout/'; 
		var USER_VISIT_API  = API_ENDPOINT + 'lender/flow_decision/';

		vm.heading        = 'Shell successfully launched';
		vm.hideNav        = true;
		vm.selectedMenu   = null;
		vm.showLoadingBar = false;

		vm.login        	= login;
		vm.logout       	= logout;
		vm.getUserVisit 	= getUserVisit;
		vm.showSignUpModal 	= appFactory.showSignUpModal;
		vm.isActiveMenu		= isActiveMenu;

		/*/* Toggle top nav based if login page or not */
		$scope.$on('hideNavFlag', function(event, data){
			vm.hideNav = data;
			//console.log('hideNavFlag fired ' + vm.hideNav);
		});

		 // Highlight current menu item on view 
		$scope.$on('setActiveMenu', function(event, data){
			console.info(data);
			vm.selectedMenu = data;
		});
		
		/* Actiavte loading bar on view */
		$scope.$on('setLoadingBar', function(event, data){
			vm.showLoadingBar = data;
		});


		/* check if user logged in then show other menus */
		$scope.$on('userLoggedInStatus', function(event, data){
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

        /* WATCH on localStorage login_status key to update the loggedIn value */
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

        /* OnRouteChangeSuccess fire certain action */
		$scope.$on('$routeChangeSuccess', function () {
            // console.info('fired change');
			// console.info($location.path())
				// isActiveMenu($location.path().substr(0, 1));

        });

		function isActiveMenu(path){
            // console.info($location.path());
			if(path){
				if($location.path() === path){
					return true;
				}else{
					return false;
				}
			}
		}

		

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