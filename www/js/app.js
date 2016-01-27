// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

angular.module('nsi-app', ['ionic', 'nsi-app.controllers', 'nsi-app.services', 'nsi-app.directives'])

.run(function($ionicPlatform, $rootScope, $ionicLoading)  {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
    
     //Show loading
     $rootScope.$on('loading:show', function () {
         $ionicLoading.show({
             template: '<ion-spinner class="spinner-calm" icon="android"></ion-spinner>'
         })
     })

     //Hide loading
     $rootScope.$on('loading:hide', function () {
         $ionicLoading.hide()
     }) 
})

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');
    
    $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'menuCtrl'
  })

  .state('app.home', {
    url: "/home",
    views: {
      'home': {
        templateUrl: "templates/home.html"
      }
    }
  })

  .state('app.artist', {
    url: "/artist",
    views: {
      'artist': {
        templateUrl: "templates/artist.html",
          controller: 'artistCtrl'
      }
    }
  })

  .state('app.profile', {
    url: "/profile",
    views: {
      'artist': {
        templateUrl: "templates/profile.html"
      }
    }
  })
  
  .state('app.blog', {
    url: "/blog",
    views: {
      'blog': {
        templateUrl: "templates/blog.html"
      }
    }
  })
  
  .state('app.about', {
    url: "/about",
    views: {
      'about': {
        templateUrl: "templates/about.html"
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
