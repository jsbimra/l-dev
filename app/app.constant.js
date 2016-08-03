
(function(angular) {

	"use strict";

    /**
    * @name APP_CONSTANT
    * @memberof lsLenderApp
    * @ngdoc constant 
    * @param {object} object list of properties defined as constants
    * @desc defining constants to be used for entire applications
    */
    angular.module('lsLenderApp')
             
        .constant('APP_CONSTANT', {
            "LOGIN_TOKEN"            : 'token',
            
            "LOGIN_STATUS"           : 'login_status',

            "INVEST_NOW_BTN"         : 'invest_now_btn',

            "COUNT_DOWN_VALUE"       : 10,

            "POOL_CREATION_STATUS"   : 'pool_created',

            "PORTFOLIO_PREF"         : 'portfolio_pref',

            "RATE_RISKS"             : [
                                        {name: 'Low', code: 1, class: 'low', value: '12-16%'},
                                        {name: 'Medium', code: 2, class: 'medium', value: '16-20%'},
                                        {name: 'High', code: 3, class: 'high', value: '20-24%'}
                                       ],

            "LENDER_INFO"            : 'lender_info' ,

            "ADDRESS_DOCUMENT_LISTS" : [
                                        { name: 'Passport', value: 'PASSPORT' },
                                        { name: 'Driving License', value: 'DRIVINGLICENSE' },
                                        { name: 'Voter ID', value: 'VOTERID' },
                                        { name: 'Aadhaar', value: 'AADHAAR' },
                                        { name: 'Bank Statement', value: 'BANKSTATEMENT' }
                                       ],
        })

})(window.angular);
