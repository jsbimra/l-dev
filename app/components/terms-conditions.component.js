(function(angular){

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