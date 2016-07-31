"use strict";

app.controller("ItemListCtrl", function(FirebaseURL, $http, $scope, AuthFactory, ItemStorage) {

  let refreshItems = function() {
    ItemStorage.getItemList()
    .then(function(itemCollection){
      $scope.items = itemCollection;
    });
  };

  //checks to see if user is logged in on page load, & works on refreshing the page
  firebase.auth().onAuthStateChanged(function(){
    refreshItems();
  });

  $scope.deleteItem = function(thingy) {
    console.log("thingy", thingy.id);
    $http.delete(`${FirebaseURL}items/${thingy.id}.json`).success(function() {
      refreshItems();
    });
  };
});
