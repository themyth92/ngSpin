(function(angular) {
  'use strict';
  angular.module('ngSpin.skCircle', [])
    .directive('skCircle', ['$document', function directive($document) {
      return {
        restrict : 'AE',
        replace : true,
        template : ['<div class="sk-spinner sk-spinner-circle">',
                    '<div class="sk-circle1 sk-circle"></div>',
                    '<div class="sk-circle2 sk-circle"></div>',
                    '<div class="sk-circle3 sk-circle"></div>',
                    '<div class="sk-circle4 sk-circle"></div>',
                    '<div class="sk-circle5 sk-circle"></div>',
                    '<div class="sk-circle6 sk-circle"></div>',
                    '<div class="sk-circle7 sk-circle"></div>',
                    '<div class="sk-circle8 sk-circle"></div>',
                    '<div class="sk-circle9 sk-circle"></div>',
                    '<div class="sk-circle10 sk-circle"></div>',
                    '<div class="sk-circle11 sk-circle"></div>',
                    '<div class="sk-circle12 sk-circle"></div>',
                    '</div>'].join(''),
        link : function link(scope, elem, attrs) {
          var color = attrs.spinColor;
          var boundRadius = attrs.spinBoundRadius || 11; 

          // change css style of the whole element
          elem.css({
            'width' : boundRadius*2 + 'px',
            'height' : boundRadius*2 + 'px'
          });

          // due to ::before selector can not be selected by javascript to change style and to change the 
          // color of the circle, we need to modify it, we need to add css rule to document
          // This is only a work around, user should change css style directly
          if(color) {
            document.styleSheets[0].addRule('div.sk-spinner-circle .sk-circle:before','background-color: #' + color + ';');  
          }
        } 
      };
    }]);
})(angular);
