/**
 *	@author Loan Singh
 *	@copyright 2016 lender.loansingh.com All right reserved.
 */
(function(angular) {

    "use strict";

    /**
     * @ngdoc directive
     * @namespace lsLenderApp
     * @desc Invest Widget directive
     */

    /* @ngInject */
    function rangeValidator() {
        // Runs during compile
        return {
            require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
            restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
            link: function($scope, iElm, iAttrs, controller) {

                // controller.$validators.customValidator = customValidator;

                function customValidator(modelValue) {

                    if (modelValue<10000 || modelValue>5000000) {
                        controller.$setValidity('invalidRange', false);
                    } else{
                        controller.$setValidity('invalidRange', true);
                    }
                    
                    return modelValue;
                }

                controller.$parsers.push(customValidator);
            }

        };
    }; /* directive method end */

    angular.module('lsLenderApp')
        .directive('rangeValidator', [rangeValidator]);

})(window.angular);
