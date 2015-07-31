angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  $scope.data.links = [];

  $scope.getLinks = function () {

    Links.getLinks()
      .then(function (links) {
        $scope.data.links = links;
        return $scope.data.links;
      });
  };

  $scope.getLinks();
});
