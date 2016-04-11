
angular.module('commonAbstractions', [])
.directive('commonListPage', function () {
  return {
    restrict: 'E',
    scope: {
      viewTitle: '@'
    },
    link: function (scope, elem, attrs) {
      scope.data = scope.$parent.data;
    },
    templateUrl: 'templates/commonListPage.html'
  }
});
