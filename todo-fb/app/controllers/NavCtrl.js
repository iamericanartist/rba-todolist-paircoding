"use strict";

app.controller("NavCtrl", function($scope) {
  $scope.navItems = [
    {
      name: "Log In",
      url: "#"
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
});

//must put "#" before so the PAGE DOESN'T RELOAD