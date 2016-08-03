(function(angular){

    "use strict";

    /**
    * @memberOf lsLenderApp
    * @name ContactUsController
    * @param {Service} $scope glue between view and controller
    * 
    * @description ... (mean non-terminal in angular) it should continue to match routes in child components
    */

    /* @ngInject */
    function ContactUsController($scope, $rootScope, $rootRouter, $timeout, API_ENDPOINT, appFactory, dataservice){
        var vm = this;    

        var config = appFactory.setToken();
        var CONTACT_US_API = API_ENDPOINT + 'api/contact_us/';

        vm.successPostMsgFlag = false;
        vm.saveContactUs = saveContactUs;


        vm.$routerOnActivate = function(next,prev){
            appFactory.scrollToTop();
        }


        /**
        * @memberOf ContactUsController
        * @function saveContactUs
        * validating the contact us form and submitting form data using post data service
        */
        function saveContactUs(form){

            if(form && form.$valid){

                var formData = {};
                formData.name = vm.contName;
                formData.mobile = vm.telNo;
                formData.message = vm.message;
                formData.related = vm.related;

                return dataservice.postData(CONTACT_US_API, formData).then(function(data, status) {
                   
                    if (data && data.status) {

                        console.info('data response ', data);
                        vm.successPostMsgFlag = true;
                        vm.contName = '';
                        vm.telNo = '';
                        vm.message = '';
                        vm.related = '';
                        
                        //Scroll to top
                        appFactory.scrollToTop(); 

                    }else{
                        console.error('Error, saving in data')
                    }

                });
            }
        }
    }

    angular.module('lsLenderApp')
        .component('contactus', {
            templateUrl: 'app/components/contact-us.html',
            controller: ContactUsController,
            controllerAs: 'contactCtrl'
        });

})(window.angular);