app.controller("myCtrl", function($scope) {
  $scope.todoList = ["learn AngularJS", "learn Python", "learn PostgreSQL"];
  $scope.doneList = [];
  $scope.edit = [];
  
  /**
   * add an item to the Todo list
   * conditions:
   *   - next is not empty nor a string of space
   *   - next doesn't exist in the Todo list already
   *   - next doesn't exist in the Done list already
   */
  $scope.addTodo = function() {
    if (!$scope.next) {
      $scope.errorText = "Can't add empty todo.";
    } else if ($scope.doneList.includes($scope.next)) {
      $scope.errorText = "The item is done already.";
    } else if ($scope.todoList.includes($scope.next)) {
      $scope.errorText = "The item is already in the list.";
    } else {
      $scope.todoList.push($scope.next);
      $scope.edit.push(false);
      $scope.next = '';
      $scope.errorText = '';
    }
  }

  /**
   * move an item from Todo to Done list
   * param:
   *   - index: the index of the string in the Todo list
   */
  $scope.addDone = function(index) {
    var item = $scope.todoList[index];
    $scope.todoList.splice(index, 1);
    $scope.edit.splice(index, 1);
    $scope.doneList.push(item);
    $scope.errorText = '';
  }

  /**
   * move an item from Done to Todo list
   * param:
   *   - index: the index of the string in the Done list
   */
  $scope.undone = function(index) {
    var item = $scope.doneList[index];
    $scope.doneList.splice(index, 1);
    $scope.todoList.push(item);
    $scope.edit.push(false);
    $scope.errorText = '';
  }

  /**
  * delete an item from the Todo list
  * param:
  *   - index: the index of the string in the Todo list
  */
  $scope.deleteTodo = function(index) {
    $scope.todoList.splice(index, 1);
    $scope.edit.splice(index, 1);
    $scope.errorText = '';
  }

  /**
   * delete an item from the Done list
   * param:
   *   - index: the index of the string in the Done list
   */
  $scope.deleteDone = function(index) {
    $scope.doneList.splice(index, 1);
    $scope.errorText = '';
  }

  /**
   * check keypress
   * param:
   *   - $event: the event object
   * conditions:
   *   - if enter key is pressed at the main input, add next to Todo list
   *   - if enter key is pressed at the item input, change the item string and show the new string
   */
  $scope.checkKeyPress = function($event, index) {
    var keyCode = $event.which || $event.keyCode;
    if (keyCode === 13) {
      if (index === undefined) {
        $scope.addTodo($scope.next);
      } else {
        var editedItem = $event.target.value.trim();
        if (!$scope.todoList.includes(editedItem)){
          $scope.todoList[index] = editedItem;
          $scope.edit[index] = false;
          $scope.errorText = '';
        } else if (index != $scope.todoList.indexOf(editedItem)) {
          $scope.errorText = "The item is already in the list.";
        } else {
          $scope.errorText = '';
          $scope.edit[index] = false;
        }
      }
    }
  }
});

app.filter("capitalize", function() {
  return function(item) {
    var c = item[0];
    return c.toUpperCase() + item.slice(1);
  };
});
