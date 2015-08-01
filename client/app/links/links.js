angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth, $location) {

  $scope.data = {};
  $scope.data.links = [];

  $scope.getLinks = function () {

    Links.getLinks()
      .then(function (links) {
        $scope.data.links = links;
        return $scope.data.links;
      });

  };

  $scope.signout = function () {
    Auth.signout();
    return false;
  }

  if (!Auth.isAuth()) {
    $location.path('/signin');
  } else {
    $scope.getLinks();
  }

});
