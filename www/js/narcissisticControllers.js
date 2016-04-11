// This is the narcissisticController module.
angular.module('dylan.controllers', [])

.controller('MusicCtrl', function($scope) {

})

.controller('DataCtrl', [ '$scope', 'dataGrabber', function ($scope, dataGrabber) {
  
  
}])

.controller('LearningCtrl', ['$scope', '$ionicModal', 'stateMaintainer', '$timeout', function ($scope, $ionicModal, stateMaintainer, $timeout) {
  // Create the splash screen modal that we will use later
  $scope.$on('$ionicView.enter', function() {
    $ionicModal.fromTemplateUrl('templates/learningSplash.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    // Triggered in the splash modal to close it
    $scope.seenLearning = function () {
      $scope.modal.hide();
      stateMaintainer.setItem('splash-seen', true);
    };

    // Open the splash modal
    $scope.splash = function () {
      $scope.modal.show();
    };

    // Load the page and then show the screen
    $timeout(function () {
      if (!stateMaintainer.getItem('splash-seen')) {
        $scope.username = stateMaintainer.getItem('username') || 'stranger';
        $scope.splash();
      }
    }, 1000);
  });
}])

.controller('TrophyCtrl', function ($scope) {

});
