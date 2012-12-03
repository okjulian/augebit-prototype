'use strict';

augebitPrototypeApp.controller('MainCtrl', function($scope) {
  $scope.save = function() {
    if (emailForm.$invalid === false) {
      Parse.initialize('lywqlwHwaizR1HHTv1dYQtzSrkDJRkArdI3QfMpR', '5bpXBKHHfhD4QESUr4LYQI1kYaxvniTvXycrdB8l');

      var EmailObject = Parse.Object.extend('EmailObject');
      var emailObject = new EmailObject();
      var email = $scope.userEmail;
      emailObject.save({email: email});
    }
  };

  $scope.isSaveDisabled = function() {
    return $scope.emailForm.$invalid;
  };
});
