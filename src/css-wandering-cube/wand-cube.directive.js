(function(angular) {
  'use strict';
  angular.module('ngSpin.wandCube', [])
    .directive('wandCube', function directive() {
      return {
        restrict : 'AE',
        replace : true,
        template : ['<div class="sk-spinner sk-spinner-wandering-cubes">',
                    '<div class="sk-cube1"></div>',
                    '<div class="sk-cube2"></div>',
                    '</div>'].join(''),
        link : function link(scope, elem, attrs) {
          var width = attrs.spinCubeWidth || 10;
          var height = attrs.spinCubeHeight || 10;
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
