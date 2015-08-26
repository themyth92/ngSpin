(function(angular) {
  'use strict';
  angular.module('ngSpin.skWave', [])
    .directive('skWave', function directive() {
      return {
        restrict : 'AE',
        replace : true,
        template : ['<div class="sk-spinner sk-spinner-wave">',
                    '<div class="sk-rect1"></div>',
                    '<div class="sk-rect2"></div>',
                    '<div class="sk-rect3"></div>',
                    '<div class="sk-rect4"></div>',
                    '<div class="sk-rect5"></div>',
                    '</div>'].join(''),
        link : function link(scope, elem, attrs) {
          
          // get width, height and speed from user
          var width = attrs.spinWidth || 5;
          var height = attrs.spinHeight || 50;
          var color = attrs.spinColor || '333';
          var margin = attrs.spinMargin || 3;
          var skRectElem = elem.find('div');

          // change colum height 
          elem.css({
            'height' : height + 'px'
          });

          // change colum width and color
          skRectElem.css({
            'width' : width + 'px',
            'background-color' : '#' + color,
            'margin' : '0 ' + margin + 'px 0 0'
          });
        } 
      };
    });
})(angular);
