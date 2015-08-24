// TODO : change style dynamically
(function(angular) {
  'use strict';
  angular.module('ngSpin.rotPlane', [])
    .directive('rotPlane', function directive() {
      return {
        restrict : 'AE',
        replace : true,
        scope : {
          spinWidth : '@',
          spinHeight : '@',
          spinSpeed : '@'
        },  
        template : '<div class="sk-spinner sk-spinner-rotating-plane"></div>',
        link : function link(scope, elem, attrs) {

        }
      }
    });
})(angular);
