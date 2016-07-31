"use strict";

var app = angular.module("TodoApp", ["ngRoute"])    // LINK TO 'NG-VIEW' IN THE DOM
.constant("FirebaseURL", "https://ng-todo-demo-98429.firebaseio.com/");

app.config(function($routeProvider, FBCreds) {     // $routeProvider is intrinsic to Angular
  let authConfig = {
    apiKey: FBCreds.apiKey,
    authDomain: FBCreds.authDomain
  };
  firebase.initializeApp(authConfig);
  
  $routeProvider.
    when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'LoginCtrl'
    }).
    when("/items/list", {
      templateUrl: "partials/item-list.html",
      controller: "ItemListCtrl"
    }).
    when("/items/new", {
      templateUrl: "partials/item-new.html",
      controller: "ItemNewCtrl"
    }).
    when("/items/details/:itemId", {              //whatever is after the slash save with that id
      templateUrl: "partials/item-details.html",
      controller: "ItemViewCtrl"
    }).
    otherwise('/login');
});

//what is this doing below???
app.controller('TodoCtrl', function($scope) {
  $scope.showListView = true;
 
  $scope.allItem = function() {
  console.log("You clicked all item");
  $scope.showListView = true;
};

  $scope.newItem = function() {
    console.log("You clicked new Item");
    $scope.showListView = false;
  };
});
