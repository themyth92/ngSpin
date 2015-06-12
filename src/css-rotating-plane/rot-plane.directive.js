(function(){

  'use strict';

  angular
    .module('ngSpin', [])
    .directive('spRotatingPlane', RotatingPlane);

    function RotatingPlane() {
      
      return {
        restrict : 'AE',
        scope : {
          options : '=spOptions',
          show    : '=spRotatingPlane' 
        },

        template : '<span class = "sk-spinner-rotating-plane sk-spinner" ng-show = "show"></span>',
        link : function(scope, elem){

          activate();

          //============================
          
          function activate() {

            changeCssStyleOnUserOption();
          }

          function changeCssStyleOnUserOption() {

            if(scope.options.size) {

              elem.css('width' : scope.options.size);
              elem.css('height' : scope.options.size);
            }

            if(scope.options.speed) {

              elem.css('-webkit-animation', 'sk-rotatePlane ' + scope.options.speed + 's infinite ease-in-out';
              elem.css('animation', 'sk-rotatePlane' + scope.options.speed + 's infinite ease-in-out');
            }
          }
        }
      }
    } 
});
