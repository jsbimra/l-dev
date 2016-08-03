(function (angular) {
    "use strict";

    /**
    * loansingh Module
    *
    * Description
    */

    function windowPopupModuleController($scope){
    	var vm=this;
    	// console.log(localStorage['referralTerms']);

    	if(localStorage['referralTerms'] == 'true'){
    		vm.termsLink = 'app/components/refer_terms_cond.html';
    		localStorage['referralTerms']=false;
    	}
    	else{
    		vm.termsLink = 'app/components/terms_cond.html';
    	}
        
    	// console.log(vm.termsLink);
    	//console.log(appFactory.setReferralTerms());
    }

    angular.module('lsTermsApp', [])
           .controller('windowPopupModuleController',['$scope',windowPopupModuleController]);
 

})(window.angular);

