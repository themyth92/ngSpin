(function(angular) {

  angular
    .module('ngSpin')
    .provide('ngSpinProvider', NgSpinProvider);

  function NgSpinProvider(ngSpin) {

    var _this = this;

    _this.options = {
      'rotating-plane' 
    }

    _this.setTemplateHTML = setTemplateHTML;
    _this.$get = $get;

    //=================
    
    function setTemplateHtml(spinName, templateUrl){

    }

    $get.$inject = ['ngSpin'];

    function $get(ngSpin) {

      return ngSpin;
    }
  }

})(angular);
