
(function(angular) {

	"use strict";
    
    /**
    * @name API_ENDPOINT
    * @memberof lsLenderApp
    * @ngdoc constant 
    * @param {string} API_ENDPOINT holds the api end point url
    * @desc defining API end point url
    */
    angular.module('lsLenderApp')
        
        // .constant('API_ENDPOINT', 'http://192.168.200.222:8000/') //NAVNEET MACHINE IP
        .constant('API_ENDPOINT', 'http://staging-api.loansingh.com/')

})(window.angular);
