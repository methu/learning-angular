app.controller("myCtrl", function($scope) {
  $scope.name = "Alan";
  $scope.em = "loikpac@gmail.com";

  $scope.edit = {};
  $scope.edit.target_stores = [1,2,3,4,5];
  $scope.edit.related_brands = [
    {
      name: "brand1",
      stores: [
        {
          id: 1,
          name: "store1"
        },
        {
          id: 2,
          name: "store2"
        }
      ]
    },
    {
      name: "brand2",
      stores: [
        {
          id: 3,
          name: "store3"
        },
        {
          id: 4,
          name: "store4"
        }
      ]
    },
    {
      name: "brand3",
      stores: [
        {
          id: 5,
          name: "store5"
        },
        {
          id: 6,
          name: "store6"
        }
      ]
    }];

    $scope.checkStore = function(store) {
      if (store.in_article) {
        console.log('add store #' + store.id + ' to target_stores');
      } else {
        var index = $scope.edit.target_stores.indexOf(store.id);
        if (index !== -1) {
          console.log('remove store #' + store.id + ' from target_stores');
        }
      }
    };
});