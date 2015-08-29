(function(angular) {
  'use strict';
  angular.module('ngSpin.skFoldCube', [])
    .directive('skFoldCube', function directive() {
      return {
        restrict : 'AE',
        replace : true,
        template : ['<div class="sk-folding-cube">',
                    '<div class="sk-cube1 sk-cube"></div>',
                    '<div class="sk-cube2 sk-cube"></div>',
                    '<div class="sk-cube4 sk-cube"></div>',
                    '<div class="sk-cube3 sk-cube"></div>',
                    '</div>'].join(''),
        link : function link(scope, elem, attrs) {
          var color = attrs.spinColor || '333';

          // due to ::before selector can not be selected by javascript to change style and to change the 
          // color of the circle, we need to modify it, we need to add css rule to document
          // This is only a work around, user should change css style directly
          if(color) {
            document.styleSheets[0].addRule('div.sk-folding-cube .sk-cube:before','background-color: #' + color + ';');  
          }
        } 
      };
    });
})(angular);
