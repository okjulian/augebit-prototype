'use strict';

augebitPrototypeApp.controller('MainCtrl', function($scope) {
  $scope.save = function() {
    if ($scope.userEmail !== undefined) {
      Parse.initialize('lywqlwHwaizR1HHTv1dYQtzSrkDJRkArdI3QfMpR', '5bpXBKHHfhD4QESUr4LYQI1kYaxvniTvXycrdB8l');

      var EmailObject = Parse.Object.extend('EmailObject');
      var emailObject = new EmailObject();
      var email = $scope.userEmail;
      emailObject.save({email: email});
      $scope.userEmail = '';
    }
  };

  $scope.isSaveDisabled = function() {
    return $scope.emailForm.$invalid;
  };
});
