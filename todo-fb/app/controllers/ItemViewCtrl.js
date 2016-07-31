"use strict";

app.controller("ItemViewCtrl", function($scope, $routeParams, ItemStorage){    //routeParams gives us access to address bar after "//"

  $scope.items = [];
  // $scope.selectedItem = {};

  ItemStorage.getItemList()
  .then(function(itemCollection){
    $scope.items = itemCollection;

    $scope.selectedItem = $scope.items.filter(function(item){
      console.log("ItemViewCtrl- $scope.items", $scope.items);
      return item.id === $routeParams.itemId;
    })[0];
  });
});