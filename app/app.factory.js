(function(angular) {

    "use strict";

    /**
    * @name appFactory
    * @memberof lsLenderApp
    * @ngdoc factory 
    * @param {service} $timeout angular window.setTimeout service
    * @param {object} APP_CONSTANT constants defined at application levels
    * @desc appFactory hold the system utility methods
    */
    
    /*@ngInject*/
    function appFactory($timeout,APP_CONSTANT, $rootRouter) {
        var factory = {
            timerCountDown      : timerCountDown,
            setLocalStorageData : setLocalStorageData,
            getLocalStorageData : getLocalStorageData,
            setToken            : setToken,
            userLoggedIn        : userLoggedIn,
            scrollToTop         : scrollToTop,
            showSignUpModal     : showSignUpModal
        };

        return factory;

        /**
         * Timer counter to count down the default value
         * @memberof appFactory
         */
        function timerCountDown() {

        }

        /**
         * set value to browser localStorage in key value pair, function requires two parameter one key and other value
         * @memberof appFactory
         * @param {string} key holding name of the local storage key
         * @param {object} val holding json data object 
         */
        function setLocalStorageData(key, val) {
            if ((key !== undefined && key !== '') && (val !== undefined && val !== '')) {
                if (window.localStorage) {
                    localStorage.setItem(key, val);
                } else {
                    console.error('Your browser doesn\'t support localStorage, please try latest another browser');
                }
            }
        }


        /**
         * get localStorage value
         * @memberof appFactory
         * @param {string} key holding name of the local storage key to fetch the value
         * @returns {object} value holding json data 
         */
        function getLocalStorageData(key) {
            if ((key !== undefined && key !== '')) {
                if (window.localStorage) {
                    return localStorage.getItem(key);
                } else {
                    console.error('Your browser doesn\'t support localStorage, please try latest another browser');
                }
            }
        }


        /**
         * set token for each $http request
         * @memberof appFactory
         * @returns {object} config object holding header
         */
        function setToken(){
            var header = {
                           'Authorization': 'Token ' + getLocalStorageData(APP_CONSTANT.LOGIN_TOKEN)
                         };
            var config = {headers:header};
            return config;
        }


        /**
         * check if login status of user logged in or not
         * @memberof appFactory
         * @returns {boolean} return false if user is logged in or not
         */
        function userLoggedIn(){
            // console.info($rootRouter);

            if (localStorage.getItem('login_status') === null || localStorage.getItem('login_status') === undefined || JSON.parse(localStorage.getItem('login_status')) === false) {
                $rootRouter.navigate(['Home']);
                return false;
            }else{
                return true;
            }
        }



        /**
         * scroll page to top of the view port
         * @memberof appFactory
         */
        function scrollToTop() {
            // console.info('scroll to fired');
            /* have to reduce the animation timeout from 1000 to 0 due to flickring issue when scrollbar is at bottom */
            $('html,body').animate({ scrollTop: $('body').offset().top }, 0);
            // return $('html,body').animate({scrollTop: $('body').offset().top }, 0); // causing  not to work scroll top
        }


        /**
         * to show the login-signup modal with signup tab enabled by default
         * @memberof appFactory
         */
        function showSignUpModal() {
            console.info('show signup modal fired');
            $('a[href="#signup-tab"]').tab('show'); // Select tab by name
            $('#loginSignupModal').modal('show');
        }
    };


    angular.module('lsLenderApp').factory('appFactory', ['$timeout', 'APP_CONSTANT', '$rootRouter', appFactory]);

})(window.angular);
