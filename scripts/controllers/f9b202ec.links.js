'use strict';

augebitPrototypeApp.controller('LinksCtrl', function($scope, Link) {
  $scope.links = Link.query(function() {});
});
