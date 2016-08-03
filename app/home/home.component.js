(function(angular) {

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
