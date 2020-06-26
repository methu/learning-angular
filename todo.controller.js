app.controller("myCtrl", function($scope) {
  $scope.todoList = [];
  $scope.doneList = [];
  $scope.edit = [];
  
  /**
   * add an item to the Todo list
   * param:
   *   - next: a string to add
   * conditions:
   *   - next is not empty nor a string of space
   *   - next doesn't exist in the Todo list already
   *   - next doesn't exist in the Done list already
   */
  $scope.addTodo = function(next) {
    if (next && !$scope.doneList.includes(next) && !$scope.todoList.includes(next)) {
      $scope.todoList.push(next);
      $scope.edit.push(false);
      $scope.next = '';
      return true;
    }
    return false;
  }

  /**
   * move an item from Todo to Done list
   * param:
   *   - item: a string to move
   *   - index: the index of the string in the Todo list
   */
  $scope.addDone = function(item, index) {
    if ($scope.todoList.includes(item)) {
      $scope.todoList.splice(index, 1);
      $scope.edit.splice(index, 1);
      $scope.doneList.push(item);
      return true;
    }
    return false;
  }

  /**
   * move an item from Done to Todo list
   * param:
   *   - item: a string to move
   *   - index: the index of the string in the Done list
   */
  $scope.undone = function(item, index) {
    if ($scope.doneList.includes(item)) {
      $scope.doneList.splice(index, 1);
      $scope.todoList.push(item);
      $scope.edit.push(false);
      return true;
    }
    return false;
  }

  /**
  * delete an item from the Todo list
  * param:
  *   - index: the index of the string in the Todo list
  */
  $scope.deleteTodo = function(index) {
    $scope.todoList.splice(index, 1);
    $scope.edit.splice(index, 1);
  }

  /**
   * delete an item from the Done list
   * param:
   *   - index: the index of the string in the Done list
   */
  $scope.deleteDone = function(index) {
    $scope.doneList.splice(index, 1);
  }

  /**
   * check keypress
   * param:
   *   - $event: the event object
   *   - item: the string in the input when the key is pressed
   * conditions:
   *   - if enter key is pressed at the main input, add next to Todo list
   *   - if enter key is pressed at the item input, change the item string and show the new string
   *   - if ESC key is pressed at the item input, cancel the change
   */
  $scope.checkKeyPress = function($event, item) {
    var keyCode = $event.which || $event.keyCode;
    if (keyCode === 13) {
      $scope.addTodo(item)
    }
  }
});

app.filter("capitalize", function() {
  return function(item) {
    var c = item[0];
    return c.toUpperCase() + item.slice(1);
  };
});
