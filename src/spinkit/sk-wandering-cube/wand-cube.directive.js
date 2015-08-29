(function(angular) {
  'use strict';
  angular.module('ngSpin.skWandCube', [])
    .directive('skWandCube', function directive() {
      return {
        restrict : 'AE',
        replace : true,
        template : ['<div class="sk-wandering-cubes">',
                    '<div class="sk-cube1 sk-cube"></div>',
                    '<div class="sk-cube2 sk-cube"></div>',
                    '</div>'].join(''),
        link : function link(scope, elem, attrs) {
          var width = attrs.spinWidth || 10;
          var height = attrs.spinHeight || 10;
          var color = attrs.spinColor || '333';
          var cubeElem = elem.find('div');

          cubeElem.css({
            'width' : width + 'px',
            'height' : height + 'px',
            'background-color' : '#' + color
          });
        } 
      };
    });
})(angular);
