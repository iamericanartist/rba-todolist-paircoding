"use strict";
app.factory("ItemStorage", function(FirebaseURL, $q, $http){    //"$q" is angular "Promise"

  let getItemList = function () {
    let items = [];
    return $q(function(resolve, reject){
      $http.get(`${FirebaseURL}/items.json`)
      .success(function(itemObject){
        let itemCollection = itemObject;
        Object.keys(itemCollection).forEach(function(key){     //Object.keys loops through the array and makes keys
          itemCollection[key].id=key;
          items.push(itemCollection[key]);
        });
        console.log("asdf=", items );
        resolve(items);
      })
      .error(function(error){
        reject(error);
      });
    });
  };

  let postNewItem = function (newTask) {
    return $q(function(resolve, reject){
      $http.post(`${FirebaseURL}/items.json`,
        JSON.stringify(newTask))
      .success(function(ObjFromFirebase){
        resolve(ObjFromFirebase)
      })
      .error(function(error){
        reject(error);
      });
    });
  };

  return {getItemList, postNewItem};
});

