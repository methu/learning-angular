app.controller("myCtrl", function($scope) {
  $scope.todoList = [];
  $scope.doneList = [];
  $scope.addTodo = function(next) {
    if (next && !$scope.doneList.includes(next) && !$scope.todoList.includes(next)) {
      $scope.todoList.push(next);
    }
  }
  $scope.addDone = function(item, index) {
    if ($scope.todoList.includes(item)) {
      $scope.todoList.splice(index, 1);
      $scope.doneList.push(item);
    }
  }
  $scope.undone = function(item, index) {
    if ($scope.doneList.includes(item)) {
      $scope.doneList.splice(index, 1);
      $scope.todoList.push(item);
    }
  }
});

app.filter("capitalize", function() {
  return function(item) {
    var c = item[0];
    return c.toUpperCase() + item.slice(1);
  };
});
