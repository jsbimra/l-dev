angular.module('lsLenderApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/auto_invest/auto-invest.html',
    "<!-- for sub section/child components -->\r" +
    "\n" +
    " <div class=\"app-section\">\r" +
    "\n" +
    "    <article class=\"app-content\">\r" +
    "\n" +
    "        <div class=\"app-content-inner__child clearfix portfolio-section\">\r" +
    "\n" +
    "        <section class=\"portfolio-sec page-section\">\r" +
    "\n" +
    "           <div class=\"container\">\r" +
    "\n" +
    "             <h1>Build your portfolio in just one click</h1>\r" +
    "\n" +
    "            <div class=\"row portfolio-row\">\r" +
    "\n" +
    "                <div class=\"col-md-6\">\r" +
    "\n" +
    "                  <div class=\"auto-invest-padd-container\">\r" +
    "\n" +
    "                    <invest-widget on-invest-now=\"autoCtrl.buildPortfolio()\" button-text=\"BUILD PORTFOLIO\"></invest-widget>\r" +
    "\n" +
    "                  </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"col-md-6\">\r" +
    "\n" +
    "                   <portfolio-pool-component ng-if=\"autoCtrl.showPool\" createdpool=\"autoCtrl.createdpool\" userpref=\"autoCtrl.userPref\" investnow=\"autoCtrl.investNow()\" collapsible=\"false\"></portfolio-pool-component><!--To be changed to component child routing-->\r" +
    "\n" +
    "                   <div class=\"portfolio-empty\" ng-if=\"!autoCtrl.showPool\">\r" +
    "\n" +
    "                      <div class=\"wrapper\">\r" +
    "\n" +
    "                         <i class=\"fa fa-clipboard\" aria-hidden=\"true\"></i>\r" +
    "\n" +
    "                         <p>Your Portfolio<br>will appear here</p>\r" +
    "\n" +
    "                      </div>\r" +
    "\n" +
    "                   </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <p class=\"skip-link\" ng-link=['Invest']>Skip</p>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "           </div>\r" +
    "\n" +
    "        </section>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        \r" +
    "\n" +
    "        </div><!-- app-content-inner__child end -->\r" +
    "\n" +
    "    </article><!-- app-content end -->\r" +
    "\n" +
    "</div><!-- app-section -->"
  );


  $templateCache.put('app/borrower_amount_invest/borrower-amount-invest.html',
    "<div class=\"modal fade in login-signup-modal\" id=\"borrowerAmountModal\">\r" +
    "\n" +
    "    <div class=\"modal-dialog\">\r" +
    "\n" +
    "        <div class=\"modal-content clearfix\">\r" +
    "\n" +
    "            <div class=\"modal-body\">\r" +
    "\n" +
    "                <span class=\"modal-close-icon\">\r" +
    "\n" +
    "                    <i class=\"fa fa-times font_2em\" data-dismiss=\"modal\" aria-hidden=\"true\"></i>\r" +
    "\n" +
    "                </span>\r" +
    "\n" +
    "                <div class=\"col-md-5 l-col hidden-sm hidden-xs\">\r" +
    "\n" +
    "                    <img src=\"../img/loansingh-mustache.png\" alt=\"loansingh-mustache\" class=\"mustache-img\" />\r" +
    "\n" +
    "                    <p class=\"desc text-left\"></p>\r" +
    "\n" +
    "                    \r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"col-xs-12 col-sm-12 col-md-7 r-col\">\r" +
    "\n" +
    "                    <div class=\"modal-form-section\">\r" +
    "\n" +
    "                       <h3>How much do you wish to invest?</h3>\r" +
    "\n" +
    "                       <div class=\"invest-table-wrapper\">\r" +
    "\n" +
    "                          <div class=\"invest-table\">\r" +
    "\n" +
    "                              <div class=\"invest-table-row\" ng-repeat=\"br in amtCtrl.selectedborrowers track by $index\">\r" +
    "\n" +
    "                               <div class=\"invest-table-column\">\r" +
    "\n" +
    "                                    <p>{{br.name}}</p>\r" +
    "\n" +
    "                                 </div>\r" +
    "\n" +
    "                                 <div class=\"invest-table-column\" ng-repeat=\"amt in br.split_amount_list\" ng-click=\"amtCtrl.selectAmount($parent.$index, amt)\" ng-class=\"{'active':br.selected_amount==amt}\">\r" +
    "\n" +
    "                                    <p>{{amt}}</p>\r" +
    "\n" +
    "                                 </div>\r" +
    "\n" +
    "                              </div>\r" +
    "\n" +
    "                           </div>\r" +
    "\n" +
    "                           </div>\r" +
    "\n" +
    "                       \r" +
    "\n" +
    "                       <div class=\"nav-buttons\">\r" +
    "\n" +
    "                          <button type=\"button\" class=\"btn btn-primary btn-cancel\" ng-click=\"amtCtrl.closeBorrower()\">Cancel</button>\r" +
    "\n" +
    "                          <button type=\"button\" class=\"btn btn-primary btn-next\" ng-click=\"amtCtrl.closeBorrower(); amtCtrl.submitAmounts({borrowerArray:amtCtrl.selectedborrowers})\">Next</button>\r" +
    "\n" +
    "                       </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"clearfix\"></div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('app/borrower_info/borrower-info.html',
    "<div class=\"modal fade in login-signup-modal\" id=\"borrowerInfoModal\">\r" +
    "\n" +
    "    <div class=\"modal-dialog\">\r" +
    "\n" +
    "        <div class=\"modal-content clearfix\">\r" +
    "\n" +
    "            <div class=\"modal-body\">\r" +
    "\n" +
    "                <span class=\"modal-close-icon\">\r" +
    "\n" +
    "                    <i class=\"fa fa-times font_2em\" ng-click=\"infoCtrl.saveDataToLocal()\" data-dismiss=\"modal\" aria-hidden=\"true\"></i>\r" +
    "\n" +
    "                </span>\r" +
    "\n" +
    "                <div class=\"col-md-5 l-col hidden-sm hidden-xs\">\r" +
    "\n" +
    "                    <img src=\"../img/loansingh-mustache.png\" alt=\"loansingh-mustache\" class=\"mustache-img\" />\r" +
    "\n" +
    "                    <p class=\"desc text-left\">We just need you to input some more details to get started.</p>\r" +
    "\n" +
    "                    \r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"col-xs-12 col-sm-12 col-md-7 r-col\">\r" +
    "\n" +
    "                    <div class=\"modal-form-section\">\r" +
    "\n" +
    "                       <tab-component>\r" +
    "\n" +
    "                         <form name=\"infoCtrl.frmInfo\" id=\"infoCtrl.frmInfo\" novalidate ng-submit=\"infoCtrl.frmInfo.$valid && infoCtrl.saveLenderInfo()\">\r" +
    "\n" +
    "                            <pane-component title=\"Profile\">\r" +
    "\n" +
    "                            \r" +
    "\n" +
    "                                <div class=\"form-group\">\r" +
    "\n" +
    "                                    <label for=\"userName\">Name*</label>\r" +
    "\n" +
    "                                    <input type=\"text\" id=\"userName\" name=\"userName\" ng-trim=\"false\" placeholder=\"Enter your name\" ng-model=\"infoCtrl.userProfile.name\" class=\"form-control\" ng-pattern=\"/^[a-zA-Z_ ]*$/\"  autofocus required autocomplete=\"off\" ng-class=\"{ 'errorbox': infoCtrl.frmInfo.userName.$touched && infoCtrl.frmInfo.userName.$invalid && infoCtrl.frmInfo.$submitted}\"/>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <div class=\"error-msg\" ng-messages=\"infoCtrl.frmInfo.$submitted && infoCtrl.frmInfo.userName.$error\">\r" +
    "\n" +
    "                                        <div ng-message=\"required\">Please enter your full name</div>\r" +
    "\n" +
    "                                        <div ng-message=\"pattern\">Please enter a valid full name</div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                \r" +
    "\n" +
    "                                <div class=\"form-group dob-group\">\r" +
    "\n" +
    "                                    <label for=\"userSurName\">DOB*</label>\r" +
    "\n" +
    "                                   <input type=\"text\" class=\"form-control\" name=\"dob\" uib-datepicker-popup=\"{{infoCtrl.format}}\" ng-model=\"infoCtrl.userProfile.dob\" is-open=\"infoCtrl.popup1.opened\" datepicker-options=\"infoCtrl.dateOptions\" ng-required=\"true\" close-text=\"\" alt-input-formats=\"altInputFormats\" show-button-bar=false ng-click=\"infoCtrl.popup1.opened=!infoCtrl.popup1.opened\"/>\r" +
    "\n" +
    "                                 \r" +
    "\n" +
    "                                    <div class=\"error-msg\" ng-messages=\"infoCtrl.frmInfo.$submitted && infoCtrl.frmInfo.dob.$error\">\r" +
    "\n" +
    "                                        <div ng-message=\"required\">Please select your date of birth</div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                \r" +
    "\n" +
    "                              </pane-component>\r" +
    "\n" +
    "                              <pane-component title=\"Identity\">\r" +
    "\n" +
    "                                <div class=\"form-group\">\r" +
    "\n" +
    "                                    <label for=\"userPan\">Pan Number*</label>\r" +
    "\n" +
    "                                    <input type=\"text\" id=\"userPan\" name=\"userPan\" placeholder=\"Enter your pan number\" ng-model=\"infoCtrl.userProfile.pan\" class=\"form-control\"  autofocus required autocomplete=\"off\" ng-pattern=\"/^[\\w]{3}(p|P|c|C|h|H|f|F|a|A|t|T|b|B|l|L|j|J|g|G)[\\w][\\d]{4}[\\w]$/\" ng-class=\"{ 'errorbox': infoCtrl.frmInfo.userPan.$touched && infoCtrl.frmInfo.userPan.$invalid && infoCtrl.frmInfo.$submitted}\"/>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <div class=\"error-msg\" ng-messages=\"infoCtrl.frmInfo.$submitted && infoCtrl.frmInfo.userPan.$error\">\r" +
    "\n" +
    "                                        <div ng-message=\"required\">Please enter your pan number</div>\r" +
    "\n" +
    "                                        <div class=\"errormsg\" ng-message=\"pattern\">Please enter a valid pan number</div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div class=\"form-group\">\r" +
    "\n" +
    "                                    <label for=\"userAddress\">Upload Address Proof</label>\r" +
    "\n" +
    "                                     <select class=\"form-control\" ng-model=\"infoCtrl.userProfile.documentType\" ng-options=\"address.name for address in infoCtrl.profileAddressOption track by address.value\" id=\"documentType\" name=\"documentType\">\r" +
    "\n" +
    "                                         <option disabled selected value> -- Address Proof --</option>\r" +
    "\n" +
    "                                    </select>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <!-- <div class=\"error-msg\" ng-messages=\"infoCtrl.frmInfo.$submitted && infoCtrl.frmInfo.documentType.$error\">\r" +
    "\n" +
    "                                        <div ng-message=\"required\">Please upload address proof document</div>\r" +
    "\n" +
    "                                    </div> -->\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                 <!--input type=\"file\" -->\r" +
    "\n" +
    "                                   <div class=\"col-md-12 no-padding\" ng-if=\"infoCtrl.userProfile.documentType\">\r" +
    "\n" +
    "                                       <div class=\"col-md-6 no-padding\">\r" +
    "\n" +
    "                                            <div class=\"ng-scope drop uploadFileDrop\" ngf-drop=\"infoCtrl.uploadAddressProof($files)\" ng-model=\"infoCtrl.uploadAddress\" ngf-drag-over-class=\"'dragover'\" ngf-multiple=\"false\" ngf-allow-dir=\"false\" ngf-keep=\"distinct\" accept=\"image/*,application/pdf\" ngf-pattern=\"'image/*,application/pdf'\">\r" +
    "\n" +
    "                                                <i class=\"fa fa-file-o\" aria-hidden=\"true\"></i>\r" +
    "\n" +
    "                                                <p> Drag &amp; Drop<br> {{infoCtrl.documentType}} scan here </p>\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                        <div class=\"col-md-2 no-padding center-text\">\r" +
    "\n" +
    "                                        OR\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                        <div class=\"col-md-4 browsebtn\" ngf-select=\"infoCtrl.uploadAddressProof($files)\" ng-model=\"infoCtrl.uploadAddress\" ngf-multiple=\"false\" ngf-allow-dir=\"false\" ngf-keep=\"distinct\" accept=\"image/*,application/pdf\" ngf-pattern=\"'image/*,application/pdf'\" >\r" +
    "\n" +
    "                                            <span class=\"browse\">UPLOAD<input style=\"visibility: hidden; position: absolute;\" type=\"file\" file=\"addressDocument\" name=\"statementDoc\" id=\"statementDoc\"></span>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                        <p class=\"help-text\" ng-if=\"infoCtrl.userProfile.documentType\"> Document File Format Allowed: JPG, PNG, PDF - Max File Size: 3MB</p>\r" +
    "\n" +
    "                                         <div class=\"filename-wrap\" ng-if=\"infoCtrl.uploadedDocument\">\r" +
    "\n" +
    "                                            <div class=\"stmntName\">\r" +
    "\n" +
    "                                                <p class=\"fileName\" rel=\"tooltip\" tooltip=\"infoCtrl.uploadAddress.name\"> {{infoCtrl.trimName(infoCtrl.uploadAddress.name)}} </p>\r" +
    "\n" +
    "                                                <button class=\"delBut\" type=\"button\" ng-click=\"infoCtrl.deleteSelectedDocument(infoCtrl.uploadAddress)\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></button>\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                        <div class=\"filename-wrap\">\r" +
    "\n" +
    "                                            <div class=\"transfer-box clearfix ng-scope ng-binding\" ng-if=\"!infoCtrl.uploadAddress.remove && infoCtrl.uploadAddress.fileProgress>0\">\r" +
    "\n" +
    "                                                <p>{{infoCtrl.trimName(infoCtrl.uploadAddress.name)}} </p>\r" +
    "\n" +
    "                                                <div class=\"progress progress-striped\" ng-class=\"active\">\r" +
    "\n" +
    "                                                    <div style=\"width: 100%;\" class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" ng-style=\"{width: (infoCtrl.uploadAddress.fileProgress) + '%'}\">\r" +
    "\n" +
    "                                                        <!--<span class=\"ng-binding\">{{file.progress() * 100}}% Complete</span>-->\r" +
    "\n" +
    "                                                        <!--<span class=\"ng-binding\">{{file.isUploading()}}</span>-->\r" +
    "\n" +
    "                                                    </div>\r" +
    "\n" +
    "                                                </div>\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                              </pane-component>\r" +
    "\n" +
    "                              <pane-component title=\"Financials\">\r" +
    "\n" +
    "                                    <div class=\"form-group\">\r" +
    "\n" +
    "                                            <div>\r" +
    "\n" +
    "                                                <label for=\"ifscCode\">IFSC Code*</label>\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                            \r" +
    "\n" +
    "                                            <input type=\"text\" class=\"form-control\" value=\"\" placeholder=\"Enter IFSC Code\" ng-model=\"infoCtrl.userProfile.ifsc\" id=\"ifscCode\" required ng-pattern=\"/[A-Z|a-z]{4}[0][a-zA-Z0-9]{6}$/\" name=\"ifscCode\" ng-class=\"{ 'errorbox': infoCtrl.frmInfo.ifscCode.$touched && infoCtrl.frmInfo.ifscCode.$invalid && infoCtrl.frmInfo.$submitted}\">\r" +
    "\n" +
    "                                            <div class=\"error-msg\" ng-messages='infoCtrl.frmInfo.ifscCode.$error'  ng-if='infoCtrl.frmInfo.$submitted'>\r" +
    "\n" +
    "                                                <div ng-message=\"required\">Please enter your IFSC Code.</div>\r" +
    "\n" +
    "                                                <div ng-message=\"pattern\">Please enter a valid IFSC Code.</div>\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                           \r" +
    "\n" +
    "                                            <div class=\"clearfix\"></div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div class=\"form-group\">\r" +
    "\n" +
    "                                        <div>\r" +
    "\n" +
    "                                            <label for=\"accountNumber\">Account Number*</label>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                        <input type=\"number\" class=\"form-control\" value=\"\" placeholder=\"Enter Bank Account Number\" ng-model=\"infoCtrl.userProfile.account_number\" id=\"accountNumber\" required name=\"accountNumber\" ng-class=\"{ 'errorbox': infoCtrl.frmInfo.accountNumber.$touched && infoCtrl.frmInfo.accountNumber.$invalid && infoCtrl.frmInfo.$submitted}\">\r" +
    "\n" +
    "                                        <div class=\"error-msg\" ng-messages='infoCtrl.frmInfo.accountNumber.$error' ng-if='infoCtrl.frmInfo.$submitted'>\r" +
    "\n" +
    "                                            <div ng-message=\"required\">Please enter your account number.</div>\r" +
    "\n" +
    "                                            <div ng-message=\"number\">Please enter a valid account number.</div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                        \r" +
    "\n" +
    "                                        <div class=\"clearfix\"></div>\r" +
    "\n" +
    "                                   </div>\r" +
    "\n" +
    "                              </pane-component>\r" +
    "\n" +
    "                              <div class=\"text-center mar-top30\">\r" +
    "\n" +
    "                                <button type=\"submit\" class=\"btn btn-continue mar-btm125\" id=\"continue10\" ng-disabled=\"infoCtrl.frmInfo.$submitted && infoCtrl.frmInfo.$invalid\">Done\r" +
    "\n" +
    "                                    <span ng-show=\"\">&nbsp;</span>\r" +
    "\n" +
    "                                    <i class=\"fa fa-arrow-circle-right font_15\" ng-hide=\"infoCtrl.frmInfo.$submitted\" aria-hidden=\"true\"></i>\r" +
    "\n" +
    "                                    <i class=\"fa fa-spinner faa-spin animated font_15\" ng-show=\"infoCtrl.frmInfo.$submitted && infoCtrl.frmInfo.$valid\"></i>\r" +
    "\n" +
    "                                </button>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                              \r" +
    "\n" +
    "                          </form>\r" +
    "\n" +
    "                       </tab-component>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"clearfix\"></div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('app/components/about-us.html',
    "<div class=\"app-section fade-in-up ng-enter ng-enter-active\">\r" +
    "\n" +
    "    <article class=\"app-content\">\r" +
    "\n" +
    "        <div class=\"app-content-inner__child clearfix\">\r" +
    "\n" +
    "            <section class=\"container static-container about-us-section\">\r" +
    "\n" +
    "                <!-- <h1 class=\"text-center\">About us</h1> -->\r" +
    "\n" +
    "                <p class=\"padd-top-40\">Loan Singh is a digital peer to peer lending platform which connects lenders who can lend to credit worthy but underserved borrowers. In return for the loan, lenders earn lucrative interest rates.</p>\r" +
    "\n" +
    "                <p>Loan Singh provides value added services like risk assessment and verification to ensure the quality of borrowers.</p>\r" +
    "\n" +
    "                <p><a href ng-link=\"['HowItWorks']\">Click here</a> for more details on how it works</p>\r" +
    "\n" +
    "                <div class=\"row profile-container\">\r" +
    "\n" +
    "                    <div class=\"col-xs-12 col-md-6\">\r" +
    "\n" +
    "                       <img src=\"../img/vinod.jpg\" class=\"pull-left profile-img\" /> \r" +
    "\n" +
    "                       \r" +
    "\n" +
    "                       <div class=\"bec\">\r" +
    "\n" +
    "                           <h3>Vinod Easwaran</h3>\r" +
    "\n" +
    "                           <h5>Chief Operating Officer</h5>\r" +
    "\n" +
    "                           <p>Vinod across two decades in financial services has headed personal and vehicle lending (book size $1.5 and $4 billion) at ICICI Bank, set up and led their retail business in Russia across 3 years (member of the Executive Board) and was part of the India founding team for Beiqi Foton Motors, a China-based Fortune 500 company.</p>\r" +
    "\n" +
    "                       </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"col-xs-12 col-md-6\">\r" +
    "\n" +
    "                       <img src=\"../img/siddharth.jpg\" class=\"pull-left profile-img\" /> \r" +
    "\n" +
    "\r" +
    "\n" +
    "                       <div class=\"bec\">\r" +
    "\n" +
    "                           <h3>Siddharth Misra</h3>\r" +
    "\n" +
    "                           <h5>VP, Operations</h5>\r" +
    "\n" +
    "                           <p>Siddharth started at pioneering company SKS Microfinance, then founded his own NBFC, worked at financial inclusion company Eko, then headed Operations at food-delivery company Travel Khana.</p>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                \r" +
    "\n" +
    "                <div class=\"row profile-container\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"col-xs-12 col-md-6\">\r" +
    "\n" +
    "                       <img src=\"../img/vijay.jpg\" class=\"pull-left profile-img\" /> \r" +
    "\n" +
    "\r" +
    "\n" +
    "                       <div class=\"bec\">\r" +
    "\n" +
    "                           <h3>Vijay Natarajan</h3>\r" +
    "\n" +
    "                           <h5>Product Director</h5>\r" +
    "\n" +
    "                           <p>Vijay Natarajan went to IIT (Delhi) and IIM (Calcutta) and first worked at conventional companies like American Express and ICICI before turning entrepreneurial, becoming co-founder of two Fintech companies.</p>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div class=\"row profile-container\">\r" +
    "\n" +
    "                    <div class=\"col-xs-12 col-md-6\">\r" +
    "\n" +
    "                       <img src=\"http://placehold.it/95x95\" class=\"pull-left profile-img\" /> \r" +
    "\n" +
    "\r" +
    "\n" +
    "                       <div class=\"bec\">\r" +
    "\n" +
    "                           <h3>Manish</h3>\r" +
    "\n" +
    "                           <h5>Technology Head</h5>\r" +
    "\n" +
    "                           <p></p>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </section>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </article>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('app/components/contact-us.html',
    "<div class=\"app-section fade-in-up ng-enter ng-enter-active\">\r" +
    "\n" +
    "    <article class=\"app-content\">\r" +
    "\n" +
    "        <div class=\"app-content-inner__child clearfix\">\r" +
    "\n" +
    "            <section class=\"container static-container contact-us-section\">\r" +
    "\n" +
    "                <h1 class=\"text-center\">Contact us</h1>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div class=\"contactus-wrapper container\">\r" +
    "\n" +
    "                    <div class=\"alert alert-success alert-dismissible\" role=\"alert\" ng-show=\"contactCtrl.successPostMsgFlag\">\r" +
    "\n" +
    "                        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r" +
    "\n" +
    "                        Thank you for contacting us, we will get back to you shortly.\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <form ng-submit=\"contactCtrl.saveContactUs(frmContactUs)\" id=\"frmContactUs\" name=\"frmContactUs\" novalidate=\"\">\r" +
    "\n" +
    "                        <div class=\"col-sm-12\">\r" +
    "\n" +
    "                            <div class=\"form-group\">\r" +
    "\n" +
    "                                <label>Name*</label>\r" +
    "\n" +
    "                                <input id=\"name\" type=\"text\" name=\"txtName\" ng-model=\"contactCtrl.contName\" class=\"form-control\" placeholder=\"Name\" required>\r" +
    "\n" +
    "                                <div class=\"error-msg\" ng-messages=\"frmContactUs.$submitted && frmContactUs.txtName.$error\">\r" +
    "\n" +
    "                                    <div ng-message=\"required\">This field is required.</div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-sm-12\">\r" +
    "\n" +
    "                            <div class=\"form-group\">\r" +
    "\n" +
    "                                <label>Mobile Number*</label>\r" +
    "\n" +
    "                                <div class=\"input-group\">\r" +
    "\n" +
    "                                    <div class=\"input-group-addon\">+91</div>\r" +
    "\n" +
    "                                    <input id=\"mob\" type=\"tel\" name=\"txtMobileNo\" class=\"form-control\" ng-model=\"contactCtrl.telNo\" placeholder=\"Mobile Number\" ng-maxlength=\"10\" ng-pattern=\"/^[0-9]{10}$/\" required=\"\" />\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div class=\"error-msg clearfix\" ng-messages=\"frmContactUs.$submitted && frmContactUs.txtMobileNo.$error\">\r" +
    "\n" +
    "                                    <div ng-message=\"required\">This field is required.</div>\r" +
    "\n" +
    "                                    <div ng-message=\"maxlength\">Phone number is too short or long, please correct</div>\r" +
    "\n" +
    "                                    <div ng-message=\"pattern\">Enter valid phone number</div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-sm-12\">\r" +
    "\n" +
    "                            <div class=\"form-group\">\r" +
    "\n" +
    "                                <label>My message is*</label>\r" +
    "\n" +
    "                                <textarea id=\"msg\" class=\"form-control h-auto\" name=\"txtarMessage\" ng-model=\"contactCtrl.message\" required=\"\" ng-maxlength=\"500\" rows=\"5\"></textarea>\r" +
    "\n" +
    "                                <div class=\"error-msg pull-left\" ng-messages=\"frmContactUs.$submitted && frmContactUs.txtarMessage.$error\">\r" +
    "\n" +
    "                                    <div ng-message=\"required\">This field is required.</div>\r" +
    "\n" +
    "                                    <div ng-message=\"maxlength\">You have reach the max count limit.</div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <span class=\"pull-right textarea-txt\">500 words</span>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <span class=\"error-msg\"></span>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-sm-12\">\r" +
    "\n" +
    "                            <div class=\"form-group\">\r" +
    "\n" +
    "                                <label>Related to*</label>\r" +
    "\n" +
    "                                <select id=\"relted\" class=\"form-control\" name=\"ddlRelatedTo\" ng-model=\"contactCtrl.related\" required>\r" +
    "\n" +
    "                                    <option value=\"\" selected>Select related to</option>\r" +
    "\n" +
    "                                    <option value=\"I want to be a lender\">I want to be a lender</option>\r" +
    "\n" +
    "                                    <option value=\"Regarding an active loan\">Regarding an active loan</option>\r" +
    "\n" +
    "                                    <option value=\"Borrower profile query\">Borrower profile query</option>\r" +
    "\n" +
    "                                    <option value=\"My reasons are not listed here\">My reasons are not listed here</option>\r" +
    "\n" +
    "                                </select>\r" +
    "\n" +
    "                                <div class=\"error-msg\" ng-messages=\"frmContactUs.$submitted && frmContactUs.ddlRelatedTo.$error\">\r" +
    "\n" +
    "                                    <div ng-message=\"required\">This field is required.</div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-sm-12 text-center\">\r" +
    "\n" +
    "                            <button type=\"submit\" class=\"btn btn-primary\">Send</button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </form>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div class=\"row nomargin\">\r" +
    "\n" +
    "                    <div class=\"col-xs-12 col-sm-12 nopadding\">\r" +
    "\n" +
    "                        <div class=\"row nomargin\">\r" +
    "\n" +
    "                            <div class=\"socialmedia-sec\">\r" +
    "\n" +
    "                                <div class=\"contactus-social-links\">\r" +
    "\n" +
    "                                    <div class=\"col-xs-6 col-sm-3 text-center\">\r" +
    "\n" +
    "                                        <a href=\"https://www.facebook.com/loansingh/\" target=\"_blank\"><span class=\"circle-btn facebook\"><i class=\"icon icon-facebook\"></i></span></a>\r" +
    "\n" +
    "                                        <p>Connect us at Facebook</p>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div class=\"col-xs-6 col-sm-3 text-center\">\r" +
    "\n" +
    "                                        <a href=\"https://www.linkedin.com/company/seynse-technologies-pvt-ltd\" target=\"_blank\"><span class=\"circle-btn linkedin\"><i class=\"icon icon-in\"></i></span></a>\r" +
    "\n" +
    "                                        <p>Connect us at Linkedin</p>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div class=\"col-xs-6 col-sm-3 text-center\">\r" +
    "\n" +
    "                                         <a href=\"https://twitter.com/loan_singh\" target=\"_blank\"><span class=\"circle-btn twitter\"><i class=\"icon icon-twitter\"></i></span></a>\r" +
    "\n" +
    "                                        <p>Connect us at Twitter</p>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div class=\"col-xs-6 col-sm-3 text-center\">\r" +
    "\n" +
    "                                        <a href=\"mailto:LS@loansingh.com\" target=\"_blank\"><span class=\"circle-btn email\"><i class=\"icon icon-mail\"></i></span>\r" +
    "\n" +
    "                                        <p>LS@loansingh.com</p></a>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"center-block text-center clearfix\">\r" +
    "\n" +
    "                                <address>VILLA NO.4, HOUSE NO. 22/296 NAROO HEIGHTS, OPP MANIPAL HOSPITAL, DONA PAULA - 403004, Goa INDIA</address>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </section>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </article>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('app/components/faq.html',
    "<div class=\"app-section fade-in-up ng-enter ng-enter-active\">\r" +
    "\n" +
    "    <article class=\"app-content\">\r" +
    "\n" +
    "        <div class=\"app-content-inner__child clearfix\">\r" +
    "\n" +
    "            <section class=\"container static-container faq-section\">\r" +
    "\n" +
    "                <h1 class=\"text-center\">Frequently Asked Questions</h1>\r" +
    "\n" +
    "                <div class=\"panel-group\" id=\"accordion\">\r" +
    "\n" +
    "                    <div class=\"panel panel-default\">\r" +
    "\n" +
    "                        <div class=\"panel-heading\">\r" +
    "\n" +
    "                            <h4 class=\"panel-title\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#collapse1\"><span class=\"faq-text\">What products does Loan Singh offer? \r" +
    "\n" +
    "</span><span class=\"pull-right\"><i class=\"glyphicon glyphicon-plus\"></i></span></a></h4></div>\r" +
    "\n" +
    "                        <div id=\"collapse1\" class=\"panel-collapse collapse\">\r" +
    "\n" +
    "                            <div class=\"panel-body\">To begin with, we are offering retail unsecured loans. We provide customized solutions for segments where the present generation is underserved, to fulfill their fund requirements. As a starting segment, we are specifically giving loans for professional certification courses. Do circle back for more updates and upgrades. We are just getting started!\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"panel panel-default\">\r" +
    "\n" +
    "                        <div class=\"panel-heading\">\r" +
    "\n" +
    "                            <h4 class=\"panel-title\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#collapse2\"><span class=\"faq-text\">What is the role of Loan Singh in each transaction?\r" +
    "\n" +
    "</span><span class=\"pull-right\"><i class=\"glyphicon glyphicon-plus\"></i></span></a></h4></div>\r" +
    "\n" +
    "                        <div id=\"collapse2\" class=\"panel-collapse collapse\">\r" +
    "\n" +
    "                            <div class=\"panel-body\">Loan Singh is a P2P Lending marketplace that matches people with idle cash in their accounts to people with financial needs. Loan Singh performs a credit analysis of borrowers before introducing them to lenders. Loan Singh is just the facilitator of the transaction and is not involved in the transaction in any manner.\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"panel panel-default\">\r" +
    "\n" +
    "                        <div class=\"panel-heading\">\r" +
    "\n" +
    "                            <h4 class=\"panel-title\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#collapse3\"><span class=\"faq-text\">How is Loan Singh different from other P2P platforms? \r" +
    "\n" +
    "</span><span class=\"pull-right\"><i class=\"glyphicon glyphicon-plus\"></i></span></a></h4></div>\r" +
    "\n" +
    "                        <div id=\"collapse3\" class=\"panel-collapse collapse\">\r" +
    "\n" +
    "                            <div class=\"panel-body\">Loan Singh offers quick registration with minimum documentation. The process is seamless and completely online. We employ a unique ‘purpose specific’ approach to acquire borrowers, reducing risk considerably and borrowers are evaluated on multiple parameters to ensure creditworthiness. Lenders are provided with 24X7 support for any queries. We conduct timely follow ups for EMI collections/confirmations and provide our lenders with personalized services on loan portfolio management. We are also underway to implement an innovative fund flow technique through which you can make multiple investments through one transaction and receive a consolidated payment for all your EMIs!\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"panel panel-default\">\r" +
    "\n" +
    "                        <div class=\"panel-heading\">\r" +
    "\n" +
    "                            <h4 class=\"panel-title\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#collapse4\"><span class=\"faq-text\">Why should lenders divide their portfolio among many borrowers?\r" +
    "\n" +
    "</span><span class=\"pull-right\"><i class=\"glyphicon glyphicon-plus\"></i></span></a></h4></div>\r" +
    "\n" +
    "                        <div id=\"collapse4\" class=\"panel-collapse collapse\">\r" +
    "\n" +
    "                            <div class=\"panel-body\">Dividing portfolio among many borrowers will help you distribute risk and protect your investment against any possible default due to unforeseen circumstances.\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"panel panel-default\">\r" +
    "\n" +
    "                        <div class=\"panel-heading\">\r" +
    "\n" +
    "                            <h4 class=\"panel-title\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#collapse5\"><span class=\"faq-text\">Can I opt for part lending of a borrower’s requirement?\r" +
    "\n" +
    "</span><span class=\"pull-right\"><i class=\"glyphicon glyphicon-plus\"></i></span></a></h4></div>\r" +
    "\n" +
    "                        <div id=\"collapse5\" class=\"panel-collapse collapse\">\r" +
    "\n" +
    "                            <div class=\"panel-body\">Yes, we allow part funding for loans greater than Rs 50,000. You can view and select available funding options for the loans at the time of investment.\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"panel panel-default\">\r" +
    "\n" +
    "                        <div class=\"panel-heading\">\r" +
    "\n" +
    "                            <h4 class=\"panel-title\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#collapse6\"><span class=\"faq-text\">Is my money 100% safe? And are the returns guaranteed?\r" +
    "\n" +
    "</span><span class=\"pull-right\"><i class=\"glyphicon glyphicon-plus\"></i></span></a></h4></div>\r" +
    "\n" +
    "                        <div id=\"collapse6\" class=\"panel-collapse collapse\">\r" +
    "\n" +
    "                            <div class=\"panel-body\">Before selecting any borrower, Loan Singh conducts a detailed analysis on the profile, background, financial position and trust-worthiness of the borrower. However, there is still a risk involved wherein the borrower may default due to some unforeseen circumstances. We recommend that investors consider a diversified portfolio of investments for risk hedging purposes. So, Yes! We have checks and balances in place to minimize the chances of default\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"panel panel-default\">\r" +
    "\n" +
    "                        <div class=\"panel-heading\">\r" +
    "\n" +
    "                            <h4 class=\"panel-title\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#collapse7\"><span class=\"faq-text\">Am I investing directly in a borrower or am I giving money to your company?\r" +
    "\n" +
    "</span><span class=\"pull-right\"><i class=\"glyphicon glyphicon-plus\"></i></span></a></h4></div>\r" +
    "\n" +
    "                        <div id=\"collapse7\" class=\"panel-collapse collapse\">\r" +
    "\n" +
    "                            <div class=\"panel-body\">Loan Singh assists you to directly transfer the loan amount to the required bank account (borrower or to the educational institute). No monies are kept with Loan Singh at any point during the transaction.\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"panel panel-default\">\r" +
    "\n" +
    "                        <div class=\"panel-heading\">\r" +
    "\n" +
    "                            <h4 class=\"panel-title\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#collapse8\"><span class=\"faq-text\">How are you able to pay such high rate of interest? Does this mean you charge end-borrowers very high interest rates?\r" +
    "\n" +
    "</span><span class=\"pull-right\"><i class=\"glyphicon glyphicon-plus\"></i></span></a></h4></div>\r" +
    "\n" +
    "                        <div id=\"collapse8\" class=\"panel-collapse collapse\">\r" +
    "\n" +
    "                            <div class=\"panel-body\">In a traditional bank driven lending set-up, banks typically raise deposits from retail investors – these could be in the form of Current and Savings Accounts (CASA), or fixed deposits. As you’re probably aware, bank interest rates earn you very little, with interest rates in single digits (4% +) and a maximum taxation slab of 33% on interest earned. The bank then finds opportunities to lend the same money to individuals at higher rates. We have simplified the process, moving the borrowers directly to you and eliminating the need for you to lend to the bank and then the bank lending to this segment.\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"panel panel-default\">\r" +
    "\n" +
    "                        <div class=\"panel-heading\">\r" +
    "\n" +
    "                            <h4 class=\"panel-title\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#collapse9\"><span class=\"faq-text\">Do high returns indicate a higher risk than normal fixed deposits and other mutual fund schemes?\r" +
    "\n" +
    "</span><span class=\"pull-right\"><i class=\"glyphicon glyphicon-plus\"></i></span></a></h4></div>\r" +
    "\n" +
    "                        <div id=\"collapse9\" class=\"panel-collapse collapse\">\r" +
    "\n" +
    "                            <div class=\"panel-body\">Principally that is correct in the world of finance. A higher rate of return is typically associated with an exposure to higher risks. While the P2P lending is riskier than Bank deposits, Loan Singh’s detailed credit analysis of borrowers enables us to minimize that risk and offer commensurate returns\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"panel panel-default\">\r" +
    "\n" +
    "                        <div class=\"panel-heading\">\r" +
    "\n" +
    "                            <h4 class=\"panel-title\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#collapse10\"><span class=\"faq-text\">How do I know if the borrowers are real and not fictitious?\r" +
    "\n" +
    "</span><span class=\"pull-right\"><i class=\"glyphicon glyphicon-plus\"></i></span></a></h4></div>\r" +
    "\n" +
    "                        <div id=\"collapse10\" class=\"panel-collapse collapse\">\r" +
    "\n" +
    "                            <div class=\"panel-body\">All borrowers posted on our website are genuine, actual people. We verify their identity, address, background, social media presence, bank details and financial position, besides speaking directly with the borrower. All KYC evidence is stored by Loan Singh as part of our standard compliance procedure for Borrower KYC.\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"panel panel-default\">\r" +
    "\n" +
    "                        <div class=\"panel-heading\">\r" +
    "\n" +
    "                            <h4 class=\"panel-title\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#collapse11\"><span class=\"faq-text\">What is the difference between reducing balance interest and flat rate interest?\r" +
    "\n" +
    "</span><span class=\"pull-right\"><i class=\"glyphicon glyphicon-plus\"></i></span></a></h4></div>\r" +
    "\n" +
    "                        <div id=\"collapse11\" class=\"panel-collapse collapse\">\r" +
    "\n" +
    "                            <div class=\"panel-body\">At a flat rate, the interest rates are calculated keeping the outstanding amount (i.e. the amount on which interest is calculated) constant throughout the loan tenure while in a reducing balance loan the interest rate is recalculated on a periodic basis based on the reducing outstanding loan amount. Please refer to our EMI calculator to know EMI amount for your investment.\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"panel panel-default\">\r" +
    "\n" +
    "                        <div class=\"panel-heading\">\r" +
    "\n" +
    "                            <h4 class=\"panel-title\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#collapse12\"><span class=\"faq-text\">How is repayment on loan different from repayment on Fixed Deposits/Mutual Funds? \r" +
    "\n" +
    "</span><span class=\"pull-right\"><i class=\"glyphicon glyphicon-plus\"></i></span></a></h4></div>\r" +
    "\n" +
    "                        <div id=\"collapse12\" class=\"panel-collapse collapse\">\r" +
    "\n" +
    "                            <div class=\"panel-body\">At Loan Singh, your investment is repaid every month in the form of Equated Monthly Installment (EMI), comprising of interest and principal/capital invested proportionately. That means your interest income continues to flow in monthly and at the same time a part of your original investment also comes back. As opposed to this, with a Fixed Deposit your principal will be returned via a bullet repayment at the end of the tenure of investment. This method is largely followed by banks for fixed deposits and other savings instruments offered by them.\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"panel panel-default\">\r" +
    "\n" +
    "                        <div class=\"panel-heading\">\r" +
    "\n" +
    "                            <h4 class=\"panel-title\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#collapse13\"><span class=\"faq-text\">What will happen if the borrower chooses to prepay his loan?\r" +
    "\n" +
    "</span><span class=\"pull-right\"><i class=\"glyphicon glyphicon-plus\"></i></span></a></h4></div>\r" +
    "\n" +
    "                        <div id=\"collapse13\" class=\"panel-collapse collapse\">\r" +
    "\n" +
    "                            <div class=\"panel-body\">Currently we allow pre payments in full by the borrower, and do not charge any prepayment fees. As a Lender you have the opportunity to reinvest that money with another borrower to ensure continuous interest income.\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"panel panel-default\">\r" +
    "\n" +
    "                        <div class=\"panel-heading\">\r" +
    "\n" +
    "                            <h4 class=\"panel-title\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#collapse14\"><span class=\"faq-text\">Can I select my monthly repayment date?\r" +
    "\n" +
    "</span><span class=\"pull-right\"><i class=\"glyphicon glyphicon-plus\"></i></span></a></h4></div>\r" +
    "\n" +
    "                        <div id=\"collapse14\" class=\"panel-collapse collapse\">\r" +
    "\n" +
    "                            <div class=\"panel-body\">No, the repayment date is fixed as the 5th of every month. If the disbursement happens post the 20th of a month, we start your repayment from the subsequent month. We hope to offer more flexibility in future.\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"panel panel-default\">\r" +
    "\n" +
    "                        <div class=\"panel-heading\">\r" +
    "\n" +
    "                            <h4 class=\"panel-title\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#collapse15\"><span class=\"faq-text\">How will I be informed when my loan transaction is made?\r" +
    "\n" +
    "</span><span class=\"pull-right\"><i class=\"glyphicon glyphicon-plus\"></i></span></a></h4></div>\r" +
    "\n" +
    "                        <div id=\"collapse15\" class=\"panel-collapse collapse\">\r" +
    "\n" +
    "                            <div class=\"panel-body\">You will receive an SMS confirmation from Loan Singh once the money is credited in the borrowers account.\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"panel panel-default\">\r" +
    "\n" +
    "                        <div class=\"panel-heading\">\r" +
    "\n" +
    "                            <h4 class=\"panel-title\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#collapse16\"><span class=\"faq-text\">What will be the investment process? (To be implemented with new lenders website on July 31, 2016)\r" +
    "\n" +
    "</span><span class=\"pull-right\"><i class=\"glyphicon glyphicon-plus\"></i></span></a></h4></div>\r" +
    "\n" +
    "                        <div id=\"collapse16\" class=\"panel-collapse collapse\">\r" +
    "\n" +
    "                            <div class=\"panel-body\">The investing process is simple and explained below: 1. Complete the 3 step sign up process with the help of a Loan Singh Associate 2. Log on to the Loan Singh website 3. Select your borrower from the Lender Dashboard 4. Disburse money in to designated account 5. Borrower is given your bank details for money transfer to ensure you receive EMIs on the 5th of each month\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"panel panel-default\">\r" +
    "\n" +
    "                        <div class=\"panel-heading\">\r" +
    "\n" +
    "                            <h4 class=\"panel-title\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#collapse17\"><span class=\"faq-text\">Who can be a lender on Loan Singh?\r" +
    "\n" +
    "</span><span class=\"pull-right\"><i class=\"glyphicon glyphicon-plus\"></i></span></a></h4></div>\r" +
    "\n" +
    "                        <div id=\"collapse17\" class=\"panel-collapse collapse\">\r" +
    "\n" +
    "                            <div class=\"panel-body\">Any Indian citizen, 21 years or older, who has a valid PAN card and a savings/current bank account in India can become a lender on Loan Singh.\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"panel panel-default\">\r" +
    "\n" +
    "                        <div class=\"panel-heading\">\r" +
    "\n" +
    "                            <h4 class=\"panel-title\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#collapse18\"><span class=\"faq-text\">What types of borrowers are listed on the platform?\r" +
    "\n" +
    "</span><span class=\"pull-right\"><i class=\"glyphicon glyphicon-plus\"></i></span></a></h4></div>\r" +
    "\n" +
    "                        <div id=\"collapse18\" class=\"panel-collapse collapse\">\r" +
    "\n" +
    "                            <div class=\"panel-body\">The borrowers listed are 1. Indian citizens 2. Salaried individuals 3. Hold a valid PAN card\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"panel panel-default\">\r" +
    "\n" +
    "                        <div class=\"panel-heading\">\r" +
    "\n" +
    "                            <h4 class=\"panel-title\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#collapse19\"><span class=\"faq-text\">What happens if the installment payment is delayed or defaulted?\r" +
    "\n" +
    "</span><span class=\"pull-right\"><i class=\"glyphicon glyphicon-plus\"></i></span></a></h4></div>\r" +
    "\n" +
    "                        <div id=\"collapse19\" class=\"panel-collapse collapse\">\r" +
    "\n" +
    "                            <div class=\"panel-body\">Loan Singh charges overdue interest of 6% p.a over and above the existing rate of interest on the total outstanding, for the period of delayed payment. The overdue interest will also be credited to the account of the lender.\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"panel panel-default\">\r" +
    "\n" +
    "                        <div class=\"panel-heading\">\r" +
    "\n" +
    "                            <h4 class=\"panel-title\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#collapse20\"><span class=\"faq-text\">How can the lender communicate with borrower about the loan?\r" +
    "\n" +
    "</span><span class=\"pull-right\"><i class=\"glyphicon glyphicon-plus\"></i></span></a></h4></div>\r" +
    "\n" +
    "                        <div id=\"collapse20\" class=\"panel-collapse collapse\">\r" +
    "\n" +
    "                            <div class=\"panel-body\">Once you have selected an eligible borrower, you can request additional details from Loan Singh using the relevant Borrower ID. We will be happy to provide you with the required information.\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"panel panel-default\">\r" +
    "\n" +
    "                        <div class=\"panel-heading\">\r" +
    "\n" +
    "                            <h4 class=\"panel-title\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#collapse21\"><span class=\"faq-text\">How secure is my information?\r" +
    "\n" +
    "</span><span class=\"pull-right\"><i class=\"glyphicon glyphicon-plus\"></i></span></a></h4></div>\r" +
    "\n" +
    "                        <div id=\"collapse21\" class=\"panel-collapse collapse\">\r" +
    "\n" +
    "                            <div class=\"panel-body\">For us, data security is of utmost priority. ALL of your data is kept strictly confidential and not shared with anyone without your consent.\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"panel panel-default\">\r" +
    "\n" +
    "                        <div class=\"panel-heading\">\r" +
    "\n" +
    "                            <h4 class=\"panel-title\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#collapse22\"><span class=\"faq-text\">Why do I have to give my bank account details?\r" +
    "\n" +
    "</span><span class=\"pull-right\"><i class=\"glyphicon glyphicon-plus\"></i></span></a></h4></div>\r" +
    "\n" +
    "                        <div id=\"collapse22\" class=\"panel-collapse collapse\">\r" +
    "\n" +
    "                            <div class=\"panel-body\">Once you have disbursed the loan amount, Loan Singh needs your bank account details to have the monthly EMIs credited to the same.\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"panel panel-default\">\r" +
    "\n" +
    "                        <div class=\"panel-heading\">\r" +
    "\n" +
    "                            <h4 class=\"panel-title\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#collapse23\"><span class=\"faq-text\">What are the documents required for lender registration?\r" +
    "\n" +
    "</span><span class=\"pull-right\"><i class=\"glyphicon glyphicon-plus\"></i></span></a></h4></div>\r" +
    "\n" +
    "                        <div id=\"collapse23\" class=\"panel-collapse collapse\">\r" +
    "\n" +
    "                            <div class=\"panel-body\">We need your 1. Pan Card 2. Valid Address Proof (Driving License or Passport or Aadhaar Card or Voter ID)\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"panel panel-default\">\r" +
    "\n" +
    "                        <div class=\"panel-heading\">\r" +
    "\n" +
    "                            <h4 class=\"panel-title\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#collapse24\"><span class=\"faq-text\">Why was my registration request declined?\r" +
    "\n" +
    "</span><span class=\"pull-right\"><i class=\"glyphicon glyphicon-plus\"></i></span></a></h4></div>\r" +
    "\n" +
    "                        <div id=\"collapse24\" class=\"panel-collapse collapse\">\r" +
    "\n" +
    "                            <div class=\"panel-body\">Your registration request may have been declined due to error in data or lack of documentary proof. Please contact our customer service team at +91 83903 58545 for more details.\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"panel panel-default\">\r" +
    "\n" +
    "                        <div class=\"panel-heading\">\r" +
    "\n" +
    "                            <h4 class=\"panel-title\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#collapse25\"><span class=\"faq-text\">How can I delete my account on Loan Singh?\r" +
    "\n" +
    "</span><span class=\"pull-right\"><i class=\"glyphicon glyphicon-plus\"></i></span></a></h4></div>\r" +
    "\n" +
    "                        <div id=\"collapse25\" class=\"panel-collapse collapse\">\r" +
    "\n" +
    "                            <div class=\"panel-body\">We would be sorry to see you leave. Please connect with our customer support team at +91 83903 58545 or LS@loansingh.com so we can assist with your request.\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"panel panel-default\">\r" +
    "\n" +
    "                        <div class=\"panel-heading\">\r" +
    "\n" +
    "                            <h4 class=\"panel-title\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#collapse26\"><span class=\"faq-text\">Can I lend more than once?\r" +
    "\n" +
    "</span><span class=\"pull-right\"><i class=\"glyphicon glyphicon-plus\"></i></span></a></h4></div>\r" +
    "\n" +
    "                        <div id=\"collapse26\" class=\"panel-collapse collapse\">\r" +
    "\n" +
    "                            <div class=\"panel-body\">Yes, absolutely. You can lend to as many individuals as you like, depending on your investment appetite.\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"panel panel-default\">\r" +
    "\n" +
    "                        <div class=\"panel-heading\">\r" +
    "\n" +
    "                            <h4 class=\"panel-title\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#collapse27\"><span class=\"faq-text\">Is my interest income through Loan Singh taxable?\r" +
    "\n" +
    "</span><span class=\"pull-right\"><i class=\"glyphicon glyphicon-plus\"></i></span></a></h4></div>\r" +
    "\n" +
    "                        <div id=\"collapse27\" class=\"panel-collapse collapse\">\r" +
    "\n" +
    "                            <div class=\"panel-body\">All repayments you receive from borrowers on Loan Singh are without any tax deduction. Your earnings will be taxable as per the income tax rules applicable to you. We'll provide you an annual income statement on the Lender Dashboard for your convenience.\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"panel panel-default\">\r" +
    "\n" +
    "                        <div class=\"panel-heading\">\r" +
    "\n" +
    "                            <h4 class=\"panel-title\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#collapse28\"><span class=\"faq-text\">How long does it take to find Borrowers?\r" +
    "\n" +
    "</span><span class=\"pull-right\"><i class=\"glyphicon glyphicon-plus\"></i></span></a></h4></div>\r" +
    "\n" +
    "                        <div id=\"collapse28\" class=\"panel-collapse collapse\">\r" +
    "\n" +
    "                            <div class=\"panel-body\">New borrowers are verified and listed every day. Since Loan Singh is a live marketplace, you might find a borrower matching your preferences right away, or you may need to wait for a few days.\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"panel panel-default\">\r" +
    "\n" +
    "                        <div class=\"panel-heading\">\r" +
    "\n" +
    "                            <h4 class=\"panel-title\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#collapse29\"><span class=\"faq-text\">Can I be both, an Investor and a Borrower?\r" +
    "\n" +
    "</span><span class=\"pull-right\"><i class=\"glyphicon glyphicon-plus\"></i></span></a></h4></div>\r" +
    "\n" +
    "                        <div id=\"collapse29\" class=\"panel-collapse collapse\">\r" +
    "\n" +
    "                            <div class=\"panel-body\">Sorry, you can be either an Investor or a Borrower. </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </section>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </article>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('app/components/how-it-works.html',
    "<div class=\"app-section fade-in-up ng-enter ng-enter-active\">\r" +
    "\n" +
    "    <article class=\"app-content\">\r" +
    "\n" +
    "        <div class=\"app-content-inner__child clearfix\">\r" +
    "\n" +
    "            <section class=\"container static-container how-it-works-section\">\r" +
    "\n" +
    "               <!--  <h1 class=\"text-center\">How it works</h1> -->\r" +
    "\n" +
    "                \r" +
    "\n" +
    "                <div class=\"content-pane\">\r" +
    "\n" +
    "                	<img src=\"../img/quick-sign-up-small.png\" alt=\"quick-sign-up-small\" class=\"pull-left image-icon-left\" />\r" +
    "\n" +
    "                	<div class=\"bec desc\">\r" +
    "\n" +
    "                		<h3><span>1</span> Quick Sign up</h3>\r" +
    "\n" +
    "                		<p>Sign up in a jiffy to access borrower profiles. You should be done signing up in less than a minute! </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <button ng-if=\"!$hCtrl.parentCtrl.loggedIn\" type=\"button\" class=\"btn btn-default\" ng-click=\"$hCtrl.showSignUpModal();\">Sign Up</button>\r" +
    "\n" +
    "                	</div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div class=\"content-pane\">\r" +
    "\n" +
    "                	<img src=\"../img/verify-option-small.png\" alt=\"verify-option-small\" class=\"pull-right image-icon-right\" />\r" +
    "\n" +
    "                	<div class=\"bec-TEMP desc\">\r" +
    "\n" +
    "                		<h3><span>2</span> Verified investment options</h3>\r" +
    "\n" +
    "                		<p>Browse through profiles based on your investment preferences. Go for our recommendations, or pick profiles individually to your liking. <a href=\"javascript:void(0)\" class=\"arrow-link down-arrow jsHowItWorksArrowLink\" ng-click=\"$hCtrl.toggleContent($event)\">Show More</a></p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                		<div class=\"row toggle-content-view fade-in-up ng-enter jsToggleContentView\" ng-show=\"$hCtrl.toggleContentView\">\r" +
    "\n" +
    "                			<div class=\"cols-xs-12 col-md-6\">\r" +
    "\n" +
    "	                			<ul class=\"bullet-points\">\r" +
    "\n" +
    "	                				<li><i class=\"fa fa-circle-o\" aria-hidden=\"true\"></i><i class=\"fa fa-check\" aria-hidden=\"true\"></i> <span>Machine learning algorithm</span></li>\r" +
    "\n" +
    "	                				<li><i class=\"fa fa-circle-o\" aria-hidden=\"true\"></i><i class=\"fa fa-check\" aria-hidden=\"true\"></i> <span>Borrower verification and approval</span></li>\r" +
    "\n" +
    "	                				<li><i class=\"fa fa-circle-o\" aria-hidden=\"true\"></i><i class=\"fa fa-check\" aria-hidden=\"true\"></i> <span>Risk assessment and grading</span></li>\r" +
    "\n" +
    "	                				<li><i class=\"fa fa-circle-o\" aria-hidden=\"true\"></i><i class=\"fa fa-check\" aria-hidden=\"true\"></i> <span>Security documents</span></li>\r" +
    "\n" +
    "	                				<!-- <li><i class=\"fa fa-circle-o\" aria-hidden=\"true\"></i><i class=\"fa fa-check\" aria-hidden=\"true\"></i> <span>Listed for funding</span></li> -->\r" +
    "\n" +
    "	                			</ul>\r" +
    "\n" +
    "	                		</div>\r" +
    "\n" +
    "                			<div class=\"cols-xs-12 col-md-6\"><img src=\"../img/verify-machine.png\" alt=\"verify-machine\" class=\"pull-right\" /></div>\r" +
    "\n" +
    "                		</div>\r" +
    "\n" +
    "                	</div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div class=\"content-pane\">\r" +
    "\n" +
    "                	<img src=\"../img/easy-disbursal-small.png\" alt=\"easy-disbursal-small\" class=\"pull-left image-icon-left\" />\r" +
    "\n" +
    "                	<div class=\"bec desc\">\r" +
    "\n" +
    "                		<h3><span>3</span> Easy disbursal</h3>\r" +
    "\n" +
    "                		<p>Review repayment schedules and security documents, or ask us any questions directly. Post review, proceed with disbursement</p>\r" +
    "\n" +
    "                	</div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div class=\"content-pane\">\r" +
    "\n" +
    "                	<img src=\"../img/enjoy-returns-small.png\" alt=\"enjoy-returns-small\" class=\"pull-right image-icon-right\" />\r" +
    "\n" +
    "                	<div class=\"bec desc\">\r" +
    "\n" +
    "                		<h3><span>4</span> Enjoy returns</h3>\r" +
    "\n" +
    "                		<p>Enjoy monthly returns! Use our innovative dashboard to monitor your investments. For any queries reach out to us at <a href=\"mailto:LS@loansingh.com\">LS@loansingh.com</a></p>\r" +
    "\n" +
    "                		\r" +
    "\n" +
    "                	</div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </section>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </article>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('app/components/pool_component/portfolio-pool.html',
    "<div class=\"pool-container\">\r" +
    "\n" +
    "    <h3>My Pool <i class=\"fa\" ng-hide=\"poolCtrl.collapsible=='false'\" ng-class=\"{'fa-chevron-up' : poolCtrl.showRiskData, 'fa-chevron-down' : !poolCtrl.showRiskData}\" aria-hidden=\"true\" ng-click=\"poolCtrl.showRiskData=!poolCtrl.showRiskData\"></i></h3>\r" +
    "\n" +
    "    <div class=\"col-md-12 toggle-risk-data animate-hide\" ng-hide=\"!poolCtrl.showRiskData\">\r" +
    "\n" +
    "        <div class=\"ib-riskmeter col-md-5\">\r" +
    "\n" +
    "            <risk-meter risk=\"poolCtrl.riskFactor\"></risk-meter>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-md-7\">\r" +
    "\n" +
    "            <h5>Total Amount to invest</h5>\r" +
    "\n" +
    "            <div class=\"ib-amountbox\">\r" +
    "\n" +
    "                <i class=\"fa fa-inr\" aria-hidden=\"true\"></i>\r" +
    "\n" +
    "                <p>{{poolCtrl.userpref.amounttoinvest|awnum:'price'}}</p>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <p>Risk: <span class=\"ib-risk\">{{poolCtrl.userpref.rateRisk}}</span></p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <p class=\"invest-text\"><span>I will invest on</span></p>\r" +
    "\n" +
    "    <div class=\"borrower\" ng-class=\"{'fill-height' : !poolCtrl.showRiskData}\">\r" +
    "\n" +
    "        <div class=\"borrower-container\" ng-repeat=\"brwr in poolCtrl.createdpool\">\r" +
    "\n" +
    "            <p><i class=\"fa fa-user\" aria-hidden=\"true\"></i>{{brwr.name}}</p>\r" +
    "\n" +
    "            <a class=\"jsPoolDropdownTrigger flyout-menu\" data-target=\"dropdown-menu-item{{$index+1}}\" ng-hide=\"poolCtrl.collapsible=='false'\"><i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\"></i></a>\r" +
    "\n" +
    "            <div class=\"details\">\r" +
    "\n" +
    "                <p><span><i class=\"fa fa-inr\" aria-hidden=\"true\"></i> {{brwr.selected_amount}}</span>\r" +
    "\n" +
    "                    <span><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> {{brwr.tenure}}Months</span>\r" +
    "\n" +
    "                    <span><i class=\"fa fa-percent\" aria-hidden=\"true\">%</i> {{brwr.rate_of_interest}}%</span></p>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"dropdown-container\" ng-hide=\"poolCtrl.collapsible=='false'\">\r" +
    "\n" +
    "        <ul class=\"dropdown-menu jsDropDownMenu\" ng-repeat=\"brwr in poolCtrl.createdpool\" id=\"dropdown-menu-item{{$index+1}}\">\r" +
    "\n" +
    "            <!--  <li><a href><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i> View Profile</a></li>\r" +
    "\n" +
    "            <li class=\"divider\"></li> -->\r" +
    "\n" +
    "            <li ng-click=\"poolCtrl.changePoolAmount(brwr)\"><a href><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i> Change Amount</a></li>\r" +
    "\n" +
    "            <li class=\"divider\"></li>\r" +
    "\n" +
    "            <li ng-click=\"poolCtrl.deleteFromPool(brwr)\"><a href><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i> Delete</li>\r" +
    "\n" +
    "        </ul>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <button type=\"button\" class=\"btn btn-primary\" ng-click=\"poolCtrl.investnow()\" ng-hide=\"poolCtrl.createdpool.length==0\">INVEST NOW</button>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('app/components/privacy-policy.html',
    "<div class=\"app-section fade-in-up ng-enter ng-enter-active\">\r" +
    "\n" +
    "    <article class=\"app-content\">\r" +
    "\n" +
    "        <div class=\"app-content-inner__child clearfix\">\r" +
    "\n" +
    "            <section class=\"container static-container privacy-section\">\r" +
    "\n" +
    "                <h1 class=\"text-center\">PRIVACY POLICY</h1>\r" +
    "\n" +
    "                <div class=\"privacy_policy\">\r" +
    "\n" +
    "                    <p>SEYNSE TECHNOLOGIES PVT LTD (\"Company\") is concerned about the privacy of its users (hereinafter referred to as \"You\" \"Your\" \"Yourself\") accessing its website located at (\"Website\") and has provided this Privacy Policy (\"Policy\") to familiarize You with the manner in which Company collects, uses and discloses Your information collected through the Website.</p>\r" +
    "\n" +
    "                    <p>\"At Company, we value the trust placed in us by users who give us their personal data. Data security is one of our highest priorities and we aim to be as clear as possible about what we do with personal data and why we do it.\"</p>\r" +
    "\n" +
    "                    <p>BY USING THE WEBSITE, YOU AGREE TO THE TERMS AND CONDITIONS OF THIS POLICY. IF YOU DO NOT AGREE WITH THE TERMS AND CONDITIONS OF THIS POLICY, PLEASE DO NOT PROCEED FURTHER TO USE THIS WEBSITE.</p>\r" +
    "\n" +
    "                    <h4>1. Information and Usage</h4>\r" +
    "\n" +
    "                    <p>This Privacy Policy explains how Company collects personal and non-personal information, classified as mandatory or voluntary and uses, discloses and protects such information through the Website. 'Personal Information' is data that can be used to uniquely identify or contact a single person (\"Personal Information\"). Personal Information for the purposes of this Policy shall include, but not limited to, information regarding Your name, address, telephone number, date of birth, gender, e-mail address, etc.</p>\r" +
    "\n" +
    "                    <p>You may need to provide Company Your Personal Information during the course of some services of Company, for instance, creating a User ID, provide information in Your account.</p>\r" +
    "\n" +
    "                    <p>Company collects only such Personal Information that Company believes to be relevant and is required for the transaction. Company collects Your Personal Information in order to record, support and facilitate Your participation in the activities You select, track Your preferences, to provide You with a customized Website experience, to notify You of any updated information and new activities and other related functions offered by Company, keep You informed about latest content available on the Website, special offers, and other products and services of Company, to assist You with customer service or technical support issues, to follow up with You after Your visit, to otherwise support Your relationship with Company or to prevent fraud and unlawful use.</p>\r" +
    "\n" +
    "                    <p>In an effort to make our Website effective, certain information may be collected each time you visit the Website. Such information may be stored in server logs. These encrypted statistics do not identify you personally, but provide us the information regarding your visit to the Website and the type of user who is accessing our Website and certain browsing activities by You. This data may include: IP address of Your server from where the Website is being accessed, the type of browser (Internet Explorer, Firefox, Opera, Google Chrome etc.), the operating system of Your system and the Website You last visited before visiting to our Website. The duration of Your stay on our Website is also stored in the session along with the date and time of your access. These data are used by Company to understand the use and number of user visiting the Website. Some of the information related to the Website and Your visit to the Website may be shared by the sponsors, investors, advertisers, developer, strategic business partners of Company and some associates in order to enhance and grow our business and the Website but we assure that these information will never include any of Your Personal Information. This anonymous information is collected through the use of a pixel tag, which is industry standard technology used by most major Websites.</p>\r" +
    "\n" +
    "                    <p>When You use the Website, Company's servers (which may be hosted by a third party service provider) may collect information indirectly and automatically about Your activities on the Website; for instance by way of cookies. A cookie is a small amount of data that is sent to a user's browser from a web server and is eventually stored on a user's computer hard drive. This anonymous information is maintained distinctly and is not linked to the Personal Information You submit to Company.</p>\r" +
    "\n" +
    "                    <p>Whether You want Your web browser to accept cookies or not is up to You. If You haven't changed Your computer's settings, most likely Your browser already accepts cookies. If You choose to decline cookies, You may not be able to fully experience all features of the Website. You can also delete Your browser cookies or disable them entirely, but this may significantly impact Your experience with the Website and may make parts of the Website non-functional or inaccessible. We recommend that You leave them turned on.</p>\r" +
    "\n" +
    "                    <p>We use third-party service providers to serve ads on our behalf across the internet and sometimes on this Website. They may collect anonymous information about Your visits to our Website, and Your interaction with our products and services. No personally identifiable information is collected or used in this process. They do not know the name, phone number, address, email address, or any personally identifying information about the user.</p>\r" +
    "\n" +
    "                    <p>Company also uses the log file like other website servers which is the standard measures. They include internet protocol (IP) addresses, browser type, internet service provider (ISP), referring/exit pages, platform type, date/time stamp, and number of clicks. We use them to analyse trends, administer the site, track a user's movement and gather broad demographic information for aggregate use. IP addresses, etc. are not linked to personally identifiable information.</p>\r" +
    "\n" +
    "                    <p>You acknowledge that apart from Your Personal Information, if You upload any content on the Website, such content may contain information including Personal Information and the same may be available to the other users of the Website. Company will not be liable for the disclosure and dissemination of such Personal Information to third parties.</p>\r" +
    "\n" +
    "                    <p>Company may disclose aggregated information about the use of the Website, but it will never contain Personal Information. Company does not disclose Personal Information to third parties in the normal course of operations. However, in situations when Company is legally obligated to disclose information to the government or other third parties, Company will do so.</p>\r" +
    "\n" +
    "                    <p>Company implements standard measures to protect against unauthorized access to and unlawful interception of Personal Information. However, no internet site can fully eliminate security risks.</p>\r" +
    "\n" +
    "                    <h4>2. Shared Personal Information</h4>\r" +
    "\n" +
    "                    <p>You are required to submit Your information at the time of making an online purchase of products on the Website. Company may use an online payment gateway that is operated by a third party and the information that You share with Company is transferred and shared with such third party payment gateway operator. The said operator may also have access to Your online purchase history/details that You make from the Website.</p>\r" +
    "\n" +
    "                    <p>Extremely sensitive information like Your credit-card details are transacted upon secure sites of approved payment gateways which are digitally under encryption, thereby providing the highest possible degree of care as per current technology. You are advised, however, that internet technology is not 100% safe and You should exercise discretion on using the same.</p>\r" +
    "\n" +
    "                    <h4>3. Links to Third Party Websites</h4>\r" +
    "\n" +
    "                    <p>The Website provides third-party advertisements and links to other websites. Company does not provide any Personal Information to these third-party websites or advertisers.</p>\r" +
    "\n" +
    "                    <p>Company will contain links to other websites (\"Linked Site\") on the Website which are operated by third parties and are not controlled by, or affiliated to, or associated with, Company unless expressly specified on the Website. Company is not responsible for any form of transmission, whatsoever, received by You from any Linked Site. Accordingly, Company does not make any representations concerning the privacy practices or policies of such third parties or terms of use of such websites, nor does Company control or guarantee the accuracy, integrity, or quality of the information, data, text, software, music, sound, photographs, graphics, videos, messages or other materials available on such websites. The inclusion or exclusion does not imply any endorsement by Company of the website, the website's provider, or the information on the website. The information provided by You to such third party websites shall be governed in accordance with the privacy policies of such websites and it is recommended that You review the privacy policy on any such websites prior to using such websites.</p>\r" +
    "\n" +
    "                    <p>These third-party websites and advertisers may use technology to send the advertisements that appear on the Website directly to Your browser. In such cases, the third party websites or advertisers automatically receive Your IP address. They may also use cookies, JavaScript, web beacons and other technologies to measure the effectiveness of their advertisements and to personalize advertising content. Company does not have access to or control over cookies or other features that such third party websites and advertisers may use, and the information practices of these third-party websites and advertisers are not covered by this Policy. Please contact them directly for more information about their privacy practices.</p>\r" +
    "\n" +
    "                    <h4>4. Security</h4>\r" +
    "\n" +
    "                    <p>At Company, information security is very important and we have taken many steps to make sure Your transaction experience with us is secure. Information about You will be kept safe and secure. In order to prevent unauthorised access or disclosure of Your information, we have put in place suitable physical, electronic and managerial procedures to protect and secure information that is collected online.</p>\r" +
    "\n" +
    "                    <p>Keeping your information secure - to help us keep Your information confidential You should:</p>\r" +
    "\n" +
    "                    <ul>\r" +
    "\n" +
    "                        <li>Keep Your password secret.</li>\r" +
    "\n" +
    "                        <li>Never distribute the website addresses for pages that You have looked at while logged in as a registered customer.</li>\r" +
    "\n" +
    "                    </ul>\r" +
    "\n" +
    "                    <p>Password – You should choose a password that is not obvious or known to anyone else. You should never give a third party Your password, as You will be responsible for all activity and charges incurred through use of Your password whether authorised by You or not.</p>\r" +
    "\n" +
    "                    <p>If You forget your password, You can request a new password, which will be emailed to the address we hold for You. You can change your password anytime through the account facilities on the Website. Should we think that there is likely to be, or has been any breach of security, we may change Your password and notify You of the change by email.</p>\r" +
    "\n" +
    "                    <p>Company is not responsible for any breach of security or for any actions of any third parties that receive Your Personal Information. The Website also linked to many other sites and we are not/shall be not responsible for their privacy policies or practices as it is beyond our control.</p>\r" +
    "\n" +
    "                    <p>Notwithstanding anything contained in this Policy or elsewhere, Company shall not be held responsible for any loss, damage or misuse of Your Personal Information, if such loss, damage or misuse is attributable to a Force Majeure Event (as defined below).</p>\r" +
    "\n" +
    "                    <p>A \"Force Majeure Event\" shall mean any event that is beyond the reasonable control of Company and shall include, without limitation, sabotage, fire, flood, explosion, acts of God, civil commotion, strikes or industrial action of any kind, riots, insurrection, war, acts of government, computer hacking, unauthorised access to computer data and storage device, computer crashes, breach of security and encryption, etc.</p>\r" +
    "\n" +
    "                    <h4>5. Disclosure</h4>\r" +
    "\n" +
    "                    <p>Company will use information only in accordance with the Policy under which the information was collected unless we have received explicit authorization.</p>\r" +
    "\n" +
    "                    <p>Company may disclose any information Company may have about You (including Your identity) if Company determines that such disclosure is necessary in connection with any investigation or complaint regarding Your use of the Website, or to identify, contact or bring legal action against someone who may be causing injury to or interference with (either intentionally or unintentionally) Company's rights or property, or the rights or property of users of the Website, including Company 's customers. Company reserves the right at all times to disclose any information that Company deems necessary to comply with any applicable law, regulation, legal process or governmental request. Company also may disclose Your information when Company determines that applicable law requires or permits such disclosure, including exchanging information with other companies and organizations for fraud protection purposes.</p>\r" +
    "\n" +
    "                    <p>You acknowledge and agree that Company may preserve any communication by You with Company through the Website or any Service, and may also disclose such data if required to do so by law or if Company determines that such preservation or disclosure is reasonably necessary to: (1) comply with legal process; (2) enforce this Policy; (3) respond to claims that any such data violates the rights of others; or (4) protect the rights, property or personal safety of Company, its employees, users of, or visitors to, the Website, and the public.</p>\r" +
    "\n" +
    "                    <h4>6. User Discretion</h4>\r" +
    "\n" +
    "                    <p>You can always choose not to provide information and in such cases, if the information required is classified as mandatory, You will not be able to avail of that part of the Services, features or content.</p>\r" +
    "\n" +
    "                    <p>You can add or update Your Personal Information on a regular basis. When You update information, Company will keep a copy of the prior version for its records.</p>\r" +
    "\n" +
    "                    <p>Company may, if You so choose, send direct advertisement mailers to You at the address given by You. You have the option to opt-out of this direct mailer by clicking at the unsubscribed link option attached to e-mail. Company respects Your privacy and if You do not want to receive e-mail or other communications from Company, please report to Company at hello@loansingh.com.</p>\r" +
    "\n" +
    "                    <p>If You do not want Company to use Personal Information that Company to You, please report to Company at hello@loansingh.com.</p>\r" +
    "\n" +
    "                    <p>The 'Help' portion of the toolbar on most browsers will tell You how to prevent Your browser from accepting new cookies, how to have the browser notify You when You receive a new cookie, or how to disable cookies altogether. Further, You can also disable or delete similar data used by browser add-ons, such as Flash cookies, by changing the add-on's settings or visiting the Website of its manufacturer. However, as cookies allow You to take advantage of some of the Website's features, some of the Website's features and services may not function properly if Your cookies are disabled. It is therefore, recommended that You leave the cookies turned on.</p>\r" +
    "\n" +
    "                    <p>7. Except as otherwise expressly stated with respect to our products and services, all contents of the Website are offered on an \"as is\" basis without any warranty whatsoever either express or implied. Company makes no representations, express or implied, including without limitation implied warranties of merchantability and fitness for a particular purpose.</p>\r" +
    "\n" +
    "                    <p>Company does not guarantee the functions contained in the Website will be uninterrupted or error-free, that this site or its server will be free of viruses or other harmful components, or defects will be corrected even if Company is aware of them.</p>\r" +
    "\n" +
    "                    <h4>8. Copyright and Trademark</h4>\r" +
    "\n" +
    "                    <p>Unless otherwise noted, all materials on this site are protected as the copyrights, trade dress, trademarks and/ or other intellectual properties owned by Company or by other parties that have licensed their material to Company.</p>\r" +
    "\n" +
    "                    <p>All rights not expressly granted are reserved.</p>\r" +
    "\n" +
    "                    <h4>9. Personal Use</h4>\r" +
    "\n" +
    "                    <p>Your use of the materials included on this site is for informational and transaction purposes only. You agree you will not distribute, publish, transmit, modify, display or create derivative works from or exploit the contents of this site in any way. You acknowledge the unauthorized use of the contents could cause irreparable harm to Company and that in the event of an unauthorized use, Company shall be entitled to an injunction in addition to any other remedies available at law or in equity.</p>\r" +
    "\n" +
    "                    <h4>10. Feedback and Submissions</h4>\r" +
    "\n" +
    "                    <p>You agree you are and shall remain solely responsible for the contents of any submissions you make, and you will not submit material that is unlawful, defamatory, abusive or obscene. You agree that you will not submit anything to the site that will violate any right of any third party, including copyright, trademark, privacy or other personal or proprietary right(s).</p>\r" +
    "\n" +
    "                    <p>While we appreciate your interest in Company, we do not want and cannot accept any ideas you consider to be proprietary regarding designs, product technology or other suggestions you may have developed. Consequently, any material you submit to this site will be deemed a grant of a royalty free non-exclusive right and license to use, reproduce, modify, display, transmit, adapt, publish, translate, create derivative works from and distribute these materials throughout the universe in any medium and through any methods of distribution, transmission and display whether now known or hereafter devised. In addition, you warrant that all so-called \"moral rights\" have been waived</p>\r" +
    "\n" +
    "                    <h4>11. General Provisions</h4>\r" +
    "\n" +
    "                    <p>By accessing the Website, You have agreed to the terms set out in this Policy. This Policy should be at all times read along with the Terms of Use of the Website.</p>\r" +
    "\n" +
    "                    <p>Unless stated otherwise, the Policy applies to all information that Company has about You and Your account.</p>\r" +
    "\n" +
    "                    <p>By using this Website and the products, content and services provided on the Website, You agree and acknowledge that Your Personal Information collected through the Website may be transferred across national boundaries and stored and processed in any country around the world. You also acknowledge that in certain countries or with respect to certain activities, the collection, transfer, storage, and processing of Your information may be undertaken by trusted third party vendors or agents of Company such as credit card processors, web hosting providers, communication services, and web analytic providers, to help facilitate Company in providing certain functions.</p>\r" +
    "\n" +
    "                    <p>Company may make changes to this Policy, from time to time at Company's sole discretion or on account of changes in law. Company will not reduce Your rights under this Policy without Your explicit consent. Company may e-mail periodic reminders of the notices and conditions, unless You have instructed Company not to, but You should check the Website frequently to see recent changes. Notwithstanding the above, Company shall not be required to notify You of any changes made to the Policy. The revised Policy shall be made available on the Website. Your continued use of the Website, following changes to the Policy, will constitute Your acceptance of those changes.</p>\r" +
    "\n" +
    "                    <p>If You choose to visit the Website, Your visit and any dispute over privacy is subject to this Policy and the Website's Terms of Use. In addition to the foregoing, any disputes arising under this Policy shall be governed by the laws of India.</p>\r" +
    "\n" +
    "                    <h4>12. Grievance Officer</h4>\r" +
    "\n" +
    "                    <p>In accordance with Information Technology Act 2000 and rules made there under, the name and contact details of the Grievance Officer who can be contacted with respect to any complaints or concerns including those pertaining to breach of Company’s Terms of Use, Term of Offer For Sale and other polices or questions are published as under:</p>\r" +
    "\n" +
    "                    <p>Grievance Officer Name: Siddharth Mishra\r" +
    "\n" +
    "                        <br/> email address: grievance.officer@loansingh.com\r" +
    "\n" +
    "                        <br/> [10:00 AM to 6:30 PM from Monday to Friday except Public Holidays]</p>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </section>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </article>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('app/components/tab_pane_component/pane.html',
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"tab-pane\" ng-show=\"paneCtrl.selected\" ng-transclude></div>\r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('app/components/tab_pane_component/tab.html',
    "<div class=\"tabbable\">\r" +
    "\n" +
    "  <ul class=\"nav nav-tabs\">\r" +
    "\n" +
    "    <li ng-repeat=\"pane in tabCtrl.panes\" ng-class=\"{active:pane.selected}\">\r" +
    "\n" +
    "      <a href=\"\" ng-click=\"tabCtrl.select(pane)\">{{pane.title}}</a>\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "  </ul>\r" +
    "\n" +
    "  <div class=\"tab-content\" ng-transclude></div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/components/terms-conditions.html',
    "<div class=\"app-section fade-in-up ng-enter ng-enter-active\">\r" +
    "\n" +
    "    <article class=\"app-content\">\r" +
    "\n" +
    "        <div class=\"app-content-inner__child clearfix\">\r" +
    "\n" +
    "            <section class=\"container static-container terms-conditions-section\">\r" +
    "\n" +
    "                <h1 class=\"text-center\">Terms and Conditions</h1>\r" +
    "\n" +
    "                <div class=\"clearfix\">\r" +
    "\n" +
    "                    <p>Please carefully review these terms and conditions of use before using this site or accessing any data thereon. Any use of this website creates a binding agreement to comply with these terms and conditions. If you do not agree to these terms without limitation or exclusions, you should exit this site immediately.</p>\r" +
    "\n" +
    "                    <h4>USER AGREEMENT</h4>\r" +
    "\n" +
    "                    <p>The following are terms of a legal agreement (the \"Agreement\") between you, individually and/or as an agent on behalf of an entity or another registered user (\"you\") and SEYNSE TECHNOLOGIES PVT LTD (\"Seynse\"). that sets forth the terms and conditions for your use of this web site (the \"Site\"). The Site is owned and operated by Seynse. This Site is being provided to you expressly subject to this Agreement. By accessing, browsing and/or using the Site, you acknowledge that you have read, understood, and agree to be bound by the terms of this Agreement and to comply with all applicable laws and regulations. The terms and conditions of this Agreement form an essential basis of the bargain between you and Seynse.</p>\r" +
    "\n" +
    "                    <p>By entering mobile number on www.LoanSingh.com while registering for an account user gives consent to Seynse and its partners / vendors and sub-partners / sub-vendors to send alerts, contact details, SMS and calls related to the business activities.</p>\r" +
    "\n" +
    "                    <p>Seynse reserves the right to amend this Agreement at any time and will notify you of any such changes by posting the revised Agreement on the Site. You should check this Agreement on the Site periodically for changes. All changes shall be effective upon posting. Your continued use of the Site after any change to this Agreement constitutes your agreement to be bound by any such changes. Seynse may terminate, suspend, change, or restrict access to all or any part of this Site without notice or liability.</p>\r" +
    "\n" +
    "                    <h4>LIMITATIONS OF USE</h4>\r" +
    "\n" +
    "                    <p>The copyright in all material on this Site, including without limitation the text, data, articles, design, source code, software, photos, images and other information (collectively the \"Content\"), is held by Seynse or by the original creator of the material and is protected by India and International copyright laws or treaties. You agree that the Content may not be copied, reproduced, distributed, republished, displayed, posted or transmitted in any form or by any means, including, but not limited to, electronic, mechanical, photocopying, recording, or otherwise, without the express prior written consent of Seynse. You acknowledge that the Content is and shall remain the property of Seynse. You may not modify, participate in the sale or transfer of, or create derivative works based on any Content, in whole or in part. The use of the Content on any other Site, including by linking or framing, or in any networked computer environment for any purpose, is prohibited without Seynse's prior written approval.</p>\r" +
    "\n" +
    "                    <p>All data obtained from or provided by Seynse, regardless of the method of delivery, is explicitly prohibited from publication and distribution and is subject to the Terms of Use. Moreover, you represent that all data provided by Seynse to a user, regardless of the method of delivery, is not used for any competing purposes and only used to permit investment using the products or services of Seynse.</p>\r" +
    "\n" +
    "                    <p>You also may not, without Seynse's express written permission, \"mirror\" any material contained on this Site on any other server. Any unauthorized use of any Content on this Site may violate copyright laws, trademark laws, the laws of privacy and publicity, and communications statutes and regulations.</p>\r" +
    "\n" +
    "                    <p>You agree to use the Content and Site only for lawful purposes. You are prohibited from any use of the Content or Site that would constitute a violation of any applicable law, regulation, rule or ordinance of any nationality, state, or locality or of any international law or treaty, or that could give rise to any civil or criminal liability. Any unauthorized use of the Site, including but not limited to unauthorized entry into Seynse's systems, misuse of passwords, or misuse of any information posted on the Site is strictly prohibited. Seynse makes no claims concerning whether the Content may be downloaded or is appropriate for use outside of India. If you access this Site from outside of India, you are solely responsible for ensuring compliance with the laws of your specific jurisdiction. Your eligibility for particular products or services is subject to final determination by Seynse.</p>\r" +
    "\n" +
    "                    <p>Members of the Seynse community must be India that are 18 years of age or older. Children under the age of 18 are not eligible to participate in the offerings on this website.</p>\r" +
    "\n" +
    "                    <h4>CONTENT AND USE RESTRICTIONS</h4>\r" +
    "\n" +
    "                    <p>You agree not to post, upload, publish, display, transmit, share, store or otherwise make or attempt to make publicly available on the Site or on any other website, or in any email, blog, forum, medium or other communication of any kind, any private or personally identifiable information of any Seynse member or other third party, including, without limitation, names, addresses, phone numbers, email addresses, driver's license numbers, or bank account or credit card numbers, whether or not such private or personally identifiable information is displayed on or ascertainable from the Site, or obtained or obtainable from sources unrelated to the Site (such as from a \"Google® search\" or other online research).</p>\r" +
    "\n" +
    "                    <p>You agree not to use the Site or any Content to upload, post, email, transmit or otherwise make available any unsolicited or unauthorized advertising, promotional materials, \"junk mail,\" \"spam,\" \"chain letters,\" \"pyramid schemes,\" or any other form of commercial or non-commercial solicitation or bulk communications of any kind to any Seynse member or other third party.</p>\r" +
    "\n" +
    "                    <h4>TRADEMARKS</h4>\r" +
    "\n" +
    "                    <p>Seynse (including the Seynse logo), Seynse.com, and all related logos (collectively the \" Seynse trademarks\") are trademarks or service marks of Seynse. Other company, product, and service names and logos used and displayed on this Site may be trademarks or service marks owned by Seynse or others. Nothing on this Site should be construed as granting, by implication, estoppel, or otherwise, any license or right to use any of the Seynse trademarks displayed on this Site, without our prior written permission in each instance. You may not use, copy, display, distribute, modify or reproduce any of the trademarks found on the Site unless in accordance with written authorization by us. Seynse prohibits use of any of the Seynse trademarks as part of a link to or from any site unless establishment of such a link is approved in writing by us in advance. Any questions concerning any Seynse Trademarks, or whether any mark or logo is a Seynse Trademark, should be referred to Seynse.</p>\r" +
    "\n" +
    "                    <h4>LINKS TO THIRD-PARTY SITES</h4>\r" +
    "\n" +
    "                    <p>This site may contain links to web sites controlled, owned, and operated by third parties (the \"third-party sites\"). Seynse cannot control and has no responsibility for the accuracy or availability of information provided on the third-party sites. You acknowledge that use of any third-party sites is governed by the terms of use for those websites, and not by this Agreement. Links to third-party sites do not constitute an endorsement or recommendation by Seynse of such sites or the content, products, advertising or other materials presented on such sites, but are only for your convenience and you access them at your own risk. Such third-party sites may have a privacy policy different from that of Seynse and the third-party site may provide less security than this Site. Seynse is not responsible for the content of any third-party web sites, nor does Seynse make any warranties or representations, express or implied, regarding the content (or the accuracy of such content) on any third-party web sites, and Seynse shall have no liability of any nature whatsoever for any failure of products or services offered or advertised at such sites or otherwise.</p>\r" +
    "\n" +
    "                    <h4>DISCLAIMER OF WARRANTIES</h4>\r" +
    "\n" +
    "                    <p>None of Seynse, its parent, any of its affiliates, providers or their respective officers, directors, employees, agents, independent contractors or licensors (collectively the \" Seynse Parties\") guarantees the accuracy, adequacy, timeliness, reliability, completeness, or usefulness of any of the Content and the Seynse Parties disclaim liability for errors or omissions in the Content.</p>\r" +
    "\n" +
    "                    <p>This Site and all of the Content is provided \"as is\" and \"as available,\" without any warranty, either express or implied, including the implied warranties of merchantability, fitness for a particular purpose, non-infringement or title. Additionally, there are no warranties as to the results of your use of the Content. The Seynse Parties do not warrant that the Site is free of viruses or other harmful components. This does not affect those warranties which are incapable of exclusion, restriction or modification under the laws applicable to this Agreement.</p>\r" +
    "\n" +
    "                    <p>The Seynse Parties may discontinue or make changes in the Content and site at any time without prior notice to you and without any liability to you. Any dated information is published as of its date only, and the Seynse Parties do not undertake any obligation or responsibility to update or amend any such information. The Seynse Parties reserve the right to terminate any or all Site offerings or transmissions without prior notice to you. This Site could contain technical inaccuracies or typographical errors. Use of this Site is at your own risk.</p>\r" +
    "\n" +
    "                    <h4>LIMITATION OF LIABILITY</h4>\r" +
    "\n" +
    "                    <p>Under no circumstances will the Seynse Parties be liable for any damages including general, special, direct, indirect, incidental, consequential, punitive or any other damages (including, without limitation, lost profits or business interruption) of any kind whether in an action in contract or negligence arising or relating in any way to the use or inability to use by any party of the content, the Site or any third-party site to which this site is linked, or in connection with any failure of performance, error, omission, interruption, defect, delay in operation or transmission, computer virus or line or system failure, even if Seynse Parties, or representatives thereof, are advised of the possibility of such damages, losses or expenses. The Seynse Parties are not liable for any defamatory, offensive or illegal conduct of any user. Your sole remedy for dissatisfaction with this Site is to stop using the Site. If your use of materials from this Site results in the need for servicing, repair or correction of equipment or data, you assume any costs thereof. If the foregoing limitation is found to be invalid, you agree that the Seynse Parties' total liability for all damages, losses, or causes of action of any kind or nature shall be limited to the greatest extent permitted by applicable law.</p>\r" +
    "\n" +
    "                    <h4>INDEMNIFICATION</h4>\r" +
    "\n" +
    "                    <p>You agree to indemnify and hold harmless Seynse Parties from and against any and all claims, losses, expenses, demands or liabilities, including attorneys' fees and costs, incurred by the Seynse Parties in connection with any claim by a third party (including any intellectual property claim) arising out of (i) materials and content you submit to, post to or transmit through the Site, or (ii) your use of the Site in violation of this Agreement or in violation of any applicable law. You further agree that you will cooperate fully in the defense of any such claims. Seynse Parties reserve the right, at their own expense, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, and you shall not in any event settle any such claim or matter without the written consent of Seynse. You further agree to indemnify and hold harmless Seynse Parties from any claim arising from a third party's use of information or materials of any kind that you post to the Site.</p>\r" +
    "\n" +
    "                    <h4>MONITORING OF THE SITE</h4>\r" +
    "\n" +
    "                    <p>Seynse has no obligation to monitor the Site; however, you acknowledge and agree that Seynse has the right to monitor the Site electronically from time to time and to disclose any information as necessary or appropriate to satisfy any law, regulation or other governmental request, to operate the Site, or to protect itself or other users of the Site.</p>\r" +
    "\n" +
    "                    <h4>SUBMISSIONS TO THE SITE</h4>\r" +
    "\n" +
    "                    <p>All remarks, discussions, ideas, concepts, know-how, techniques, graphics or other submissions communicated to Seynse through this Site (collectively, \"Submissions\") will be deemed and remain the property of Seynse, and Seynse is entitled to use any Submission for any purpose, without restriction or compensation to the individual who has provided the Submission. Seynse shall not be subject to any obligations of confidentiality regarding Submissions except as expressly agreed by Seynse or as otherwise required by applicable law. Nothing herein contained shall be construed as limiting Seynse's responsibilities and obligations under its Privacy Policy.</p>\r" +
    "\n" +
    "                    <h4>USE OF PERSONALLY IDENTIFIABLE INFORMATION</h4>\r" +
    "\n" +
    "                    <p>Seynse's practices and policies with respect to the collection and use of personally identifiable information are governed by Seynse's Privacy Policy.</p>\r" +
    "\n" +
    "                    <h4>AVAILABILITY</h4>\r" +
    "\n" +
    "                    <p>This Site is not intended for distribution to, or use by, any person or entity in any jurisdiction or country where such distribution or use would be contrary to applicable law or regulation. By offering this Site and Content no distribution or solicitation is made by Seynse to any person to use the Site or Content in jurisdictions where the provision of the Site and/or Content is prohibited by law.</p>\r" +
    "\n" +
    "                    <h4>TERMINATION</h4>\r" +
    "\n" +
    "                    <p>This Agreement is effective until terminated by Seynse. Seynse may terminate this Agreement at any time without notice, or suspend or terminate your access and use of the Site at any time, with or without cause, in Seynse's absolute discretion and without notice. The following provisions of this Agreement shall survive termination of your use or access to the Site: the sections concerning Indemnification, Disclaimer of Warranties, Limitation of Liability, Waiver, Applicable Law and Dispute Resolution, and General Provisions, and any other provision that by its terms survives termination of your use or access to the Site.</p>\r" +
    "\n" +
    "                    <h4>WAIVER</h4>\r" +
    "\n" +
    "                    <p>Failure by Seynse to enforce any of its rights under this Agreement shall not be construed as a waiver of those rights or any other rights in any way whatsoever.</p>\r" +
    "\n" +
    "                    <h4>APPLICABLE LAW AND DISPUTE RESOLUTION</h4>\r" +
    "\n" +
    "                    <p>This Agreement and all other aspects of your use of the Site shall be governed by and construed in accordance with the laws of India and, without regard to its conflict of laws rules. You agree that you will notify Seynse in writing of any claim or dispute concerning or relating to the Site and the information or services provided through it, and give Seynse a reasonable period of time to address it BEFORE bringing any legal action, against Seynse.</p>\r" +
    "\n" +
    "                    <h4>OTHER AGREEMENTS</h4>\r" +
    "\n" +
    "                    <p>This Agreement shall be subject to any other agreements you have entered into with Seynse.</p>\r" +
    "\n" +
    "                    <h4>ADDITIONAL TERMS</h4>\r" +
    "\n" +
    "                    <p>Certain sections or pages on the Site may contain separate terms and conditions of use, which are in addition to the terms and conditions of this Agreement. In the event of a conflict, the additional terms and conditions will govern for those sections or pages.</p>\r" +
    "\n" +
    "                    <h4>SEVERABILITY</h4>\r" +
    "\n" +
    "                    <p>If any provision of this Agreement is found to be invalid or unenforceable, the remaining provisions shall be enforced to the fullest extent possible, and the remaining provisions of the Agreement shall remain in full force and effect.</p>\r" +
    "\n" +
    "                    <h4>GENERAL PROVISIONS</h4>\r" +
    "\n" +
    "                    <p>This Agreement supersedes any previous Terms of Use Agreement to which you and Seynse may have been bound. This Agreement will be binding on, inure to the benefit of, and be enforceable against the parties and their respective successors and assigns. Neither the course of conduct between parties nor trade practice shall act to modify any provision of the Agreement. All rights not expressly granted herein are hereby reserved. Headings are for reference purposes only and in no way define, limit, construe or describe the scope or extent of such section.</p>\r" +
    "\n" +
    "                    <h4>COPYRIGHT COMPLAINTS</h4>\r" +
    "\n" +
    "                    <p>If you believe, in good faith, that any materials on the Site infringe your copyrights, notifications of claimed copyright infringement should be sent to Seynse's designated agent. Notification should include:</p>\r" +
    "\n" +
    "                    <ul class=\"terms_ul_li\">\r" +
    "\n" +
    "                        <li>an electronic or physical signature of the person authorized to act on behalf of the owner of the copyright interest;</li>\r" +
    "\n" +
    "                        <li>a description of the copyrighted work that you claim has been infringed;</li>\r" +
    "\n" +
    "                        <li>a description of where the material you claim is infringing is located on the Site;</li>\r" +
    "\n" +
    "                        <li>a statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent or the law; and</li>\r" +
    "\n" +
    "                        <li>a statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright owner or duly authorized to act on the copyright owner's behalf.</li>\r" +
    "\n" +
    "                    </ul>\r" +
    "\n" +
    "                    <p>You may contact Seynse for notification of claimed copyright infringement by e-mail at hello@loansingh.com.</p>\r" +
    "\n" +
    "                    <h4>CONTACTING US</h4>\r" +
    "\n" +
    "                    <p>If you have questions regarding the Agreement or the practices of Seynse, please contact us by e-mail at hello@loansingh.com.</p>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </section>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </article>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('app/dashboard/dashboard.html',
    "<!-- for sub section/child components -->\r" +
    "\n" +
    "<div class=\"app-section fade-in-up ng-enter ng-enter-active\">\r" +
    "\n" +
    "    <article class=\"app-content\">\r" +
    "\n" +
    "        <div class=\"app-content-inner__child clearfix\">\r" +
    "\n" +
    "            <section id=\"dashboard-sec\" class=\"table-data-parent\">\r" +
    "\n" +
    "                <div class=\"container\">\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-12 padd-top-40\">\r" +
    "\n" +
    "                            <div class=\"row\">\r" +
    "\n" +
    "                                <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3\">\r" +
    "\n" +
    "                                    <div class=\"one-forth-box interest-widget\">\r" +
    "\n" +
    "                                        <img class=\"pull-right\" src=\"img/info.png\" />\r" +
    "\n" +
    "                                        <img class=\"pull-left\" src=\"img/interestEarned.png\" />\r" +
    "\n" +
    "                                        <div class=\"bec\">\r" +
    "\n" +
    "                                            <h6>Interest Earned</h6>\r" +
    "\n" +
    "                                            <h4><i class=\"fa fa-inr\" aria-hidden=\"true\"></i> {{dashboardCtrl.borrowerData.interest_earned}}</h4>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                        <p class=\"date-band\">as on <span>{{dashboardCtrl.date | date:'LLLL dd yyyy'}}</span></p>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3\">\r" +
    "\n" +
    "                                    <div class=\"one-forth-box roi-widget\">\r" +
    "\n" +
    "                                        <img class=\"pull-right\" src=\"img/info.png\" />\r" +
    "\n" +
    "                                        <img class=\"pull-left\" src=\"img/avgROI.png\" />\r" +
    "\n" +
    "                                        <div class=\"bec\">\r" +
    "\n" +
    "                                            <h6>Avg. ROI</h6>\r" +
    "\n" +
    "                                            <h4></i> {{dashboardCtrl.borrowerData.average_roi}}%</h4>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                        <p class=\"date-band\">as on <span>{{dashboardCtrl.date | date:'LLLL dd yyyy'}}</span></p>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3\">\r" +
    "\n" +
    "                                    <div class=\"one-forth-box projected-widget\">\r" +
    "\n" +
    "                                        <img class=\"pull-right\" src=\"img/info.png\" />\r" +
    "\n" +
    "                                        <img class=\"pull-left\" src=\"img/projectedInterest.png\" />\r" +
    "\n" +
    "                                        <div class=\"bec\">\r" +
    "\n" +
    "                                            <h6>Projected Interest</h6>\r" +
    "\n" +
    "                                            <h4><i class=\"fa fa-inr\" aria-hidden=\"true\"></i> {{dashboardCtrl.borrowerData.projected_interest}}</h4>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                        <p class=\"date-band\">as on <span>{{dashboardCtrl.date | date:'LLLL dd yyyy'}}</span></p>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3\">\r" +
    "\n" +
    "                                    <div class=\"one-forth-box invest-widget\">\r" +
    "\n" +
    "                                        <img class=\"pull-right\" src=\"img/info.png\" />\r" +
    "\n" +
    "                                        <img class=\"pull-left\" src=\"img/amountInvested.png\" />\r" +
    "\n" +
    "                                        <div class=\"bec\">\r" +
    "\n" +
    "                                            <h6>Amount Invested</h6>\r" +
    "\n" +
    "                                            <h4><i class=\"fa fa-inr\" aria-hidden=\"true\"></i> {{dashboardCtrl.borrowerData.amount_invested}}</h4>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                        <p class=\"date-band\">as on <span>{{dashboardCtrl.date | date:'LLLL dd yyyy'}}</span></p>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <table datatable=\"\" dt-options=\"dashboardCtrl.dtOptions\" dt-columns=\"dashboardCtrl.dtColumns\" dt-instance=\"dashboardCtrl.dtInstance\" class=\"borrower-table table datatable dt-responsive\" id=\"dashboard-table\"></table>\r" +
    "\n" +
    "                           <!--  <table id=\"example\" class=\"table table-striped table-bordered dt-responsive nowrap\" cellspacing=\"0\" width=\"100%\">\r" +
    "\n" +
    "                                <thead>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <th>#Loan No</th>\r" +
    "\n" +
    "                                        <th>Borrower name</th>\r" +
    "\n" +
    "                                        <th><i class=\"fa fa-inr\" aria-hidden=\"true\"></i> Amount</th>\r" +
    "\n" +
    "                                        <th>EMI</th>\r" +
    "\n" +
    "                                        <th>Interst rate</th>\r" +
    "\n" +
    "                                        <th>Tenure</th>\r" +
    "\n" +
    "                                        <th></th>\r" +
    "\n" +
    "                                    </tr>\r" +
    "\n" +
    "                                </thead>\r" +
    "\n" +
    "                                <tbody>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <td>Tiger</td>\r" +
    "\n" +
    "                                        <td>Nixon</td>\r" +
    "\n" +
    "                                        <td>System Architect</td>\r" +
    "\n" +
    "                                        <td>Edinburgh</td>\r" +
    "\n" +
    "                                        <td>61</td>\r" +
    "\n" +
    "                                        <td>2011/04/25</td>\r" +
    "\n" +
    "                                        <td><i class=\"fa fa-arrow-circle-down\" aria-hidden=\"true\"></i></td>\r" +
    "\n" +
    "                                    </tr>\r" +
    "\n" +
    "                                </tbody>\r" +
    "\n" +
    "                            </table> -->\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </section>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <!-- app-content-inner__child end -->\r" +
    "\n" +
    "    </article>\r" +
    "\n" +
    "    <!-- app-content end -->\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<!-- app-section -->\r" +
    "\n"
  );


  $templateCache.put('app/dashboard/dashboard_EMI/dashboard-emi.html',
    "<div class=\"emi-section\">\r" +
    "\n" +
    "    <tab-component>\r" +
    "\n" +
    "        <pane-component title=\"Recent EMIs\">\r" +
    "\n" +
    "            <table datatable=\"\" dt-options=\"emiCtrl.recentEMI.dtOptions\" dt-columns=\"emiCtrl.recentEMI.dtColumns\" dt-instance= \"emiCtrl.recentEMI.dtInstance\" class=\"borrower-table table datatable dt-responsive\"></table>\r" +
    "\n" +
    "        </pane-component>\r" +
    "\n" +
    "        <pane-component title=\"Full Schedule\">\r" +
    "\n" +
    "            <table datatable=\"\" dt-options=\"emiCtrl.fullSchedule.dtOptions\" dt-columns=\"emiCtrl.fullSchedule.dtColumns\" dt-instance= \"emiCtrl.fullSchedule.dtInstance\" class=\"borrower-table table datatable dt-responsive\"></table>\r" +
    "\n" +
    "        </pane-component>\r" +
    "\n" +
    "   </tab-component>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/directives/invest-widget.directive.html',
    "<div class=\"ib-container\">\r" +
    "\n" +
    "    <form name=\"$ctrl.prefForm\" id=\"$ctrl.prefForm\" novalidate ng-submit=\"$ctrl.prefForm.$valid && $ctrl.goToDirectiveInvest()\">\r" +
    "\n" +
    "        <div class=\"form-pref-group-TEMP invest-data-wrapper\">\r" +
    "\n" +
    "            <div class=\"amount_wrapper\">\r" +
    "\n" +
    "                <h3 ng-bind=\"$ctrl.widgetText[0]\"></h3>\r" +
    "\n" +
    "                <div class=\"ib-amountbox\">\r" +
    "\n" +
    "                    <i class=\"fa fa-inr\" aria-hidden=\"true\"></i>\r" +
    "\n" +
    "                    <input type=\"text\" name=\"amounttoinvest\" placeholder=\"Amount\" ng-model=\"$ctrl.userPreference.amounttoinvest\" required awnum=\"price\" />\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            \r" +
    "\n" +
    "            <div class=\"rate-container form-pref-group\">\r" +
    "\n" +
    "                <h3 ng-bind=\"$ctrl.widgetText[1]\"></h3>\r" +
    "\n" +
    "                <!-- <div class=\"rate-item\" ng-repeat=\"risk in $ctrl.riskRates\">\r" +
    "\n" +
    "            <button type=\"button\" class=\"btn rate-button\" ng-class=\"risk.class\" ng-click=\"$ctrl.userPreference.rateRisk=risk.name\"><i class=\"fa fa-check-circle-o\" aria-hidden=\"true\" ng-if=\"$ctrl.userPreference.rateRisk==risk.name\"></i>{{risk.name}}</button>\r" +
    "\n" +
    "            <br/> {{risk.value}}\r" +
    "\n" +
    "        </div> -->\r" +
    "\n" +
    "                <div class=\"rate-item\">\r" +
    "\n" +
    "                    <button type=\"button\" class=\"btn rate-button low\">Low</button>\r" +
    "\n" +
    "                        <br/> 16-20%\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"rate-item\">\r" +
    "\n" +
    "                    <a href=\"javascript:void(0)\" class=\"btn rate-button medium\" data-toggle=\"tooltip\" title=\"Stay tuned for the risk category\">Medium</a>\r" +
    "\n" +
    "                        <br/> <span>20-24%</span>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"rate-item\">\r" +
    "\n" +
    "                    <a href=\"javascript:void(0)\" class=\"btn rate-button high\" data-toggle=\"tooltip\" title=\"Stay tuned for the risk category\">High</a>\r" +
    "\n" +
    "                        <br/> <span>24-28%</span>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <!-- <p>risk category <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i></p> -->\r" +
    "\n" +
    "                <div class=\"error-msg\" ng-show=\"$ctrl.prefForm.amounttoinvest.$error.required && $ctrl.prefForm.$submitted\">\r" +
    "\n" +
    "                    Please enter a amount to invest.\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"tenure-container\">\r" +
    "\n" +
    "                <h3 ng-bind=\"$ctrl.widgetText[2]\"></h3>\r" +
    "\n" +
    "                <div class=\"tenure-slider\">\r" +
    "\n" +
    "                    <rzslider rz-slider-model=\"$ctrl.slider.min\" rz-slider-high=\"$ctrl.slider.max\" rz-slider-options=\"$ctrl.slider.options\"></rzslider>\r" +
    "\n" +
    "                    <div class=\"row hide\">\r" +
    "\n" +
    "                        <div class=\"col-xs-5\">\r" +
    "\n" +
    "                            <input type=\"number\" ng-model=\"$ctrl.slider.min\" class=\"form-control\" />\r" +
    "\n" +
    "                            <small class=\"pull-left\">(months)</small>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-xs-2 valign text-center\">to</div>\r" +
    "\n" +
    "                        <div class=\"col-xs-5\">\r" +
    "\n" +
    "                            <input type=\"number\" ng-model=\"$ctrl.slider.max\" class=\"form-control pull-right\" />\r" +
    "\n" +
    "                            <small class=\"pull-right\">(months)</small>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <ul class=\"nav nav-tabs hide relative jsTenureMonthsList tenure-monthly-list\" role=\"tablist\">\r" +
    "\n" +
    "                    <div class=\"tenure-band\"></div>\r" +
    "\n" +
    "                    <li ng-repeat=\"item in $ctrl.tenureMonthsList\">\r" +
    "\n" +
    "                        <a><span class=\"tenure-style\">Months</span>\r" +
    "\n" +
    "                            <div class=\"steps\" ng-click=\"$ctrl.tenureSelection(item, $event)\"><span class=\"vis_sct jsItemText\" ng-bind=\"item\"></span></div>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                </ul>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <button type=\"submit\" class=\"btn btn-primary full-width\">{{$ctrl.buttonText}}</button>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('app/directives/risk_meter/risk-meter.directive.html',
    "<div class=\"riskmeter\" style=\"position:relative; width:130px; height:130px\"\">\r" +
    "\n" +
    "    <canvas id=\"layer1\" style=\"z-index: 1;position:absolute;left:0px;top:0px;\" height=\"130px\" width=\"130px\">\r" +
    "\n" +
    "    </canvas>\r" +
    "\n" +
    "	<canvas id=\"layer2\" style=\"z-index: 2;position:absolute;left:0px;top:0px;\" height=\"130px\" width=\"130px\">\r" +
    "\n" +
    "	</canvas>\r" +
    "\n" +
    "	<canvas id=\"layer3\" style=\"z-index: 3;position:absolute;left:0px;top:0px;\" height=\"130px\" width=\"130px\">\r" +
    "\n" +
    "	</canvas>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/home/home.html',
    "<div class=\"app-section fade-in-up ng-enter ng-enter-active\">\r" +
    "\n" +
    "    <article class=\"app-content\">\r" +
    "\n" +
    "        <div class=\"app-content-inner__child clearfix\">\r" +
    "\n" +
    "            <section id=\"home-sec\">\r" +
    "\n" +
    "                <div class=\"container\">\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-12\">\r" +
    "\n" +
    "                            <h1>Earn Big Returns by<br/>\r" +
    "\n" +
    "                                Financing Small Dreams</h1>\r" +
    "\n" +
    "                           <!--  <img src=\"img/loansingh-mustache-trans_bac.png\" /> -->\r" +
    "\n" +
    "                            <!-- <h2 class=\"red-highlight\">Looking to invest?</h2> -->\r" +
    "\n" +
    "                            <h6 class=\"padd-top-40\">Meet Loan Singh, your tech-enabled<br/> P2P lending platform.</h6>\r" +
    "\n" +
    "                            <p class=\"bullet-points\">\r" +
    "\n" +
    "                                <i class=\"fa fa-circle-o\" aria-hidden=\"true\"></i><i class=\"fa fa-check\" aria-hidden=\"true\"></i> <span>Safe lending option</span><br/>\r" +
    "\n" +
    "                                <i class=\"fa fa-circle-o\" aria-hidden=\"true\"></i><i class=\"fa fa-check\" aria-hidden=\"true\"></i> <span>Up to 24% ROI</span><br/>\r" +
    "\n" +
    "                            </p>\r" +
    "\n" +
    "                            \r" +
    "\n" +
    "                            <div class=\"row\">\r" +
    "\n" +
    "                                <div class=\"col-md-4\">\r" +
    "\n" +
    "                                    <invest-widget on-invest-now=\"homeCtrl.submitInvestNow()\" button-text=\"INVEST NOW\"></invest-widget>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            \r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        \r" +
    "\n" +
    "                       \r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </section>\r" +
    "\n" +
    "            <section id=\"graph-sec\">\r" +
    "\n" +
    "                <div class=\"background-img\"></div>\r" +
    "\n" +
    "                <div class=\"container\">\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-12 padd-top-90\">\r" +
    "\n" +
    "                            <div class=\"col-md-9\">\r" +
    "\n" +
    "                                <h1>Get Higher Returns<!--  Lower Risk --></h1>\r" +
    "\n" +
    "                                <p class=\"bullet-points\">\r" +
    "\n" +
    "                                    <i class=\"fa fa-circle-o\" aria-hidden=\"true\"></i><i class=\"fa fa-check\" aria-hidden=\"true\"></i> <span>Risk Adjusted Returns</span><br/>\r" +
    "\n" +
    "                                    <i class=\"fa fa-circle-o\" aria-hidden=\"true\"></i><i class=\"fa fa-check\" aria-hidden=\"true\"></i> <span>Diversified Portfolios to Invest in</span><br/>\r" +
    "\n" +
    "                                    <i class=\"fa fa-circle-o\" aria-hidden=\"true\"></i><i class=\"fa fa-check\" aria-hidden=\"true\"></i> <span>Monthly Cashflows</span>\r" +
    "\n" +
    "                                </p>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"col-md-3\">\r" +
    "\n" +
    "                                <img src=\"img/logo-w.png\" />\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <input type=\"radio\" name=\"resize-graph\" id=\"graph-normal\" checked=\"checked\" />\r" +
    "\n" +
    "                            <input type=\"radio\" name=\"paint-graph\" id=\"graph-blue\" checked=\"checked\" />\r" +
    "\n" +
    "                            <input type=\"radio\" name=\"fill-graph\" id=\"f-product1\" />\r" +
    "\n" +
    "                            \r" +
    "\n" +
    "                            <ul class=\"graph-container\">\r" +
    "\n" +
    "                                <li>\r" +
    "\n" +
    "                                    <!-- <span>2008</span> -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <div class=\"bar-wrapper\">\r" +
    "\n" +
    "                                        <div class=\"bar-container\">\r" +
    "\n" +
    "                                            <div class=\"bar-background\"></div>\r" +
    "\n" +
    "                                            <div class=\"bar-inner\"><span class=\"bar-data-value\">Savings Account<br/> <span>4%</span></span></div>\r" +
    "\n" +
    "                                            <div class=\"bar-foreground\"></div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <li>\r" +
    "\n" +
    "                                    <!-- <span>2009</span> -->\r" +
    "\n" +
    "                                    <div class=\"bar-wrapper\">\r" +
    "\n" +
    "                                        <div class=\"bar-container\">\r" +
    "\n" +
    "                                            <div class=\"bar-background\"></div>\r" +
    "\n" +
    "                                            <div class=\"bar-inner\"><span class=\"bar-data-value\">SENSEX (5 yrs CAGR)<br/> <span>6.23%</span></span></div>\r" +
    "\n" +
    "                                            <div class=\"bar-foreground\"></div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </li>\r" +
    "\n" +
    "                                <li>\r" +
    "\n" +
    "                                    <!-- <span>2010</span> -->\r" +
    "\n" +
    "                                    <div class=\"bar-wrapper\">\r" +
    "\n" +
    "                                        <div class=\"bar-container\">\r" +
    "\n" +
    "                                            <div class=\"bar-background\"></div>\r" +
    "\n" +
    "                                            <div class=\"bar-inner\"><span class=\"bar-data-value\">Fixed Deposit<br/> <span>8%</span></span></div>\r" +
    "\n" +
    "                                            <div class=\"bar-foreground\"></div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </li>\r" +
    "\n" +
    "                                <li>\r" +
    "\n" +
    "                                    <!-- <span>2011</span> -->\r" +
    "\n" +
    "                                    <div class=\"bar-wrapper\">\r" +
    "\n" +
    "                                        <div class=\"bar-container\">\r" +
    "\n" +
    "                                            <div class=\"bar-background\"></div>\r" +
    "\n" +
    "                                            <div class=\"bar-inner\"><span class=\"bar-data-value\">Gold 5yrs<br/> <span>9%</span></span></div>\r" +
    "\n" +
    "                                            <div class=\"bar-foreground\"></div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </li>\r" +
    "\n" +
    "                                <li>\r" +
    "\n" +
    "                                    <!-- <span>2012</span> -->\r" +
    "\n" +
    "                                    <div class=\"bar-wrapper\">\r" +
    "\n" +
    "                                        <div class=\"bar-container\">\r" +
    "\n" +
    "                                            <div class=\"bar-background\"></div>\r" +
    "\n" +
    "                                            <div class=\"bar-inner\"><span class=\"bar-data-value\">Average Debt<br/> <span>11.75%</span></span></div>\r" +
    "\n" +
    "                                            <div class=\"bar-foreground\"></div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </li>\r" +
    "\n" +
    "                                <li>\r" +
    "\n" +
    "                                    <!-- <span>2012</span> -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <div class=\"bar-wrapper\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        <div class=\"bar-container\">\r" +
    "\n" +
    "                                            <div class=\"bar-background\"></div>\r" +
    "\n" +
    "                                            <div class=\"bar-inner\"><span class=\"bar-data-value\"><br/><br/> <span>16%</span></span></div>\r" +
    "\n" +
    "                                            <div class=\"bar-foreground\"></div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </li>\r" +
    "\n" +
    "                                <li>\r" +
    "\n" +
    "                                    <!-- <ul class=\"graph-marker-container\">\r" +
    "\n" +
    "                                            <li style=\"bottom:25%;\"><span>25%</span></li>\r" +
    "\n" +
    "                                            <li style=\"bottom:50%;\"><span>50%</span></li>\r" +
    "\n" +
    "                                            <li style=\"bottom:75%;\"><span>75%</span></li>\r" +
    "\n" +
    "                                            <li style=\"bottom:100%;\"><span>100%</span></li>\r" +
    "\n" +
    "                                        </ul> -->\r" +
    "\n" +
    "                                </li>\r" +
    "\n" +
    "                            </ul>\r" +
    "\n" +
    "                            \r" +
    "\n" +
    "                            <!-- <img class=\"img-overlay\" src=\"img/yellow.png\" /> -->\r" +
    "\n" +
    "                            <div class=\"note\">\r" +
    "\n" +
    "                                Disclaimer: &nbsp;&nbsp; <br/>\r" +
    "\n" +
    "                                <ul>\r" +
    "\n" +
    "                                    <li>Past performance are not indicative of future returns. </li>\r" +
    "\n" +
    "                                    <li>&nbsp;&nbsp;| &nbsp;Annualized returns. </li>\r" +
    "\n" +
    "                                    <li>&nbsp;&nbsp;| &nbsp;Above returns have been collected from multiple sources over a period of time.</li>\r" +
    "\n" +
    "                                </ul>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"inflation-line\">\r" +
    "\n" +
    "                            Inflation(7%)\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </section>\r" +
    "\n" +
    "            <section id=\"scoring-model-sec\">\r" +
    "\n" +
    "                <div class=\"container\">\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-12 padd-top-90\">\r" +
    "\n" +
    "                            <div class=\"row\">\r" +
    "\n" +
    "                                <h1>Your Investments are safe with Loan Singh</h1>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-md-12 padd-top-20\">\r" +
    "\n" +
    "                            <div class=\"row\">\r" +
    "\n" +
    "                                <div class=\"col-md-6\">\r" +
    "\n" +
    "                                    <p class=\"bullet-points\">\r" +
    "\n" +
    "                                        <i class=\"fa fa-circle-o\" aria-hidden=\"true\"></i><i class=\"fa fa-check\" aria-hidden=\"true\"></i> <span>Data-driven Credit Scoring Model</span><br/>\r" +
    "\n" +
    "                                        <i class=\"fa fa-circle-o\" aria-hidden=\"true\"></i><i class=\"fa fa-check\" aria-hidden=\"true\"></i> <span>Comprehensive Verification Process</span><br/>\r" +
    "\n" +
    "                                        <i class=\"fa fa-circle-o\" aria-hidden=\"true\"></i><i class=\"fa fa-check\" aria-hidden=\"true\"></i> <span>Machine Learning Algorithm)</span>\r" +
    "\n" +
    "                                    </p>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div class=\"col-md-6\">\r" +
    "\n" +
    "                                    <p class=\"bullet-points\">\r" +
    "\n" +
    "                                        Our investment recommendations are backed by measures such as ensuring end use of loans (category specific), NACH mandate, and legal compliance\r" +
    "\n" +
    "                                    </p>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <br/>\r" +
    "\n" +
    "                            <img src=\"img/LoanSingh_Machine_v1.gif\" />\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </section>\r" +
    "\n" +
    "            <section id=\"infographic-sec\">\r" +
    "\n" +
    "                <div class=\"container\">\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-12 padd-top-90\">\r" +
    "\n" +
    "                            <h1>How Loan Singh Works?</h1>\r" +
    "\n" +
    "                            <!-- <h6 class=\"red-left-border\">All our processes are simple and transparent<br/>\r" +
    "\n" +
    "                                We're tech enabled<br/>\r" +
    "\n" +
    "                                We ensure ease of access</h6>\r" +
    "\n" +
    "                            <h6 class=\"padd-top-90\">We make it crystal clear:</h6> -->\r" +
    "\n" +
    "                            <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r" +
    "\n" +
    "                                <!-- Indicators -->\r" +
    "\n" +
    "                                <ol class=\"carousel-indicators\">\r" +
    "\n" +
    "                                    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\">1</li>\r" +
    "\n" +
    "                                    <li data-target=\"#myCarousel\" data-slide-to=\"1\">2</li>\r" +
    "\n" +
    "                                    <li data-target=\"#myCarousel\" data-slide-to=\"2\">3</li>\r" +
    "\n" +
    "                                    <li data-target=\"#myCarousel\" data-slide-to=\"3\">4</li>\r" +
    "\n" +
    "                                </ol>\r" +
    "\n" +
    "                                <!-- Wrapper for slides -->\r" +
    "\n" +
    "                                <div class=\"carousel-inner\" role=\"listbox\">\r" +
    "\n" +
    "                                    <div class=\"item active\">\r" +
    "\n" +
    "                                        <div class=\"col-sm-offset-1 col-sm-10\">\r" +
    "\n" +
    "                                            <div class=\"row\">\r" +
    "\n" +
    "                                                <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                                    <img src=\"img/1.png\" />\r" +
    "\n" +
    "                                                </div>\r" +
    "\n" +
    "                                                <div class=\"col-sm-6 padd-top-40\">\r" +
    "\n" +
    "                                                    <h6>Sign Up to Invest</h6>\r" +
    "\n" +
    "                                                    \r" +
    "\n" +
    "                                                    <span>\r" +
    "\n" +
    "                                                        Quick Signup<br/>\r" +
    "\n" +
    "                                                        No Documentation<br/>\r" +
    "\n" +
    "                                                        Start Investing in Minutes.<br/>\r" +
    "\n" +
    "                                                    </span>\r" +
    "\n" +
    "                                                    <!-- <a class=\"btn btn-round-corner\" href ng-click=\"homeCtrl.submitInvestNow()\">Start Investing</a> -->\r" +
    "\n" +
    "                                                </div>\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div class=\"item\">\r" +
    "\n" +
    "                                        <div class=\"col-sm-offset-1 col-sm-10\">\r" +
    "\n" +
    "                                            <div class=\"row\">\r" +
    "\n" +
    "                                                <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                                    <img src=\"img/2.png\" />\r" +
    "\n" +
    "                                                </div>\r" +
    "\n" +
    "                                                <div class=\"col-sm-6 padd-top-40\">\r" +
    "\n" +
    "                                                    <h6>Fill In Investment Preferences</h6>\r" +
    "\n" +
    "                                                    \r" +
    "\n" +
    "                                                    <span>\r" +
    "\n" +
    "                                                        Minimum Investment INR 10,000 <br/>\r" +
    "\n" +
    "                                                        Tenure Ranging From 3-24 Months <br/>\r" +
    "\n" +
    "                                                        Earn 16-24% Interest <br/>\r" +
    "\n" +
    "                                                    </span>\r" +
    "\n" +
    "                                                    <!-- <a class=\"btn btn-round-corner\" href ng-click=\"homeCtrl.submitInvestNow()\">Start Investing</a> -->\r" +
    "\n" +
    "                                                </div>\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div class=\"item\">\r" +
    "\n" +
    "                                        <div class=\"col-sm-offset-1 col-sm-10\">\r" +
    "\n" +
    "                                            <div class=\"row\">\r" +
    "\n" +
    "                                                <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                                    <img src=\"img/3.png\" />\r" +
    "\n" +
    "                                                </div>\r" +
    "\n" +
    "                                                <div class=\"col-sm-6 padd-top-40\">\r" +
    "\n" +
    "                                                    <h6>Customize Your Portfolio</h6>\r" +
    "\n" +
    "                                                    \r" +
    "\n" +
    "                                                    <span>\r" +
    "\n" +
    "                                                        Verified & Risk-assessed Borrowers<br/>\r" +
    "\n" +
    "                                                        One-click Portfolio Creation<br/>\r" +
    "\n" +
    "                                                        Seamless Disbursements<br/>\r" +
    "\n" +
    "                                                    </span>\r" +
    "\n" +
    "                                                    <!-- <a class=\"btn btn-round-corner\" href ng-click=\"homeCtrl.submitInvestNow()\">Start Investing</a> -->\r" +
    "\n" +
    "                                                </div>\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div class=\"item\">\r" +
    "\n" +
    "                                        <div class=\"col-sm-offset-1 col-sm-10\">\r" +
    "\n" +
    "                                            <div class=\"row\">\r" +
    "\n" +
    "                                                <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                                    <img src=\"img/4.png\" />\r" +
    "\n" +
    "                                                </div>\r" +
    "\n" +
    "                                                <div class=\"col-sm-6 padd-top-40\">\r" +
    "\n" +
    "                                                    <h6>Integrated Dashboard</h6>\r" +
    "\n" +
    "                                                    \r" +
    "\n" +
    "                                                    <span>\r" +
    "\n" +
    "                                                        Real-time EMI Updates<br/>\r" +
    "\n" +
    "                                                        Income Forecasting<br/>\r" +
    "\n" +
    "                                                        Summarised View of Your Investments<br/>\r" +
    "\n" +
    "                                                    </span>\r" +
    "\n" +
    "                                                    <!-- <a class=\"btn btn-round-corner\" href ng-click=\"homeCtrl.submitInvestNow()\">Start Investing</a> -->\r" +
    "\n" +
    "                                                </div>\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <!-- Left and right controls -->\r" +
    "\n" +
    "                               <!--  <a class=\"left carousel-control\" hdata-target=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\r" +
    "\n" +
    "                                    <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\r" +
    "\n" +
    "                                    <span class=\"sr-only\">Previous</span>\r" +
    "\n" +
    "                                </a>\r" +
    "\n" +
    "                                <a class=\"right carousel-control\" data-target=\"#myCarousel\" role=\"button\" data-slide=\"next\">\r" +
    "\n" +
    "                                    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\r" +
    "\n" +
    "                                    <span class=\"sr-only\">Next</span>\r" +
    "\n" +
    "                                </a> -->\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"text-center\">\r" +
    "\n" +
    "                                <a class=\"btn btn-round-corner\" href ng-click=\"homeCtrl.submitInvestNow()\">Start Investing</a>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </section>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <!-- app-content-inner__child end -->\r" +
    "\n" +
    "    </article>\r" +
    "\n" +
    "    <!-- app-content end -->\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<!-- app-section -->\r" +
    "\n"
  );


  $templateCache.put('app/invest/invest.html',
    "<!-- for sub section/child components -->\r" +
    "\n" +
    "<div class=\"app-section fade-in-up ng-enter ng-enter-active\">\r" +
    "\n" +
    "    <article class=\"app-content\">\r" +
    "\n" +
    "        <div class=\"app-content-inner__child clearfix\">\r" +
    "\n" +
    "            <section id=\"auto-invest-sec\" class=\"table-data-parent\">\r" +
    "\n" +
    "                <div class=\"container\">\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <a class=\"btn btn-large btn-success hide\" href=\"javascript:void(0);\" onclick=\"startIntro();\">Show me how</a>\r" +
    "\n" +
    "                        <div class=\"col-md-12 padd-top-90\">\r" +
    "\n" +
    "                            <div class=\"row\">\r" +
    "\n" +
    "                                <div class=\"one-forth-box\" id=\"step1\" >\r" +
    "\n" +
    "                                  <invest-widget on-invest-now=\"investCtrl.buildPool()\" button-text=\"CREATE\" invest-text=\"investCtrl.investWidgetString\" class=\"invest-sec\"></invest-widget>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <!--  <p>{{100000.0005}}</p>\r" +
    "\n" +
    "                                <p>{{100000.0808|awnum:'price'}}</p> -->\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"row tableSection\">\r" +
    "\n" +
    "                                <div class=\"col-md-8 tableColumn\" id=\"step3\">\r" +
    "\n" +
    "                                    <div class=\"invest-func-sec\">\r" +
    "\n" +
    "                              \r" +
    "\n" +
    "                                  <button type=\"button\" class=\"btn btn-primary pull-right\" ng-click=\"investCtrl.addBorrowersToPool()\" ng-disabled=\"investCtrl.borrowerNumber==0\">ADD TO POOL</button>\r" +
    "\n" +
    "                                  <p class=\"pull-right\"><span ng-bind=\"investCtrl.borrowerNumber\"></span> Borrower Selected</p>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <table datatable=\"\" dt-options=\"investCtrl.dtOptions\" dt-columns=\"investCtrl.dtColumns\" dt-instance=\"investCtrl.dtInstance\" class=\"borrower-table table datatable dt-responsive\"></table>\r" +
    "\n" +
    "                                    <!-- <table id=\"invest-datatable\" datatable=\"\" class=\"table datatable dt-responsive nowrap\" cellspacing=\"0\" width=\"100%\" dt-options=\"investCtrl.dtOptions\"> -->\r" +
    "\n" +
    "                                        <!-- <thead>\r" +
    "\n" +
    "                                          <th><input type=\"checkbox\" id=\"select-all\" name=\"rowSelected\" id=\"rowSelected\" ng-model=\"investCtrl.rowSelector\" ng-change=\"investCtrl.selectAllBorrowers()\"></th>\r" +
    "\n" +
    "                                          <th>Name</th>\r" +
    "\n" +
    "                                          <th>Purpose</th>\r" +
    "\n" +
    "                                          <th>Amount</th>\r" +
    "\n" +
    "                                          <th>Tenure</th>\r" +
    "\n" +
    "                                          <th>Interest</th>\r" +
    "\n" +
    "                                          <th>Status</th>\r" +
    "\n" +
    "                                        </thead>\r" +
    "\n" +
    "                                        <tbody>\r" +
    "\n" +
    "                                            <tr ng-repeat=\"borrower in investCtrl.dataInfo track by $index\">\r" +
    "\n" +
    "                                                <td><input type=\"checkbox\" id=\"borrowerCheck\" ng-checked=\"investCtrl.rowSelector\" ng-model=\"borrower.check\" ng-change=\"investCtrl.setCheckboxValue($index)\"></td>\r" +
    "\n" +
    "                                                <td>{{ borrower.name }}</td>\r" +
    "\n" +
    "                                                <td>{{ borrower.purpose }}</td>\r" +
    "\n" +
    "                                                <td>{{ borrower.loan_amount }}</td>\r" +
    "\n" +
    "                                                <td>{{ borrower.tenure}} %</td>\r" +
    "\n" +
    "                                                <td>{{ borrower.rate_of_interest}} Months</td>\r" +
    "\n" +
    "                                                <td class=\"dt-body-status\"><div class=\"status_wrapper\"><p><span  ng-bind=\"borrower.status[0].val\"></span> %</p><div class=\"progress progress-striped\"><div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" ng-style=\"{width: borrower.status[0].val + '%'}\"></div></div><p>need <span ng-bind=\"borrower.status[0].remAmt\"></span> more</p></div></td>\r" +
    "\n" +
    "                                            </tr>\r" +
    "\n" +
    "                                        </tbody> -->\r" +
    "\n" +
    "                                    <!-- </table> -->\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div class=\"col-md-4 no-padding\"  id=\"step2\">\r" +
    "\n" +
    "                                    <portfolio-pool-component createdpool=\"investCtrl.createdpool\" userpref=\"investCtrl.userPref\"  investnow=\"investCtrl.investNow()\" collapsible=\"true\" changepoolpop=\"investCtrl.changePoolAmount(brwr)\" deletepool=\"investCtrl.deleteFromPool(brwr)\"></portfolio-pool-component>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </section>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <!-- app-content-inner__child end -->\r" +
    "\n" +
    "    </article>\r" +
    "\n" +
    "    <!-- app-content end -->\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<!-- app-section -->\r" +
    "\n" +
    "<borrower-amount-component selectedborrowers=\"investCtrl.selectedBorrowers\" submit-amounts=\"investCtrl.submitedAmounts(borrowerArray)\"></borrower-amount-component>"
  );


  $templateCache.put('app/layout/core-shell.html',
    "<div class=\"app app-header-fixed\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <ng-include src=\"'app/layout/header.html'\"></ng-include>\r" +
    "\n" +
    "    <!-- header -->\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"main-wrapper\" role=\"main\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <ng-outlet></ng-outlet>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div><!-- container -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<!-- for sub section/child components -->\r" +
    "\n" +
    " <!-- <div class=\"app-section container\">\r" +
    "\n" +
    "    <article class=\"app-content\">\r" +
    "\n" +
    "    </article> --><!-- app-content end -->\r" +
    "\n" +
    "<!-- </div> --><!-- app-section -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "        \r" +
    "\n" +
    "<!-- footer -->\r" +
    "\n" +
    "<footer id=\"footer\" class=\"app-footer\" role=\"footer\">\r" +
    "\n" +
    "    <ng-include src=\"'app/layout/footer.html'\"></ng-include>\r" +
    "\n" +
    "</footer>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<!-- Login modal for sign in -->\r" +
    "\n" +
    "<login-component></login-component>\r" +
    "\n" +
    "<borrowerinfo-component></borrowerinfo-component>\r" +
    "\n"
  );


  $templateCache.put('app/layout/footer.html',
    "	<!-- <div class=\"wrapper b-t bg-light\">\r" +
    "\n" +
    "        <span><a href ui-scroll=\"app\" class=\"m-l-sm text-muted\"><i class=\"fa fa-long-arrow-up\"></i></a></span> &copy; 2016 LoanSingh.\r" +
    "\n" +
    "	</div> -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<div class=\"container\">\r" +
    "\n" +
    "        <div class=\"col-lg-12  nopadding\">\r" +
    "\n" +
    "            <div class=\"col-lg-offset-2 col-lg-8 col-md-8  col-sm-8\">\r" +
    "\n" +
    "                <ul class=\"nav navbar-nav footer-menu\">\r" +
    "\n" +
    "                    <li><a href ng-link=\"['AboutUs']\">About us</a></li>\r" +
    "\n" +
    "                    <li><a href ng-link=\"['PrivacyPolicy']\">Privacy Policy</a></li>\r" +
    "\n" +
    "                    <li><a href ng-link=\"['ContactUs']\">Contact us</a></li>\r" +
    "\n" +
    "                    <li><a href ng-link=\"['FAQ']\">FAQ</a></li>\r" +
    "\n" +
    "                    <li><a href ng-link=\"['TermsConditions']\">Terms &amp; Conditions</a></li>\r" +
    "\n" +
    "                </ul>\r" +
    "\n" +
    "                <div class=\"copyright\">© 2016 Loan Singh</div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"col-lg-2 col-md-4 col-sm-4 col-xs-12 nopadding\">\r" +
    "\n" +
    "                <div class=\"social-links\">\r" +
    "\n" +
    "                    <a href='https://www.facebook.com/loansingh/' target='_blank'><span class=\"circle-btn\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></span></a>\r" +
    "\n" +
    "                    <a href='https://twitter.com/loan_singh' target='_blank'><span class=\"circle-btn\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></span></a>\r" +
    "\n" +
    "                    <a href='https://plus.google.com/u/0/113051121304876348815' target='_blank'><span class=\"circle-btn\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i></span></a>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"clearfix\"></div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"clearfix\"></div>\r" +
    "\n" +
    "    </div>"
  );


  $templateCache.put('app/layout/header.html',
    "<header class=\"clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"head-top\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"container\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <a href=\"/\"><img class=\"hidden-xs hidden-sm\" src=\"img/logo.png\" /></a>\r" +
    "\n" +
    "            <a href=\"/\"><img class=\"hidden-md hidden-lg\" src=\"img/loansingh-mustache-trans_bac.png\" /></a>\r" +
    "\n" +
    "            <div class=\"header-callouts hidden-xs hidden-sm\">\r" +
    "\n" +
    "                <button class=\"btn btn-modal-big login-btn\"> <i class=\"fa fa-phone\" aria-hidden=\"true\"></i> 1800 274474</button>\r" +
    "\n" +
    "                <button class=\"btn btn-primary\" ng-show=\"shellCtrl.loggedIn\" ng-click=\"shellCtrl.logout()\">LOGOUT</button>\r" +
    "\n" +
    "                <button class=\"btn btn-primary\" ng-show=\"!shellCtrl.loggedIn\" ng-click=\"shellCtrl.login()\">LOGIN | SIGNUP</button>\r" +
    "\n" +
    "                <!-- <button class=\"btn btn-default dropdown-toggle jsDropDownMenu\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\">Dropdown\r" +
    "\n" +
    "                    <span class=\"caret\"></span>\r" +
    "\n" +
    "                  </button> -->\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"header-callouts hidden-md hidden-lg\">\r" +
    "\n" +
    "                <button type=\"button\" class=\"btn btn-modal-big login-btn\"> <i class=\"fa fa-phone\" aria-hidden=\"true\"></i></button>\r" +
    "\n" +
    "                <button class=\"btn btn-primary\" ng-show=\"shellCtrl.loggedIn\" ng-hide=\"!shellCtrl.loggedIn\" ng-click=\"shellCtrl.logout()\"><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i></button>\r" +
    "\n" +
    "                <button type=\"button\"class=\"btn btn-primary\" ng-show=\"!shellCtrl.loggedIn\" ng-click=\"shellCtrl.login()\"><i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i></button>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <!-- <div class=\"loginDropdown\">\r" +
    "\n" +
    "      <div class=\"container\">\r" +
    "\n" +
    "        <a href=\"javascript:;\" class=\"pull-right\">×</a>\r" +
    "\n" +
    "        <div class=\"col-sm-6\">\r" +
    "\n" +
    "          <h3>\r" +
    "\n" +
    "                Not a Member Yet?\r" +
    "\n" +
    "              </h3> Prospective investors can apply <a>here</a>.\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-sm-6\">\r" +
    "\n" +
    "          <input name=\"_username\" type=\"text\" placeholder=\"E-mail\" id=\"INPUT_7\" />\r" +
    "\n" +
    "              <input name=\"_password\" type=\"password\" placeholder=\"Password\" id=\"INPUT_8\" />\r" +
    "\n" +
    "              <div id=\"DIV_9\">\r" +
    "\n" +
    "                <button type=\"submit\" id=\"BUTTON_10\">\r" +
    "\n" +
    "                  Log in\r" +
    "\n" +
    "                </button> <a href=\"/en/password-reset-request/\" id=\"A_11\">Forgot password?</a>\r" +
    "\n" +
    "              </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div> -->\r" +
    "\n" +
    "    <!-- Fixed navbar -->\r" +
    "\n" +
    "    <nav class=\"navbar navbar-default navbar-fixed-top\">\r" +
    "\n" +
    "      <div class=\"container\">\r" +
    "\n" +
    "        <div class=\"navbar-header\">\r" +
    "\n" +
    "          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\r" +
    "\n" +
    "            <span class=\"sr-only\">Toggle navigation</span>\r" +
    "\n" +
    "            <span class=\"icon-bar\"></span>\r" +
    "\n" +
    "            <span class=\"icon-bar\"></span>\r" +
    "\n" +
    "            <span class=\"icon-bar\"></span>\r" +
    "\n" +
    "          </button>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div id=\"navbar\" class=\"navbar-collapse collapse nav-overlay\">\r" +
    "\n" +
    "          <ul class=\"nav navbar-nav\">\r" +
    "\n" +
    "            \r" +
    "\n" +
    "            <li ng-if=\"shellCtrl.loggedIn\"><a href ng-click=\"shellCtrl.getUserVisit()\" class=\"menu-icon invest-icon\">Invest Now</a></li>\r" +
    "\n" +
    "            <li ng-if=\"shellCtrl.loggedIn\"><a href ng-link=\"['Dashboard']\" class=\"menu-icon dashboard-icon\">My Dashboard</a></li>\r" +
    "\n" +
    "            <li ng-if=\"shellCtrl.loggedIn\"><a href ng-link=\"['Payment']\" class=\"menu-icon payment-icon\">My Payments</a></li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <li><a href ng-link=\"['HowItWorks']\" class=\"menu-icon howitworks-icon\">HOW IT WORKS</a></li>\r" +
    "\n" +
    "            <li><a href ng-link=\"['AboutUs']\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i> ABOUT US</a></li>\r" +
    "\n" +
    "          </ul>\r" +
    "\n" +
    "        </div><!--/.nav-collapse -->\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "    </nav>\r" +
    "\n" +
    "</header>\r" +
    "\n"
  );


  $templateCache.put('app/login/login.html',
    "<div class=\"modal fade in login-signup-modal\" id=\"loginSignupModal\">\r" +
    "\n" +
    "    <div class=\"modal-dialog\">\r" +
    "\n" +
    "        <div class=\"modal-content clearfix\">\r" +
    "\n" +
    "            <div class=\"modal-body\">\r" +
    "\n" +
    "                <span class=\"modal-close-icon\">\r" +
    "\n" +
    "                    <i class=\"fa fa-times font_2em\" data-dismiss=\"modal\" aria-hidden=\"true\"></i>\r" +
    "\n" +
    "                </span>\r" +
    "\n" +
    "                <div class=\"col-md-5 l-col hidden-sm hidden-xs\">\r" +
    "\n" +
    "                    <img src=\"../img/loansingh-mustache.png\" alt=\"loansingh-mustache\" class=\"mustache-img\" />\r" +
    "\n" +
    "                    <p class=\"desc text-left\">Invest in Loan Singh and earn great returns!</p>\r" +
    "\n" +
    "                    <ul>\r" +
    "\n" +
    "                        <!-- <li>Frictionless Process</li> -->\r" +
    "\n" +
    "                        <li>Frictionless Process</li>\r" +
    "\n" +
    "                        <li>Easy EMI tracking</li>\r" +
    "\n" +
    "                        <li>Customize your own portfolio</li>\r" +
    "\n" +
    "                    </ul>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"col-xs-12 col-sm-12 col-md-7 r-col  {{loginCtrl.processing == true ? 'loading-wrap' : ''}} \">\r" +
    "\n" +
    "                    <div class=\"modal-form-section\">\r" +
    "\n" +
    "                        <div class=\"tab-container\" ng-hide=\"loginCtrl.nonTabActive\">\r" +
    "\n" +
    "                            <ul class=\"nav nav-tabs lr-modal-tabs\">\r" +
    "\n" +
    "                                <li class=\"active\">\r" +
    "\n" +
    "                                    <a data-toggle=\"tab\" target=\"_self\" ng-href=\"#login-tab\" ng-click=\"loginCtrl.resetForm('signup');\">Log in</a>\r" +
    "\n" +
    "                                </li>\r" +
    "\n" +
    "                                <li>\r" +
    "\n" +
    "                                    <a data-toggle=\"tab\" target=\"_self\" ng-href=\"#signup-tab\" ng-click=\"loginCtrl.resetForm('login')\">Sign Up</a>\r" +
    "\n" +
    "                                </li>\r" +
    "\n" +
    "                            </ul>\r" +
    "\n" +
    "                            <div class=\"tab-content\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div id=\"login-tab\" class=\"tab-pane fade active in\">\r" +
    "\n" +
    "                                    <form name=\"loginCtrl.frmLogin\" id=\"loginCtrl.frmLogin\" novalidate>\r" +
    "\n" +
    "                                        <div class=\"form-group\">\r" +
    "\n" +
    "                                            <label for=\"txtUserMobileOrEmail\">Enter your Mobile or Email</label>\r" +
    "\n" +
    "                                            <input type=\"text\" id=\"txtUserMobileOrEmail\" name=\"txtUserMobileOrEmail\" ng-model=\"loginCtrl.user.mobOrEmail\" class=\"form-control\" placeholder=\"Mobile number\"  autofocus required autocomplete=\"off\"\r" +
    "\n" +
    "                                            ng-pattern=\"loginCtrl.regexMobileEmail\" />\r" +
    "\n" +
    "                                            \r" +
    "\n" +
    "\r" +
    "\n" +
    "                                            <div class=\"error-msg\" ng-messages=\"loginCtrl.frmLogin.$submitted && loginCtrl.frmLogin.txtUserMobileOrEmail.$error\">\r" +
    "\n" +
    "                                                <div ng-message=\"required\">Please enter mobile no or email address</div>\r" +
    "\n" +
    "                                                <div ng-message=\"pattern\">Please enter 10 digit number or valid email address</div>\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        <div class=\"form-group\">\r" +
    "\n" +
    "                                            <label for=\"txtPassword\">Loan Singh Password</label>\r" +
    "\n" +
    "                                            <input type=\"password\" id=\"txtPassword\" name=\"txtPassword\" ng-model=\"loginCtrl.user.password\" class=\"form-control\"  autofocus required placeholder=\"Password\" />\r" +
    "\n" +
    "                                            \r" +
    "\n" +
    "                                            <div class=\"error-msg\" ng-messages=\"loginCtrl.frmLogin.$submitted && loginCtrl.frmLogin.txtPassword.$error\">\r" +
    "\n" +
    "                                                <div ng-message=\"required\">Please enter password</div>\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                        \r" +
    "\n" +
    "                                            <div class=\"clearfix\">\r" +
    "\n" +
    "                                                <p class=\"pull-left error-msg\" ng-show=\"loginCtrl.loginServerErrorMsg\" ng-bind=\"loginCtrl.loginServerErrorMsg\"></p><!-- for showing server side error -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                                <p class=\"pull-right links-box\">\r" +
    "\n" +
    "                                                    <a href ng-click=\"loginCtrl.forgotPwdTrigger();\">Forgot Password ? </a>\r" +
    "\n" +
    "                                                    <span class=\"hide\"> / <a href ng-click=\"loginCtrl.createNewPwdTrigger();\">Create a new password</a></span>\r" +
    "\n" +
    "                                                </p>\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        <div class=\"text-center center-block\"><button class=\"btn btn-modal-big login-btn text-uppercase\" type=\"submit\" ng-disabled=\"loginCtrl.frmLogin.$submitted && loginCtrl.frmLogin.$invalid\" ng-click=\"loginCtrl.submitLogin(loginCtrl.frmLogin)\">Login</button></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    </form> <!-- /. login-form end -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <div class=\"clearfix\"></div>\r" +
    "\n" +
    "                                </div> <!-- /. login tab end -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div id=\"signup-tab\" class=\"tab-pane\">\r" +
    "\n" +
    "                                    <form name=\"loginCtrl.frmSignup\" id=\"loginCtrl.frmSignup\" id=\"signup-form\" novalidate ng-hide=\"loginCtrl.showSignupOTPPanel\">\r" +
    "\n" +
    "                                        \r" +
    "\n" +
    "                                        <p class=\"text-success text-center\" ng-show=\"loginCtrl.alreadyRegisterUserFlag===true\" ng-hide=\"loginCtrl.frmSignup.$valid || loginCtrl.frmSignup.$invalid \"><span ng-bind=\"loginCtrl.alreadyRegisterUserMsg\"></span> <!-- Please <a data-toggle=\"tab\" target=\"_self\" href=\"#login-tab\" ng-click=\"loginCtrl.resetForm('signup');\">Login</a> --></p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        <div class=\"form-group\">\r" +
    "\n" +
    "                                            <label for=\"txtSignupMobileNo\">Mobile number</label>\r" +
    "\n" +
    "                                            <input type=\"number\" min=\"0\" name=\"txtSignupMobileNo\" id=\"txtSignupMobileNo\" ng-model=\"loginCtrl.modSignup.mobileno\" class=\"form-control\" ng-maxlength=\"10\" ng-minlength=\"10\" required autocomplete=\"off\" ng-pattern=\"/^\\d*$/\" placeholder=\"Mobile number\"/>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                            <div class=\"error-msg\" ng-messages=\"loginCtrl.frmSignup.$submitted && loginCtrl.frmSignup.txtSignupMobileNo.$error\">\r" +
    "\n" +
    "                                                <div ng-message=\"required\">Please enter mobile number</div>\r" +
    "\n" +
    "                                                <div ng-message=\"number\">Only digits allowed</div>\r" +
    "\n" +
    "                                                <div ng-message=\"minlength\">Minimum 10 digit numbers only</div>\r" +
    "\n" +
    "                                                <div ng-message=\"maxlength\">Maximum 10 digit numbers only</div>\r" +
    "\n" +
    "                                                <div ng-message=\"pattern\">Only digits allowed</div>\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                        </div>                                    \r" +
    "\n" +
    "                                        <div class=\"form-group\" ng-hide=\"loginCtrl.changeOTPMobileField\">\r" +
    "\n" +
    "                                            <label for=\"txtSignupEmailId\">Email ID</label>\r" +
    "\n" +
    "                                            <input type=\"email\" name=\"txtSignupEmailId\" id=\"txtSignupEmailId\" ng-model=\"loginCtrl.modSignup.email\" class=\"form-control\" required placeholder=\"Email id\" ng-pattern=\"/^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$/\" />\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                            <div class=\"error-msg\" ng-messages=\"loginCtrl.frmSignup.$submitted && loginCtrl.frmSignup.txtSignupEmailId.$error\">\r" +
    "\n" +
    "                                                <div ng-message=\"required\">Please enter email id</div>\r" +
    "\n" +
    "                                                <div ng-message=\"pattern\">Please enter valid email id</div>\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                       <!--  <div class=\"form-group\">\r" +
    "\n" +
    "                                            <label>Loan Singh Password</label>\r" +
    "\n" +
    "                                            <input type=\"password\" name=\"txtSignupPassword\" id=\"txtSignupPassword\" ng-model=\"loginCtrl.modSignup.password\" class=\"form-control\" required />\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                            <div class=\"error-msg\" ng-messages=\"loginCtrl.frmSignup.$submitted && loginCtrl.frmSignup.txtSignupPassword.$error\">\r" +
    "\n" +
    "                                                <div ng-message=\"required\">Please enter password</div>\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                        </div> -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        <div class=\"text-center center-block\">\r" +
    "\n" +
    "                                            <button ng-hide=\"loginCtrl.changeOTPMobileField\" type=\"submit\" class=\"btn btn-modal-big\" id=\"btnCreateAccount\" ng-click=\"loginCtrl.submitSignup(loginCtrl.frmSignup,'saveSignup')\" ng-disabled=\"loginCtrl.frmSignup.$submitted && loginCtrl.frmSignup.$invalid\">Create your loan singh Account</button>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                            <button  ng-show=\"loginCtrl.changeOTPMobileField\" type=\"submit\" class=\"btn btn-modal-big\" id=\"btnCreateAccount\" ng-click=\"loginCtrl.submitSignup(loginCtrl.frmSignup,'saveChangeMobNo')\" ng-disabled=\"loginCtrl.frmSignup.$submitted && loginCtrl.frmSignup.$invalid\">Save</button>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    </form> <!-- /. signup-form end -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <form name=\"loginCtrl.frmSignupOTP\" ng-show=\"loginCtrl.showSignupOTPPanel\" novalidate>\r" +
    "\n" +
    "                                        <p class=\"policy-text\" ng-hide=\"loginCtrl.changeOTPMobileField\" ng-submit=\"loginCtrl.submitSignupOTPVerify(loginCtrl.frmSignupOTP)\">Enter One Time Password(OTP) sent to your mobile number {{loginCtrl.modSignup.mobileno}} or <a href ng-click=\"loginCtrl.changeMobileNoTrigger();\">change your mobile number</a></p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    \r" +
    "\n" +
    "                                        <div ng-hide=\"loginCtrl.changeOTPMobileField\">\r" +
    "\n" +
    "                                            <div class=\"form-group form-group-otp\">\r" +
    "\n" +
    "                                                <label for=\"txtSignupOTP\">OTP</label>\r" +
    "\n" +
    "                                                <input type=\"password\" name=\"txtSignupOTP\" id=\"txtSignupOTP\" class=\"form-control text-center\" ng-model=\"loginCtrl.modSignupOTP\" required placeholder=\"- - - -\" maxlength=\"4\" ng-minlength=\"4\" />\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                                <div class=\"error-msg\" ng-messages=\"loginCtrl.frmSignupOTP.$submitted && loginCtrl.frmSignupOTP.txtSignupOTP.$error\">\r" +
    "\n" +
    "                                                    <div ng-message=\"required\">Please enter OTP</div>\r" +
    "\n" +
    "                                                    <div ng-message=\"minlength\">Minimum 4 digits allowed</div>\r" +
    "\n" +
    "                                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                                <div class=\"error-msg\" ng-if=\"loginCtrl.invalidOTPMsgFlag\" ng-class=\"{'hide': loginCtrl.frmSignupOTP.$invalid}\">Invalid OTP</div>\r" +
    "\n" +
    "                                                <!-- ng-class=\"{'hide': loginCtrl.frmSignupOTP.$invalid || loginCtrl.modSignupOTP}\" -->\r" +
    "\n" +
    "                                                \r" +
    "\n" +
    "                                                <!-- <div class=\"success-msg\" ng-show=\"loginCtrl.modSignupOTP == loginCtrl.tempOTP\">Valid OTP</div> -->\r" +
    "\n" +
    "                                                <div class=\"success-msg\" ng-show=\"loginCtrl.OTPResendMsgFlag\">OTP resent successfully</div>\r" +
    "\n" +
    "                                                <!--  -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                            <div class=\"form-group center-block text-center\" ng-show=\"loginCtrl.showSignupResendOTPPanel\"> <!--  -->\r" +
    "\n" +
    "                                                <span class=\"timer-text\">0:<span  ng-bind=\"loginCtrl.OTPTimer\"></span></span> <a href \r" +
    "\n" +
    "                                                ng-click=\"loginCtrl.OTPTimer !== 0 || loginCtrl.resendSignupOTP(loginCtrl.frmSignupOTP);\" ng-disabled=\"loginCtrl.OTPTimer !== 0\">Resend OTP</a>\r" +
    "\n" +
    "                                                <!-- loginCtrl.OTPTimer !== 0 || loginCtrl.resendSignupOTP(); -->\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                            <div class=\"text-center center-block\">\r" +
    "\n" +
    "                                                <button type=\"submit\" class=\"btn btn-modal-big\" ng-disabled=\"loginCtrl.frmSignupOTP.$submitted && loginCtrl.frmSignupOTP.$invalid && loginCtrl.modSignupOTP != loginCtrl.tempOTP\" ng-click=\"loginCtrl.submitSignupOTPVerify(loginCtrl.frmSignupOTP)\">Verify</button>\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </form><!-- /. signup OTP verify form end -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <form name=\"loginCtrl.frmChangeMobile\" novalidate ng-show=\"loginCtrl.changeOTPMobileField\" ng-submit=\"loginCtrl.frmChangeMobile.$valid && loginCtrl.submitChangeMobile(loginCtrl.frmChangeMobile)\">\r" +
    "\n" +
    "                                        <div class=\"form-group\">\r" +
    "\n" +
    "                                            <label for=\"txtOTPMobileNo\">Mobile number</label>\r" +
    "\n" +
    "                                            <input type=\"number\" name=\"txtOTPMobileNo\" id=\"txtOTPMobileNo\" class=\"form-control\" ng-model=\"loginCtrl.modSignup.newmobileno\" required ng-maxlength=\"10\" ng-minlength=\"10\" placeholder=\"Mobile number\"/>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                            <div class=\"error-msg\" ng-messages=\"loginCtrl.frmChangeMobile.$submitted && loginCtrl.frmChangeMobile.txtOTPMobileNo.$error\">\r" +
    "\n" +
    "                                                <div ng-message=\"required\">Please enter mobile number</div>\r" +
    "\n" +
    "                                                <div ng-message=\"number\">Only digits allowed</div>\r" +
    "\n" +
    "                                                <div ng-message=\"minlength\">Minimum 10 digit numbers only</div>\r" +
    "\n" +
    "                                                <div ng-message=\"maxlength\">Maximum 10 digit numbers only</div>\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                        <div class=\"clearfix\">\r" +
    "\n" +
    "                                        <button type=\"submit\" class=\"btn btn-modal-big\">Save</button>\r" +
    "\n" +
    "                                        <a href ng-click=\"loginCtrl.changeOTPMobileField=false\" class=\"pull-right cancel-link\">Cancel</a>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    </form> <!-- / Change mobile form end-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                </div> <!-- /. signup tab end -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                \r" +
    "\n" +
    "                                <div class=\"terms-block text-center\" ng-hide=\"loginCtrl.showSignupOTPPanel\">\r" +
    "\n" +
    "                                    By Signing up you agree to our <a href=\"javascript:void(0)\">T&C</a> and <a href=\"javascript:void(0)\">Privacy Policy</a>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div class=\"clearfix\"></div>\r" +
    "\n" +
    "                            </div> <!-- /. tab-content end -->\r" +
    "\n" +
    "                        </div> <!-- /. tab-container end -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"non-tab-container hide\" ng-class=\"{'show' : loginCtrl.nonTabActive}\">\r" +
    "\n" +
    "                            \r" +
    "\n" +
    "                            <form name=\"loginCtrl.frmForgotPassword\" class=\"forgot-password-panel\" ng-if=\"loginCtrl.showForgotPwdPanel\" novalidate ng-hide=\"loginCtrl.showForgotPwdSuccessPanel\">\r" +
    "\n" +
    "                                <h4>Forgot Password ?</h4>\r" +
    "\n" +
    "                                <p class=\"inline-text\">We will send a link on your fed email to reset your password.</p>\r" +
    "\n" +
    "                                <div class=\"form-group\">\r" +
    "\n" +
    "                                    <label for=\"txtForogtPwdEmail\">Enter your Email</label>\r" +
    "\n" +
    "                                    <input type=\"email\" class=\"form-control\" id=\"txtForogtPwdEmail\" name=\"txtForogtPwdEmail\" ng-model=\"loginCtrl.modForgotPwdEmail\" ng-pattern=\"/^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$/\" required placeholder=\"Email id\" />\r" +
    "\n" +
    "                                    \r" +
    "\n" +
    "                                    <div class=\"error-msg\" ng-messages=\"loginCtrl.frmForgotPassword.$submitted && loginCtrl.frmForgotPassword.txtForogtPwdEmail.$error\">\r" +
    "\n" +
    "                                        <div ng-message=\"required\">Please enter email id</div>\r" +
    "\n" +
    "                                        <div ng-message=\"pattern\">Please enter valid email id</div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <div class=\"error-msg\" ng-show=\"loginCtrl.forgotPwdWrongEmailMsg\" ng-class=\"{'hide': loginCtrl.frmForgotPassword.$invalid}\">Email address doesn't exists with us</div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div class=\"clearfix\">\r" +
    "\n" +
    "                                    <button type=\"submit\" class=\"btn btn-modal-big pull-right\" ng-click=\"loginCtrl.submitForgotPassword(loginCtrl.frmForgotPassword);\" ng-disabled=\"loginCtrl.frmForgotPassword.$submitted && loginCtrl.frmForgotPassword.$invalid\">Reset Password</button>\r" +
    "\n" +
    "                                    <a href ng-click=\"loginCtrl.backToLoginScreen(); loginCtrl.resetForm('forgotPwd');\" class=\"pull-right cancel-link\">Cancel</a>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </form> <!-- /. forgot password form end -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <form name=\"loginCtrl.frmCreateNewPassword\" class=\"create-new-password-panel\" ng-show=\"loginCtrl.showCreateNewPwdPanel\" novalidate>\r" +
    "\n" +
    "                                <h4>Create New Password</h4>\r" +
    "\n" +
    "                                <div class=\"form-group\">\r" +
    "\n" +
    "                                    <label for=\"txtCreateNewPwd\">New Password</label>\r" +
    "\n" +
    "                                    <input type=\"password\" class=\"form-control\" name=\"txtCreateNewPwd\" id=\"txtCreateNewPwd\" ng-model=\"loginCtrl.createPassword.newPassword\" required />\r" +
    "\n" +
    "                                    \r" +
    "\n" +
    "                                    <div class=\"error-msg\" ng-messages=\"loginCtrl.frmCreateNewPassword.$submitted && loginCtrl.frmCreateNewPassword.txtCreateNewPwd.$error\">\r" +
    "\n" +
    "                                        <div ng-message=\"required\">Please enter new password</div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div class=\"form-group\">\r" +
    "\n" +
    "                                    <label for=\"txtCreateConfirmNewPwd\">Confirm New Password</label>\r" +
    "\n" +
    "                                    <input type=\"password\" class=\"form-control\" name=\"txtCreateConfirmNewPwd\" id=\"txtCreateConfirmNewPwd\" ng-model=\"loginCtrl.createPassword.confirmPassword\" required match=\"loginCtrl.createPassword.newPassword\" />\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <div class=\"error-msg\" ng-messages=\"loginCtrl.frmCreateNewPassword.$submitted && loginCtrl.frmCreateNewPassword.txtCreateConfirmNewPwd.$error\">\r" +
    "\n" +
    "                                        <div ng-message=\"required\">Please enter new password</div>\r" +
    "\n" +
    "                                        <div ng-message=\"match\">Password does not matched</div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div class=\"clearfix\">\r" +
    "\n" +
    "                                    <button type=\"submit\" class=\"btn btn-modal-big pull-right\" ng-disabled=\"loginCtrl.frmCreateNewPassword.$submitted && loginCtrl.frmCreateNewPassword.$invalid\" ng-click=\"loginCtrl.submitCreatePassword(loginCtrl.frmCreateNewPassword)\">Login</button>\r" +
    "\n" +
    "                                    <!-- <a href ng-click=\"loginCtrl.backToLoginScreen();\" class=\"cancel-link pull-right\">Cancel</a> -->\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </form> <!-- /. create new password form end -->\r" +
    "\n" +
    "                          \r" +
    "\n" +
    "                            <div class=\"only-msg-panel\" ng-show=\"loginCtrl.showVerifyEmailPanel\">\r" +
    "\n" +
    "                                <h4>Please Verify your email</h4>\r" +
    "\n" +
    "                                <p>We have sent you an email verification link to your mailbox. Please click on verify your account link. <a href ng-click=\"loginCtrl.changeEmailIDTrigger()\">change email ID</a> <a href ng-click=\"loginCtrl.backToLoginScreen(); loginCtrl.resetForm('forgotPwd');\">Login</a></p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <form name=\"loginCtrl.frmChangeEmailId\" novalidate ng-show=\"loginCtrl.showChangeEmailIdPanel\" ng-if=\"loginCtrl.successEmailIdFlag === false\">\r" +
    "\n" +
    "                                    <div class=\"form-group\">\r" +
    "\n" +
    "                                        <label for=\"txtChangeEmailId\">Email ID</label>\r" +
    "\n" +
    "                                        <input type=\"email\" name=\"txtChangeEmailId\" id=\"txtChangeEmailId\" ng-model=\"loginCtrl.modSignup.newemail\" class=\"form-control\" required ng-pattern=\"/^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$/\" />\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        <div class=\"error-msg\" ng-messages=\"loginCtrl.frmChangeEmailId.$submitted && loginCtrl.frmChangeEmailId.txtChangeEmailId.$error\">\r" +
    "\n" +
    "                                            <div ng-message=\"required\">Please enter email id</div>\r" +
    "\n" +
    "                                            <div ng-message=\"pattern\">Please enter valid email id</div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div class=\"clearfix\">\r" +
    "\n" +
    "                                        <button type=\"submit\" class=\"btn btn-modal-big\" ng-click=\"loginCtrl.submitChangeEmailId(loginCtrl.frmChangeEmailId)\">Save</button>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </form>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <!-- <div ng-hide=\"loginCtrl.showChangeEmailIdPanel\">\r" +
    "\n" +
    "                                    <button type=\"button\" class=\"btn btn-modal-big\" ng-click=\"loginCtrl.resendEmailAddress(loginCtrl.modSignup.email)\">Resend Email</button>\r" +
    "\n" +
    "                                </div> -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <p class=\"clearfix\"></p>\r" +
    "\n" +
    "                                <div class=\"alert alert-success\" ng-show=\"loginCtrl.successEmailIdFlag\">Email address updated successfully.</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div> <!-- /. verify signup email panel end --> \r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"only-msg-panel\" ng-show=\"loginCtrl.showForgotPwdSuccessPanel\">\r" +
    "\n" +
    "                                <h4>Forgot Password</h4>\r" +
    "\n" +
    "                                <p>We have sent you an email to your mailbox to reset your password. <a href ng-click=\"loginCtrl.backToLoginScreen(); loginCtrl.resetForm('forgotPwd');\">Login</a></p>\r" +
    "\n" +
    "                            </div> <!-- /. forgot password successfull sent panel end -->   \r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>  <!-- /. non-tab-container end -->\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"clearfix\"></div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('app/payment/payment.html',
    "<!-- for sub section/child components -->\r" +
    "\n" +
    "<div class=\"app-section fade-in-up ng-enter ng-enter-active\">\r" +
    "\n" +
    "    <article class=\"app-content\">\r" +
    "\n" +
    "        <div class=\"app-content-inner__child clearfix portfolio-section\">\r" +
    "\n" +
    "            <section class=\"payment-sec page-section\">\r" +
    "\n" +
    "                <div class=\"container\">\r" +
    "\n" +
    "                    <!-- <h1>Payment Page</h1> -->\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"payment-info\">\r" +
    "\n" +
    "                            <i class=\"fa fa-lightbulb-o\" aria-hidden=\"true\"></i>\r" +
    "\n" +
    "                            <p ng-if=\"!paymentCtrl.modSuccessPayment\"> THANK YOU!  For making disbursement we will verify the transaction and get back to you.<br/>You can now track your <a class=\"btn btn-default\" ng-link=\"['Dashboard']\">Dashboard</a></p>\r" +
    "\n" +
    "                            \r" +
    "\n" +
    "                            <div ng-if=\"paymentCtrl.modSuccessPayment\">\r" +
    "\n" +
    "                                <!-- <h4>THANK YOU!</h4> -->\r" +
    "\n" +
    "                                <p>Thank you for making disbursement. We will verify the transaction and get back to you.</p>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"heading\">\r" +
    "\n" +
    "                            <p>Borrower's Payment</p>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"payment-details-sec col-md-12 no-padding\">\r" +
    "\n" +
    "                            <div class=\"col-md-4 bank-details-sec\">\r" +
    "\n" +
    "                                <p class=\"beneficiary-border\">Beneficiary Details</p>\r" +
    "\n" +
    "                                <div class=\"beneficiary-data beneficiary-border\" ng-repeat=\"data in paymentCtrl.beneficiary\">\r" +
    "\n" +
    "                                    <p>{{data.dispName}}:</p>\r" +
    "\n" +
    "                                    <p>{{data.value}}</p>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"col-md-8 borrower-details-sec\">\r" +
    "\n" +
    "                                <div ng-show=\"paymentCtrl.paymentObj.length == 0\" class=\"cart_empty\">Looks like your cart is empty!<br/>You can<br/><a class=\"btn btn-primary\" ng-link=\"['Invest']\">Click To Invest</a><a class=\"btn btn-round-corner-tb\" ng-link=\"['Dashboard']\">See Dashboard</a></div>\r" +
    "\n" +
    "                                <div ng-show=\"paymentCtrl.paymentObj.length != 0\" class=\"detail-container\">\r" +
    "\n" +
    "                                    <div class=\"detail-table\">\r" +
    "\n" +
    "                                        <div class=\"borrower-info-wrapper \">\r" +
    "\n" +
    "                                            <div class=\"details-row top-row\">\r" +
    "\n" +
    "                                                <div class=\"details-column\">\r" +
    "\n" +
    "                                                    <p><img src=\"img/profile_icon.png\"/> Name</p>\r" +
    "\n" +
    "                                                </div>\r" +
    "\n" +
    "                                                <div class=\"details-column\">\r" +
    "\n" +
    "                                                    <p style=\"text-align:right;width: 50%;\"><img src=\"img/rupee_icon.png\"/> Amount\r" +
    "\n" +
    "                                                </div>\r" +
    "\n" +
    "                                                <div class=\"details-column\">\r" +
    "\n" +
    "                                                    <p><img src=\"img/tenure_icon.png\"/> Tenure</p>\r" +
    "\n" +
    "                                                </div>\r" +
    "\n" +
    "                                                <div class=\"details-column\">\r" +
    "\n" +
    "                                                    <p><img src=\"img/interest_icon.png\"/> Interest</p></p>\r" +
    "\n" +
    "                                                </div>\r" +
    "\n" +
    "                                                <div class=\"details-column\">        \r" +
    "\n" +
    "                                                </div>\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                            <div class=\"details-row\" ng-repeat=\"data in paymentCtrl.paymentObj\">\r" +
    "\n" +
    "                                                <div class=\"details-column\">\r" +
    "\n" +
    "                                                    <p>{{data.name}}</p>\r" +
    "\n" +
    "                                                </div>\r" +
    "\n" +
    "                                                <div class=\"details-column\">\r" +
    "\n" +
    "                                                    <p style=\"text-align:right;width: 50%;\">{{data.invested_amount}}</p>\r" +
    "\n" +
    "                                                </div>\r" +
    "\n" +
    "                                                <div class=\"details-column\">\r" +
    "\n" +
    "                                                    <p>{{data.tenure}} Months</p>\r" +
    "\n" +
    "                                                </div>\r" +
    "\n" +
    "                                                <div class=\"details-column\">\r" +
    "\n" +
    "                                                    <p>{{data.rate_of_interest}}%</p>\r" +
    "\n" +
    "                                                </div>\r" +
    "\n" +
    "                                                <div class=\"details-column\">\r" +
    "\n" +
    "                                                    <button class=\"delBut\" type=\"button\" ng-click=\"paymentCtrl.deleteBorrower(data.id)\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></button>\r" +
    "\n" +
    "                                                </div>\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div class=\"borrower-info-wrapper\" ng-if=\"paymentCtrl.paymentObj.length>0\">\r" +
    "\n" +
    "                                        <div class=\"details-row\">\r" +
    "\n" +
    "                                            <div class=\"details-column\">\r" +
    "\n" +
    "                                                <p>LoanSingh Fees</p>\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                            <div class=\"details-column\">\r" +
    "\n" +
    "                                                <p style=\"text-align:right;width: 50%;\">500</p>\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                            <div class=\"details-column\">\r" +
    "\n" +
    "                                                <p></p>\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                            <div class=\"details-column\">\r" +
    "\n" +
    "                                                <p></p>\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div class=\"fee-content pull-right\" ng-if=\"paymentCtrl.paymentObj.length>0\">\r" +
    "\n" +
    "                                        <p><span>Total</span><span>{{paymentCtrl.totalAmount}}</span></p>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"payment-confirm\">\r" +
    "\n" +
    "                            <input type=\"checkbox\" ng-model=\"paymentCtrl.paymentDone\" name=\"chkPaymentAcceptance\" id=\"chkPaymentAcceptance\" />\r" +
    "\n" +
    "                            <button type=\"button\" class=\"btn btn-success\" ng-class=\"{'disabled': !paymentCtrl.paymentDone}\" ng-model=\"paymentCtrl.modSuccessPayment\" ng-click=\"paymentCtrl.modSuccessPayment = true\">I have successfully made the payment</button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"clearfix\"></div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </section>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <!-- app-content-inner__child end -->\r" +
    "\n" +
    "    </article>\r" +
    "\n" +
    "    <!-- app-content end -->\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<!-- app-section -->\r" +
    "\n"
  );


  $templateCache.put('app/set_password/set-password.html',
    "<div style=\"width:30%; margin:50px auto;\">\r" +
    "\n" +
    "<form name=\"pwdCtrl.frmCreateNewPassword\" class=\"create-new-password-panel\" ng-show=\"pwdCtrl.showCreateNewPwdPanel\" novalidate ng-submit=\"pwdCtrl.frmCreateNewPassword.$valid && pwdCtrl.submitCreatePassword()\">\r" +
    "\n" +
    "    <h4>Create New Password</h4>\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "        <label for=\"txtCreateNewPwd\">New Password</label>\r" +
    "\n" +
    "        <input type=\"password\" class=\"form-control\" name=\"txtCreateNewPwd\" id=\"txtCreateNewPwd\" ng-model=\"pwdCtrl.createPassword.newPassword\" required />\r" +
    "\n" +
    "        \r" +
    "\n" +
    "        <div class=\"error-msg\" ng-messages=\"pwdCtrl.frmCreateNewPassword.$submitted && pwdCtrl.frmCreateNewPassword.txtCreateNewPwd.$error\">\r" +
    "\n" +
    "            <div ng-message=\"required\">Please enter new password</div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "        <label for=\"txtCreateConfirmNewPwd\">Confirm New Password</label>\r" +
    "\n" +
    "        <input type=\"password\" class=\"form-control\" name=\"txtCreateConfirmNewPwd\" id=\"txtCreateConfirmNewPwd\" ng-model=\"pwdCtrl.createPassword.confirmPassword\" required match=\"pwdCtrl.createPassword.newPassword\" />\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"error-msg\" ng-messages=\"pwdCtrl.frmCreateNewPassword.$submitted && pwdCtrl.frmCreateNewPassword.txtCreateConfirmNewPwd.$error\">\r" +
    "\n" +
    "            <div ng-message=\"required\">Please enter new password</div>\r" +
    "\n" +
    "            <div ng-message=\"match\">Password does not match</div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"clearfix\">\r" +
    "\n" +
    "        <button type=\"submit\" class=\"btn btn-modal-big pull-right\" ng-disabled=\"pwdCtrl.frmCreateNewPassword.$submitted && pwdCtrl.frmCreateNewPassword.$invalid\">Set Password</button>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</form> <!-- /. create new password form end -->\r" +
    "\n" +
    "<p ng-if=\"pwdCtrl.emailLinkExpired\">Your link is expired.</p>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/set_password/set-pwd.html',
    "<div style=\"width:30%; margin:50px auto;\">\r" +
    "\n" +
    "<form name=\"pwdCtrl.frmCreateNewPassword\" class=\"create-new-password-panel\" ng-show=\"pwdCtrl.showCreateNewPwdPanel\" novalidate ng-submit=\"pwdCtrl.frmCreateNewPassword.$valid && pwdCtrl.submitCreatePassword()\">\r" +
    "\n" +
    "    <h4>Create New Password</h4>\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "        <label for=\"txtCreateNewPwd\">New Password</label>\r" +
    "\n" +
    "        <input type=\"password\" class=\"form-control\" name=\"txtCreateNewPwd\" id=\"txtCreateNewPwd\" ng-model=\"pwdCtrl.createPassword.newPassword\" required />\r" +
    "\n" +
    "        \r" +
    "\n" +
    "        <div class=\"error-msg\" ng-messages=\"pwdCtrl.frmCreateNewPassword.$submitted && pwdCtrl.frmCreateNewPassword.txtCreateNewPwd.$error\">\r" +
    "\n" +
    "            <div ng-message=\"required\">Please enter new password</div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "        <label for=\"txtCreateConfirmNewPwd\">Confirm New Password</label>\r" +
    "\n" +
    "        <input type=\"password\" class=\"form-control\" name=\"txtCreateConfirmNewPwd\" id=\"txtCreateConfirmNewPwd\" ng-model=\"pwdCtrl.createPassword.confirmPassword\" required match=\"pwdCtrl.createPassword.newPassword\" />\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"error-msg\" ng-messages=\"pwdCtrl.frmCreateNewPassword.$submitted && pwdCtrl.frmCreateNewPassword.txtCreateConfirmNewPwd.$error\">\r" +
    "\n" +
    "            <div ng-message=\"required\">Please enter new password</div>\r" +
    "\n" +
    "            <div ng-message=\"match\">Password does not match</div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"clearfix\">\r" +
    "\n" +
    "        <button type=\"submit\" class=\"btn btn-modal-big pull-right\" ng-disabled=\"pwdCtrl.frmCreateNewPassword.$submitted && pwdCtrl.frmCreateNewPassword.$invalid\">Set Password</button>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</form> <!-- /. create new password form end -->\r" +
    "\n" +
    "<p ng-if=\"pwdCtrl.emailLinkExpired\">Your link is expired.</p>\r" +
    "\n" +
    "</div>"
  );

}]);
