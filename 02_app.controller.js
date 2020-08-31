app.controller("myCtrl", function($scope) {
  $scope.name = "Alan";
  $scope.em = "loikpac@gmail.com";

  $scope.edit = {};
  $scope.edit.target_stores = [];
  $scope.brands = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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

    var storeMap = {
      1: {
        id: 1,
        brand_id: 1
      },
      2: {
        id: 2,
        brand_id: 1
      },
      5: {
        id: 5,
        brand_id: 3
      },
      6: {
        id: 6,
        brand_id: 3
      }
    };

    var brandMap = {};
    _.each($scope.brands, b => brandMap[b.id] = b);

    $scope.checkStore = function(store) {
      if (store.in_article) {
        $scope.edit.target_stores = _.union($scope.edit.target_stores, [store.id]);
      } else {
        $scope.edit.target_stores = _.without($scope.edit.target_stores, store.id);
      }
    };

    $scope.$watch('edit.related_brands', function(nv, ov) {
      var brands = _.difference(ov, nv);
      _.each(brands, b => {
        _.each(b.stores, s => {
          s.in_article = false;
          $scope.edit.target_stores = _.without($scope.edit.target_stores, s.id);
        });
      });
    });

    $scope.updateTargets = function() {
      var store_ids = [];
      var stores = _.map(store_ids, s_id => storeMap[s_id]);
      console.log(stores);
    }
});