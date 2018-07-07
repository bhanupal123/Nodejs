$(document).ready(function(){
    console.log("this is todo list file")
    var todoService = require('../../Service/Todo/todoService');
  $('form').on('submit', function(){
      console.log("add Button click");
      var item = $('form input');
      var todo = {item: item.val()};
      todoService.getTodoList();
      return false;

  });

  $('li').on('click', function(){
      var item = $(this).text().replace(/ /g, "-");
      todoService.addTodo(item);
  });

});
