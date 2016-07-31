"use strict";

app.controller("LoginCtrl", function($scope, $location, AuthFactory){

});

AuthFactory.authWithProvider()
  .then(function(result) {
    var user = result.user.uid;
    console.log("logged in user fer sure", user);
    // Load to dos?
    $location.path("/");        //possible issue?
    $scope.$apply();
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });


    // Update FB rules
    // Add delete functionality
    // Finish adding login with Google
    // Add user id to new items when saving
    // Only show user's todo items
    
// will need STILL

// Stretch goal
// Add email/password register/login
// check box - done items

