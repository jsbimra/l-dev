/**
 *  @author Loan Singh
 *  @copyright 2016 lender.loansingh.com All right reserved.
 */
(function(angular) {

    "use strict";

    /**
     * @ngdoc directive
     * @namespace lsLenderApp
     * @desc Risk Meter directive
     */

    /* @ngInject */
    function riskMeterMethod() {
        // Runs during compile
        return {
            // name: '',
            // priority: 1,
            // terminal: true,
            scope: {}, // {} = isolate, true = child, false/undefined = no change
            bindToController: {
                risk: '='
            },
            controller: RiskMeterController,
            controllerAs: 'riskMeterCtrl',
            templateUrl: 'app/directives/risk_meter/risk-meter.directive.html',
            link: function($scope, iElm, iAttrs, controller, appFactory, APP_CONSTANT) {

            }
        };
    }; /* directive mehod end */

    /* @ngInject */
    function RiskMeterController($scope, $element, $attrs, $transclude, appFactory, APP_CONSTANT, $interval) {
        var vm = this;

        var layer1;
        var layer2;
        var layer3;
        var ctx1;
        var ctx2;
        var ctx3;
        var x = 130;
        var y = 130;
        var dx = 2;
        var dy = 4;
        var WIDTH = 130;
        var HEIGHT = 130;


        var totalSeg = 3;
        // one segment represents a risk category so divide degrees by no of segments
        var segmentWidth = (2.2 - 0.8) / totalSeg;
        // begin at 0.8 and end at one segment width
        var startAngle;
        var endAngle;
        var colorArray = ['#88c61c', '#e29823', '#ec1a26'];
        var riskArray = [16, 20, 24];
        var riskPosition;
        var i = 0.9 + (vm.risk - 12) / 2;
        var lineAngle;
        var lineEndAngle;
        var lineAngleCircum;
        var lineEndAngleCircum;
        var showSegments;
        var riskValue;
        var riskNeedleReverse;


        /**Function to redraw meter when redirected**/
        $scope.$on('reDrawMeter', function(event) {
            clearContext();
        });


        function init() {
            showSegments = true;
            startAngle = 0.8;
            endAngle = (0.8 + segmentWidth);
            if(!lineEndAngle)
                lineAngle = 0.55;
            else
               lineAngle = lineEndAngle;
            //lineEndAngle = 0.55;
            lineAngleCircum = 0.55;
            lineEndAngleCircum = 0.55;
            riskNeedleReverse = false;
            layer1 = document.getElementById("layer1");
            ctx1 = layer1.getContext("2d");
            layer2 = document.getElementById("layer2");
            ctx2 = layer2.getContext("2d");
            layer3 = document.getElementById("layer3");
            ctx3 = layer3.getContext("2d");

            
            drawAll();
        }

        function clearContext() {
            ctx1.setTransform(1, 0, 0, 1, 0, 0);
            ctx1.clearRect(0, 0, WIDTH, HEIGHT);
            init();
        }

        function drawAll() {
            drawGear();
            if (vm.risk == 0 || isNaN(vm.risk)) {
                lineEndAngle = 0.55;
            } else {
                lineEndAngle = ((((vm.risk - 12) / 2) * 0.23) + 0.55);
            }
            if(lineEndAngle<lineAngle)
                riskNeedleReverse = true;
           $interval(drawRiskNeedle, 100, 1); 
        }

        function drawGear() {
            //Start outer circle
            ctx1.beginPath();
            ctx1.translate(65, 65);
            ctx1.arc(0, 0, 53, 0, Math.PI * 2);
            ctx1.lineWidth = 7;
            ctx1.strokeStyle = '#514f4e';
            ctx1.stroke();
            //End outer circle

            //Start inner arc
            ctx1.beginPath();
            ctx1.arc(0, 0, 43, 0.8 * Math.PI, Math.PI * 2.2);
            ctx1.lineWidth = 5;
            ctx1.strokeStyle = "#514f4e";
            ctx1.stroke();
            //End arc

            drawCircumLines();

            //Draw segments
            drawSegments();

        }

        function drawCircumLines() {
            ctx3.lineWidth = 3;
            ctx3.lineCap = "round";
            var increment, angle, secHandLength, x1, x2, y1, y2;

            for (var i = 0; i < 7; i++) {

                increment = 0.8 + (segmentWidth / 2 * i);
                if (i == 0) {
                    increment += 0.01;
                }
                if (i == 6) {
                    increment -= 0.01;
                }

                angle = increment * Math.PI; // THE ANGLE TO MARK.
                ctx3.beginPath();
                secHandLength = 41.5;
                x1 = (WIDTH / 2) + Math.cos(angle) * (secHandLength);
                y1 = (HEIGHT / 2) + Math.sin(angle) * (secHandLength);
                x2 = (WIDTH / 2) + Math.cos(angle) * (secHandLength - (secHandLength / 8));
                y2 = (HEIGHT / 2) + Math.sin(angle) * (secHandLength - (secHandLength / 8));

                lineAngleCircum += 0.17;
                ctx3.moveTo(x1, y1);
                ctx3.lineTo(x2, y2);

                ctx3.strokeStyle = '#514f4e';
                ctx3.stroke();
            }

        }

        function drawRiskNeedle() {
            ctx2.setTransform(1, 0, 0, 1, 0, 0);
            ctx2.clearRect(0, 0, WIDTH, HEIGHT);
            //Start needle
            ctx2.beginPath();
            ctx2.translate(65, 65);
            ctx2.save();
            ctx2.rotate(lineAngle * Math.PI);

            ctx2.arc(0, 0, 4, 0, Math.PI * 2, false);
            ctx2.moveTo(-10, -10); // Start at the center
            ctx2.lineTo(20, 20); // Draw a line outwards
            ctx2.fillStyle = "#514f4e";
            ctx2.fill();
            ctx2.lineWidth = 3;
            ctx2.strokeStyle = "#514f4e";
            ctx2.stroke();
            ctx2.restore();
            if (lineAngle != lineEndAngle) {
                if (lineAngle+0.17 < lineEndAngle && !riskNeedleReverse) {
                    lineAngle += 0.17;
                } 
                else if (lineAngle-0.17 > lineEndAngle && riskNeedleReverse) {
                    lineAngle -= 0.17;
                }else {
                    lineAngle = lineEndAngle;
                    
                }
                $interval(drawRiskNeedle, 100, 1);
            }

            //Store riskValue Angle to temperary variable
            riskValue = lineEndAngle;

            //End needle
        }

        function drawSegments() {
            riskPosition=3;
            for (var i = 0; i < riskPosition; i++) {
                ctx1.save();
                ctx1.beginPath();
                ctx1.moveTo(0, 0);
                ctx1.arc(0, 0, 41, startAngle * Math.PI, endAngle * Math.PI, false);
                ctx1.lineTo(0, 0);
                ctx1.closePath();
                ctx1.lineWidth = 0;
                ctx1.fillStyle = colorArray[i];
                ctx1.fill();
                ctx1.restore();
                // increase per segment        
                startAngle += segmentWidth;
                endAngle += segmentWidth;
            }
        }

        init();

        $scope.$watch(
            function($scope) {
                // This becomes the value we're "watching".
                return (vm.risk);
            },
            function(newValue) {
                clearContext();
            }
        );

    };

    angular.module('lsLenderApp')
        .directive('riskMeter', [riskMeterMethod]);

})(window.angular);
