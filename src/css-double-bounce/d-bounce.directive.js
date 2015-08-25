(function(angular) {
  'use strict';
  angular.module('ngSpin.dBounce', [])
    .directive('dBounce', function directive() {
      return {
        restrict : 'AE',
        replace : true,
        template : ['<div class="sk-spinner sk-spinner-double-bounce">',
                    '<div class="sk-double-bounce1"></div>',
                    '<div class="sk-double-bounce2"></div>',
                    '</div>'].join(''),
        link : function link(scope, elem, attrs) {
          var radius = attrs.spinRadius || 20;
          var color = attrs.spinColor || '333';
          var speed = attrs.spinSpeed || 2;
          var delay = speed/2;
          var skDoubleBounce1Elem = angular.element(elem[0].querySelector('.sk-double-bounce1'));
          var skDoubleBounce2Elem = angular.element(elem[0].querySelector('.sk-double-bounce2'));

          // change css style of the whole element
          elem.css({
            'width' : radius*2 + 'px',
            'height' : radius*2 + 'px'
          });

          // change color and speed of the circle inside element
          skDoubleBounce1Elem.css({
            'background-color' : '#' + color,
            '-webkit-animation' : 'sk-doubleBounce ' + speed + 's infinite ease-in-out',
            'animation' : 'sk-doubleBounce ' + speed + 's infinite ease-in-out',

          });

          skDoubleBounce2Elem.css({
            'background-color' : '#' + color,
            '-webkit-animation' : 'sk-doubleBounce ' + speed + 's infinite ease-in-out',
            'animation' : 'sk-doubleBounce ' + speed + 's infinite ease-in-out',
            '-webkit-animation-delay': '-' + delay + 's',
            'animation-delay': '-' + delay + 's'
          });
        } 
      };
    });
})(angular);
