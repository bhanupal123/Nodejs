$(document).ready(function(){
    getTodoList();
    $('form').on('submit', function(){
      console.log("add Button click");
      var item = $('form input');
      var todo = {item: item.val()};
      addTodo(todo);
      return false;
  });

  $('li').on('click', function(){
      console.log("delete todo")
      var item = $(this).text().replace(/ /g, "-");
      deleteTodo(item);
      return false;
  });

});
