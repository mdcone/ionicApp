// This is the narcissisticController module.
angular.module('dylan.controllers', [])

.controller('MusicCtrl', function($scope) {
  
})
  
.controller('DataCtrl', [ '$scope', 'dataGrabber', function ($scope, dataGrabber) {
  $scope.data = [
    { title: 'Reggaee', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
}])
  
.controller('TrophyCtrl', function ($scope) {
  
});
