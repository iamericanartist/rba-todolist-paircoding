"use strict";

app.controller("LoginCtrl", function($scope, $location, AuthFactory){

$scope.userLogin = function () {
  AuthFactory.authWithProvider()
    .then(function(result) {
      AuthFactory.setUser(result.user.uid);
      console.log("logged in user fer sure", AuthFactory.currentUserId);
      $location.path("items/list");
      $scope.$apply();
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  };
});
