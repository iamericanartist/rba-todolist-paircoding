"use strict";

app.controller("ItemNewCtrl", function($scope, AuthFactory, ItemStorage, $location){

  $scope.newTask = {
    assignedTo: "",
    dependencies: "",
    dueDate: "",
    isCompleted: false,
    location: "",
    task: "",
    urgency: "",
    uid: AuthFactory.getUser()
  };

  $scope.addNewItem = function() {
    // $scope.newTask.isCompleted = false;
    // $scope.newTask.id = ItemStorage.getItemList().length;
    console.log("Added New Item", $scope.newTask);
    ItemStorage.postNewItem($scope.newTask)
    .then(function(response){
      $location.url("/items/list");
    });
  };
});
