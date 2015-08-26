(function(angular) {
  'use strict';
  angular.module('ngSpin.skTBounce', [])
    .directive('skTBounce', function directive() {
      return {
        restrict : 'AE',
        replace : true,
        template : ['<div class="sk-spinner sk-spinner-three-bounce">',
                    '<div class="sk-bounce1"></div>',
                    '<div class="sk-bounce2"></div>',
                    '<div class="sk-bounce3"></div>',
                    '</div>'].join(''),
        link : function link(scope, elem, attrs) {
          var boundWidth = attrs.spinBoundWidth || 70;
          var radius = attrs.spinRadius || 9;
          var color = attrs.spinColor || '333';
          var speed = attrs.spinSpeed || 1.4;
          var bounceElem = elem.find('div');
          var bounce1Elem = angular.element(elem[0].querySelector('.sk-bounce1'));
          var bounce2Elem = angular.element(elem[0].querySelector('.sk-bounce2'));

          // change css style of the bounding 3 circles
          elem.css({
            'width' : boundWidth + 'px'
          });

          bounceElem.css({
            'width' : radius*2 + 'px',
            'height' : radius*2 + 'px',
            'background-color' : '#' + color,
            '-webkit-animation' : 'sk-threeBounceDelay ' + speed + 's infinite ease-in-out',
            'animation' : 'sk-threeBounceDelay ' + speed + 's infinite ease-in-out',
            '-webkit-animation-fill-mode' : 'both',
            'animation-fill-mode' : 'both'
          });

          bounce1Elem.css({
            '-webkit-animation-delay' : '-0.32s',
            'animation-delay' : '-0.32s'
          });

          bounce2Elem.css({
            '-webkit-animation-delay' : '-0.16s',
            'animation-delay' : '-0.16s'
          });          
        } 
      };
    });
})(angular);
