app.controller("myCtrl", function($scope) {
  $scope.todoList = [];
  $scope.doneList = [];
  $scope.addTodo = function(next) {
    if (!$scope.doneList.includes(next) && !$scope.todoList.includes(next)) {
      $scope.todoList.push(next);
    }
  }
  $scope.addDone = function(item) {
    var index = $scope.todoList.indexOf(item);
    if (index >= 0) {
      $scope.todoList.splice(index, 1);
      $scope.doneList.push(item);
    }
  }
  $scope.undone = function(item) {
    var index = $scope.doneList.indexOf(item);
    if (index >= 0) {
      $scope.doneList.splice(index, 1);
      $scope.todoList.push(item);
    }
  }
});
