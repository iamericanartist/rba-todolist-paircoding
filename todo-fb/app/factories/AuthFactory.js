"use strict";

app.factory("AuthFactory", function(){

  let currentUserId = null;
  let provider = new firebase.auth.GoogleAuthProvider();
  console.log("provider", provider);

  firebase.auth().onAuthStateChanged(function(user){
    if (user){
      console.log("User logged in", user.uid);
      currentUserId = user.uid;
    } else {
      console.log("User not logged in");
      currentUserId = null;
    }
  });

  let authWithProvider = function() {
    return firebase.auth().signInWithPopup(provider);
  };

  let isAuthenticated = function() {
    return (currentUserId) ? true : false;
  };

  let getUser = function() {
    return currentUserId;
  };

  let setUser = function(input) {
    currentUserId = input;
  };

  return {authWithProvider, isAuthenticated, getUser, setUser};
});
