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

  $scope.getLink = function (shortenedUrl) {
    //look for shortenedUlr in list of links
    //if found, redirect browser to the full url
    //if not found then render "invalid shortened url page"
  } 

  if (!Auth.isAuth()) {
    $location.path('/signin');
  } else {
    $scope.getLinks();
  }

});
