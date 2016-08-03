(function(angular){

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