angular.module('commonAbstractions', [])
  .directive('commonListPage', function () {
    return {
      restrict: 'E',
      scope: {
        viewTitle: '@',
        resource: '@'
      },
      controller: function ($scope, dataGrabber) {
          // Get the data.. yes this only grabs it once per use
          var promise = dataGrabber.resourceGet($scope.resource);
          promise.then(function (data) {
            console.log(data);
            $scope.data = data.data;

          }, function (err) {
            console.log(err);
          });
      },
      inject: ['$scope', 'dataGrabber'],
      templateUrl: 'templates/commonListPage.html'
    }
  });
