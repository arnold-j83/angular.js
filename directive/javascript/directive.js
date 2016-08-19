angular.module('myDirectives', []).directive('myHello', function() {
  return {
    //template: '<div>Hello John</div>',
    templateUrl: 'template/template1.html',
    restrict: 'E'
  };
});