(function(angular){

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