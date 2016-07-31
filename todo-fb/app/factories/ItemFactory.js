"use strict";

app.factory("ItemStorage", function(FirebaseURL, $q, $http, AuthFactory){    //"$q" is angular "Promise"

  let getItemList = function (){
    let userId = AuthFactory.getUser();
    let items = [];
    return $q(function(resolve, reject){
      $http.get(`${FirebaseURL}items.json?orderBy="uid"&equalTo="${userId}"`)
      .success(function(itemObject){
        console.log("itemObject", itemObject);

        let itemCollection = itemObject;
        //this assures that if the database is empty, there will be no error when it tries to push null into the empty array
        if (itemCollection){
        Object.keys(itemCollection).forEach(function(key){     //Object.keys loops through the array and makes keys
          itemCollection[key].id=key;
          items.push(itemCollection[key]);
        });
        }
        resolve(items);
      })
      .error(function(error){
        reject(error);
      });
    });
  };

  let postNewItem = function (newTask){
    return $q(function(resolve, reject){
      $http.post(
        `${FirebaseURL}/items.json`,
        JSON.stringify(newTask))
      .success(function(ObjFromFirebase){
        resolve(ObjFromFirebase);
      })
      .error(function(error){
        reject(error);
      });
    });
  };

  return {getItemList, postNewItem};
});
