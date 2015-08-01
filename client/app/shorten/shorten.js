angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  
  $scope.addLink = function(link) {
    Links.addLink(link);
  };

  $scope.signout = function () {
    Auth.signout();
    return false;
  }

});
