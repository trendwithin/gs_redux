(function(){
  var app = angular.module('product-directives',[ ]);
  app.directive('productTitle', function() {
    return{
      restrict: 'E',
      templateUrl: 'product-title.html'
    };
  });
  app.directive('productForm', function() {
    return{
      restrict: 'E',
      templateUrl: 'product-form.html'
    };
  });
  app.directive('productPanel', function() {
  return{
    restrict: 'E',
    templateUrl: 'product-panel.html',
    controller:function(){

    },
    controllerAs: 'panel'
    };
  });
})();
