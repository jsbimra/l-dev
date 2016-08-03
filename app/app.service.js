(function() {
    'use strict';


    /**
    * Data service to 
    * @ngdoc service
    * @memberOf lsLenderApp
    * @name dataservice
    * @param {service} $http service to make ajax call and get the response
    * @param {object} Upload service to upload the files
    */

    /* @ngInject */
    function dataservice($http,Upload) {
        return {
            getData: getData,
            postData: postData,
            uploadDocument: uploadDocument,
            xdelete: xdelete,
        };


        /**
         * get result of data from query request
         * @memberof dataservice
         * @param {string} serviceURL end point url to fetch data
         * @param {object} data to sent along with the $http request
         * @returns {object} response data
         */
        function getData(serviceURL, data, config) {

            if (data != undefined && angular.isObject(data)) {
                return $http.get(serviceURL, config)
                    .then(getDataComplete)
                    .catch(getDataFailed);
            } else {
                return $http.get(serviceURL)
                    .then(getDataComplete)
                    .catch(getDataFailed);
            }

            function getDataComplete(response) {
                return response.data;

            }

            function getDataFailed(error) {
                return error.data;
                //console.log('XHR Failed for fetch page data.' + error.data);
            }
        }


        /**
         * post data to server
         * @memberof dataservice
         * @param {string} serviceURL end point url to fetch data
         * @param {object} data to sent along with the $http request
         * @param {object} config object to sent along with the $http request
         * @returns {object} response data
         */
        function postData(serviceURL, data, config) {

            if (data != undefined && angular.isObject(data)) {
                return $http.post(serviceURL, data, config)
                    .then(getDataComplete)
                    .catch(getDataFailed);
            }

            function getDataComplete(response) {
                return response.data;

            }

            function getDataFailed(error) {
                return error.data;
               // console.log('XHR Failed for fetch page data.' + error.data);
            }
        }



        /**
         * uploading file to server
         * @memberof dataservice
         * @param {string} serviceURL end point url to fetch data
         * @param {object} data to sent along with the $http request
         * @param {object} config object to sent along with the $http request
         * @returns {object} Upload object handles status of file upload success or failure results
         */
        function uploadDocument(serviceURL, data, config) {
             if (data != undefined && angular.isObject(data)) {
                return Upload.upload({url:serviceURL,
                                      data:data, 
                                      transformRequest: angular.identity,
                                      headers:config.headers
                                    })
                       .then(function (response) {
                            return response.data;
                        }, function (error) {
                            return error.data;
                        }, function (evt) {
                            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                           // console.log(progressPercentage );
                            return progressPercentage;
                        });/*then(getDataComplete, getEventProgress)
                                     .catch(getDataFailed);*/
             }

             /***Find a method to write this way//////
             function getDataComplete(response) {
                return response.data;

            }

            function getDataFailed(error) {
                return error.data;
                console.log('XHR Failed for fetch page data.' + error.data);
            }
            ****/
         }



        /**
         * deleting file from server
         * @memberof dataservice
         * @param {string} serviceURL end point url to fetch data
         * @param {object} data to sent along with the $http request
         * @param {object} config object to sent along with the $http request
         * @returns {service} $http service delete method to delete the file
         */
         function xdelete(serviceURL, data, config) {
             if (data != undefined && angular.isObject(data)) {
                return $http.delete(serviceURL, config)
                    .then(getDataComplete)
                    .catch(getDataFailed);
            }
            function getDataComplete(response) {
                return response.data;

            }

            function getDataFailed(error) {
                console.log('XHR Failed for fetch page data.' + error.data);
                return error.data;
            }
         }
     }

    dataservice.$inject = ['$http','Upload'];
    angular.module('lsLenderApp').factory('dataservice', dataservice);

})();
