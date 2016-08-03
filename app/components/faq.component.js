(function(angular){

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