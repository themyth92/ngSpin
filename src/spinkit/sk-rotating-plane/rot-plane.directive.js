(function(angular) {
  'use strict';
  angular.module('ngSpin.skRotPlane', [])
    .directive('skRotPlane', function directive() {
      return {
        restrict : 'AE',
        replace : true,
        template : '<div class="sk-spinner sk-spinner-rotating-plane"></div>',
        link : function link(scope, elem, attrs) {
          
          // get width, height and speed from user
          var width = attrs.spinWidth || 30;
          var height = attrs.spinHeight || 30;
          var speed = attrs.spinSpeed || 1.2;
          var color = attrs.spinColor || '333';

          // change css style 
          elem.css({
            'width' : width + 'px',
            'height' : height + 'px',
            '-webkit-animation' : 'sk-rotatePlane ' + speed + 's infinite ease-in-out',
            'animation' : 'sk-rotatePlane ' + speed + 's infinite ease-in-out',
            'background-color' : '#' + color
          });
        } 
      };
    });
})(angular);
