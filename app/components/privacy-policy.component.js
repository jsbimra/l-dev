(function(angular){

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