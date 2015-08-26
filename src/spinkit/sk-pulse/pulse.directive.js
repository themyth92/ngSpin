(function(angular) {
  'use strict';
  angular.module('ngSpin.skPulse', [])
    .directive('skPulse', function directive() {
      return {
        restrict : 'AE',
        replace : true,
        template : ' <div class="sk-spinner sk-spinner-pulse"></div>',
        link : function link(scope, elem, attrs) {
          var radius = attrs.spinRadius || 20;
          var color = attrs.spinColor || '333';
          var speed = attrs.spinSpeed || 1;

          // change css style 
          elem.css({
            'width' : radius*2 + 'px',
            'height' : radius*2 + 'px',
            '-webkit-animation' : 'sk-pulseScaleOut ' + speed + 's infinite ease-in-out',
            'animation' : 'sk-pulseScaleOut ' + speed + 's infinite ease-in-out',
            'background-color' : '#' + color
          });
        } 
      };
    });
})(angular);
