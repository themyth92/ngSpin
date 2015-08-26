(function(angular) {
  'use strict';
  angular.module('ngSpin.skChaseDot', [])
    .directive('skChaseDot', function directive() {
      return {
        restrict : 'AE',
        replace : true,
        template : ['<div class="sk-spinner sk-spinner-chasing-dots">',
                    '<div class="sk-dot1"></div>',
                    '<div class="sk-dot2"></div>',
                    '</div>'].join(''),
        link : function link(scope, elem, attrs) {
          var radius = attrs.spinRadius || 20;
          var color = attrs.spinColor || '333';
          var speed = attrs.spinSpeed || 2;
          var dot1Elem = angular.element(elem[0].querySelector('.sk-dot1'));
          var dot2Elem = angular.element(elem[0].querySelector('.sk-dot2'));
          var delay = speed/2;

          // change css style 
          elem.css({
            'width' : radius*2 + 'px',
            'height' : radius*2 + 'px',
            '-webkit-animation' : 'sk-chasingDotsRotate ' +  speed + 's infinite linear',
            'animation' : 'sk-chasingDotsRotate ' + speed + 's infinite linear'
          });

          dot1Elem.css({
            '-webkit-animation' : 'sk-chasingDotsBounce ' + speed + 's infinite ease-in-out',
            'animation' : 'sk-chasingDotsBounce ' + speed + 's infinite ease-in-out',
            'background-color' : '#' + color
          });

          dot2Elem.css({
            '-webkit-animation' : 'sk-chasingDotsBounce ' + speed + 's infinite ease-in-out',
            'animation' : 'sk-chasingDotsBounce ' + speed + 's infinite ease-in-out',
            '-webkit-animation-delay' : '-' + delay + 's',
            'animation-delay' : '-' + delay + 's',
            'background-color' : '#' + color
          });
        } 
      };
    });
})(angular);
