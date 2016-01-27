angular.module('nsi-app.controllers', [])


.controller('artistCtrl', function ($scope, $ionicModal, $timeout, ArtisNagaswara) {

    $scope.scrollTop = function () {
        $ionicScrollDelegate.scrollTop(true);
    };


    //----------------------------  
    $scope.items = [];

    ArtisNagaswara.getArtist().then(function (items) {
        items.sort(function (a, b) {
            var textA = a.user.name.first.toUpperCase();
            var textB = b.user.name.first.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        })

        $scope.dividerFunction = function (key) {
            return key;
        }

        $scope.items = items;
    });
    

})

.controller('menuCtrl', function($scope, $ionicModal, $timeout) {

    //Login
      $scope.loginData = {};

      $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
      }).then(function(modal) {
        $scope.modal = modal;
      });

      $scope.closeLogin = function() {
        $scope.modal.hide();
      };

      $scope.login = function() {
        $scope.modal.show();
      };

      $scope.doLogin = function() {
        console.log('Doing login', $scope.loginData);

        $timeout(function() {
          $scope.closeLogin();
        }, 1000);
      };

})


//buat global loading
.config(function ($httpProvider) {
    $httpProvider.interceptors.push(function ($rootScope) {
        return {

            //http request show loading
            request: function (config) {
                $rootScope.$broadcast('loading:show')
                return config
            },

            //hide loading in case any occurred
            requestError: function (response) {
                alert("requestError");
                $rootScope.$broadcast('loading:hide')
                return response
            },

            //Hide loading once got response
            response: function (response) {
                $rootScope.$broadcast('loading:hide')
                return response
            },

            //Hide loading if got any response error 
            responseError: function (response) {
                alert("responseError");
                $rootScope.$broadcast('loading:hide')
                return response
            }

        }
    })
})

