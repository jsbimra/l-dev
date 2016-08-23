(function(angular){

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
            appFactory.hamburgerOpen();
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