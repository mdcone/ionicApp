angular.module('commonAbstractions', [])
  .directive('commonListPage', function () {
    return {
      restrict: 'E',
      scope: {
        viewTitle: '@',
        resource: '@'
      },
      link: function (scope, elem, attrs) {
        console.log('Getting data for resource ' + scope.resource);
        var promise = scope.dataGrabber.resourceGet(scope.resource);
          promise.then(function (data) {
            console.log(data);
            scope.data = data.data;

          }, function (err) {
            console.log(err);
          });
      },
      controller: function ($scope, dataGrabber) {
          $scope.dataGrabber = dataGrabber;
      },
      inject: ['$scope', 'dataGrabber'],
      templateUrl: 'templates/commonListPage.html'
    }
  });
