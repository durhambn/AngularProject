var name = prompt("Welcome! What's your name?");
var today = new Date();
angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;
    var person = name;
    todoList.todos = [
      ];
      //{text:"todo1", done:false, due:today, daysUntil: -1}

    todoList.addTodo = function() {
      var dueDate = new Date(todoList.todoDue);
      var diff = dueDate.getTime() - today.getTime();
      var days = Math.floor(diff / (1000 * 3600 * 24));
      todoList.todos.push({text:todoList.todoText, done:false, due:dueDate, daysUntil:days});
      todoList.todoText = '';

    };

    todoList.getName = function(){

      return name;
    };

    // todoList.calculateDays = function(){
    //
    //   var daysUntil = todoList.todos.due - today;
    //
    //   return daysUntil;
    // };

    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    todoList.archive = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };
  });
