(function(angular) {

    "use strict";

    /**
     * @memberOf lsLenderApp
     * @name login
     * @param {Service} $scope service to provide scope between controller and view of component
     * @description login controller
     */

    /* @ngInject */
    function borrowerInfoController($scope, $location, $timeout, appFactory, dataservice, APP_CONSTANT, API_ENDPOINT, $rootRouter) {
        var vm = this;

        var LENDER_INFO_API     = API_ENDPOINT+'lender/profile/';
        var LENDER_DOC_API     = API_ENDPOINT+'api/profile/document/vault/';

        var config = appFactory.setToken();
        var now = new Date();
        var eighteen_years_ago = new Date(now.getFullYear() - 18, now.getMonth(), now.getDay());

        vm.profileAddressOption = APP_CONSTANT.ADDRESS_DOCUMENT_LISTS;
        vm.documentType         = "Address Proof";
        vm.format               = "dd/MM/yyyy";
        vm.userProfile          = {};
        vm.uploadedDoc;

        vm.dateOptions = {
                    formatYear: 'yyyy',
                    initDate: new Date(1988, 4, 1),
                    maxDate: eighteen_years_ago,
                    minDate: new Date(1960, 1, 1),
                    startingDay: 0,
                    datepickerMode: "year",
                    showWeeks : false
                  };


         /* method vm definiations */
        vm.saveLenderInfo         = saveLenderInfo;
        vm.saveDataToLocal        = saveDataToLocal;
        vm.uploadAddressProof     = uploadAddressProof;
        vm.deleteSelectedDocument = deleteSelectedDocument;
        vm.trimName               = trimName;

         vm.$routerOnActivate = function(next, prev) {
             getDataFromLocal();
         };

         vm.$routerOnDeactivate = function() {

         };

        /**Function to upload address proof document**/
        function uploadAddressProof(file){
            vm.uploadedDoc = file[0];
             var postObj = {
                document: file[0],
                type: vm.userProfile.documentType.value
            };
            
            dataservice.uploadDocument(LENDER_DOC_API, postObj,config).then(function(data, status){
                console.log(data);
                if(data){
                    if(data.status){
                        vm.uploadedDoc.doc_id = data.doc_id;
                        vm.uploadedDocument = true;
                   }
                }
                
            },function(error){
            },
            function(progress){
                //console.log(progress);
            });
        }

         /***Function to delete address proof documents***/
        function deleteSelectedDocument(doc) {

            var data = $.param({
                id:  vm.uploadedDoc.doc_id
            });
            dataservice.xdelete(LENDER_DOC_API+'?'+data, { id: doc.doc_id }, config).then(function(data, status){
                if(data){
                    if(data.status){
                        vm.uploadedDocument = false;
                   }
                }
                
            },function(){
            });
        }

        function getLenderInfo(){
            dataservice.getData(LENDER_INFO_API, {},config).then(function(data, status){
                if(data){
                    if(data.status){
                        vm.userProfile = data.data;
                        vm.userProfile.name = [data.data.f_name, data.data.l_name]
                    .filter(function(x) {
                        return x }).join(' ');

                    if (data.data.birthdate != null) {
                        var dateStr = data.data.birthdate;
                        dateArr = dateStr.split('-');
                        vm.userProfile.dob = new Date(dateArr[0], dateArr[1] - 1, dateArr[2]);
                    }
                   }
                }
                
            },function(){
            });
        }

        /***Function to save lender info***/
        function saveLenderInfo(){

            var userInfo = {};
           
            userInfo = (JSON.parse(JSON.stringify(vm.userProfile)));
            delete userInfo["name"]; 
            delete userInfo["dob"];
            delete userInfo["dobShort"];
            delete userInfo["documentType"]; 
            userInfo.first_name = vm.userProfile.name.substring(0, vm.userProfile.name.indexOf(' '));
            userInfo.last_name = vm.userProfile.name.substring(vm.userProfile.name.indexOf(' ') + 1);
            userInfo.birthdate = formatDate(vm.userProfile.dob);
            //userInfo.documentType = vm.userProfile.documentType.value;

            dataservice.postData(LENDER_INFO_API, userInfo,config).then(function(data, status){
                if(data){
                    if(data.status){
                        $rootRouter.navigate(['Payment']);
                        $('#borrowerInfoModal').modal('hide');
                   }
                }
                
            },function(){
            });
        }

        function formatDate(dateStr){
            var options = {year: 'numeric', month: '2-digit', day: '2-digit' };
            dateStr = dateStr.toLocaleDateString('en-US', options);
            //console.log(Date.parse(dateStr.toDateString()));
            var dateArr = dateStr.split('/');
            return dateArr[2] + '-' + dateArr[0] + '-' + dateArr[1];
        }

        function saveDataToLocal(){
            if(vm.userProfile.dob)
               vm.userProfile.dobShort = formatDate(vm.userProfile.dob);
            appFactory.setLocalStorageData(APP_CONSTANT.LENDER_INFO,JSON.stringify(vm.userProfile));
        }

        function getDataFromLocal(){
            //console.log(($("#borrowerInfoModal").data('bs.modal') || {}).isShown)
            vm.userProfile=JSON.parse(appFactory.getLocalStorageData(APP_CONSTANT.LENDER_INFO));
            if(vm.userProfile == null){
                vm.userProfile     = {};
                vm.userProfile.dob = new Date(1988, 4, 1);
            }
            else{
                var dateArr = vm.userProfile.dobShort.split('-');
                vm.userProfile.dob = new Date(parseInt(dateArr[0]), parseInt(dateArr[1])-1, parseInt(dateArr[2]));
            }
        }

        /*Function to trim the file name*/
        function trimName(fileName) {
            if (fileName) {
                var strng = fileName;
                if (fileName.length > 15)
                    return fileName.slice(0, 7) + ".." + strng.substring(fileName.length - 7);
                else {
                    return fileName;
                }
            }

        }


    };/* controller code end */

    angular.module('lsLenderApp')
        .component('borrowerinfoComponent', {
            templateUrl: 'app/borrower_info/borrower-info.html',
            controller: borrowerInfoController,
            controllerAs: 'infoCtrl',
            $routeConfig: [
                
            ]
        });

})(window.angular);
