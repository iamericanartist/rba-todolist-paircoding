"use strict";

var app = angular.module("TodoApp", ["ngRoute"])
.constant("FirebaseURL", "https://ng-todo-demo-98429.firebaseio.com/");

app.config(function($routeProvider, FBCreds) {     // $routeProvider is intrinsic to Angular
  let authConfig = {
    apiKey: FBCreds.apiKey,
    authDomain: FBCreds.authDomain
  };
  firebase.initializeApp(authConfig);
  
  $routeProvider.
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
    otherwise('/items/list');
});
