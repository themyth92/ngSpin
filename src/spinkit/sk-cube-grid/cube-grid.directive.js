(function(angular) {
  'use strict';
  angular.module('ngSpin.skCubeGrid', [])
    .directive('skCubeGrid', function directive() {
      return {
        restrict : 'AE',
        replace : true,
        template : ['<div class="sk-cube-grid">',
                    '<div class="sk-cube sk-cube1"></div>',
                    '<div class="sk-cube sk-cube2"></div>',
                    '<div class="sk-cube sk-cube3"></div>',
                    '<div class="sk-cube sk-cube4"></div>',
                    '<div class="sk-cube sk-cube5"></div>',
                    '<div class="sk-cube sk-cube6"></div>',
                    '<div class="sk-cube sk-cube7"></div>',
                    '<div class="sk-cube sk-cube8"></div>',
                    '<div class="sk-cube sk-cube9"></div>',
                    '</div>'].join(''),
        link : function link(scope, elem, attrs) {
          var width = attrs.spinWidth || 30;
          var height = attrs.spinHeight || 30;
          var color = attrs.spinColor || '333';
          var cubeElem = elem.find('div');

          // change css style of the whole element
          elem.css({
            'width' : width + 'px',
            'height' : height + 'px'
          });

          cubeElem.css({
            'background-color' : '#' + color
          });
        } 
      };
    });
})(angular);
