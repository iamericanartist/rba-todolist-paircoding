"use strict";

app.controller("NavCtrl", function($scope) {
  $scope.navItems = [
    {
      name: "Logout",
      url: "#/login"
    }, 
    {
      name: "All Items",
      url: "#/items/list"
    }, 
    {
      name: "New Items",
      url: "#/items/new"
    }
  ];

  $scope.logout = function() {
    firebase.auth().signOut().then(function(){
      console.log("Logout Successful");
    }, function(error) {
      console.log("Logout Error");
    });
  };
});

//must put "#" before so the PAGE DOESN'T RELOAD