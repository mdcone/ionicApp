// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 
  'starter.controllers',  
  'commonAbstractions', 
  'dylan.controllers', 
  'dataWarehouse'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('hello', {
    url: '/hello',
    templateUrl: 'templates/hello.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })

  .state('app.learning', {
    url: '/learning',
    views: {
      'menuContent': {
        templateUrl: 'templates/learning.html',
        controller: 'LearningCtrl'
      }
    }
  })
    .state('app.learning.books', {
      url: '/books',
      views: {
        'books-tab': {
          templateUrl: 'templates/learning/books.html',
          controller: 'DataCtrl'
        }
      }
    })

    .state('app.learning.interests', {
      url: '/interests',
      views: {
        'interests-tab': {
          templateUrl: 'templates/learning/interests.html',
          controller: 'DataCtrl'
        }
      }
    })

    .state('app.learning.podcasts', {
      url: '/podcasts',
      views: {
        'podcasts-tab': {
          templateUrl: 'templates/learning/podcasts.html',
          controller: 'DataCtrl'
        }
      }
    })

  .state('app.music', {
    url: '/music',
    views: {
      'menuContent': {
        templateUrl: 'templates/music.html',
        controller: 'MusicCtrl'
      }
    }
  })

  .state('app.trophies', {
    url: '/trophies',
    views: {
      'menuContent': {
        templateUrl: 'templates/trophies.html',
        controller: 'TrophyCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/hello');
});
