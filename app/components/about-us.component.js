(function(angular){

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