var todoService;
(function(todoService) {
    todoService.getTodoList = function()
    {
        return (
            $.ajax({
                type: 'GET',
                url: 'http://localhost:3000/todo',
                headers : {
                    'Access-Control-Allow-Origin':'http://localhost:3000',

                },
                crossDomain : true,
                dataType : 'json',
                contentType : 'application/json'
            })
        )
    },

    todoService.addTodo = function(data) {
        return  $.ajax({
                type: 'POST',
                url: 'http://localhost:3000/todo',
                data: JSON.stringify(data),
                "Access-Control-Allow-Origin":'*',
                crossDomain : true,
                dataType : 'json',
                contentType : 'application/json'
            })
    },

    todoService.deleteTodo = function(item) {
        return (
            $.ajax({
                type: 'DELETE',
                url: 'http://localhost:3000/todo/' + item,
                headers : {
                    'Access-Control-Allow-Origin':'*'
                },
                crossDomain : true,
                dataType : 'json',
                contentType : 'application/json'
            })
        )
    }

,

    todoService.updateTodo = function(item, data) {
        return (
            $.ajax({
                type: 'PUT',
                url: 'http://localhost:3000/' + item,
                data: JSON.stringify(data),
                headers : {
                    'Access-Control-Allow-Origin':'http://localhost:3000'
                },
                crossDomain : true,
                dataType : 'json',
                contentType : 'application/json'
            })
        )
    }

})(todoService || (todoService={}));
