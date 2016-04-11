// This is the 
angular.module('dylan.controllers', [])

.controller('MusicCtrl', function($scope) {
  
})
  
.controller('LearningCtrl', function ($scope) {
  $scope.playlists = [
    { title: 'Reggaee', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})
  
.controller('TrophyCtrl', function ($scope) {
  
});
