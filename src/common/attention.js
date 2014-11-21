/**
 * Very illustrative common directive
 */
angular.module('common').directive('attention', function() {
  return {
    scope: {
      color: '@attention'
    },
    restrict: 'A',
    link: function(scope, element, attrs) {
      element.css('border', 'solid 5px ' + scope.color);
    }
  }
});
