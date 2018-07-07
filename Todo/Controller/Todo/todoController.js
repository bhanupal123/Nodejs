function  addTodo(data) {
    console.log("Here We are calling add todo method");
    todoService.addTodo(data).done(function(data){
        console.log("Todo added successfully");
        location.reload();
    }).fail(function(error){
        console.log("error while adding todo");
    })
}

function  deleteTodo(item) {
    console.log("delete controller")
    todoService.deleteTodo(item).done(function(data){
        console.log("success message");
    }).fail(function(error){
        console.log("error message");
    })
}

function  updateTodo(item , data) {
    todoService.updateTodo(item , data).done(function(data){
        console.log("success message");
    }).fail(function(error){
        console.log("error message");
    })
}


function  getTodoList() {
    todoService.getTodoList().done(function(data){
        for(var i=0;i<data.length;i++){
            addItem(data[i].item);
        }

    }).fail(function(error){
        console.log("error message");
    })
}

function addItem(item){
    var ul = document.getElementById("dynamic-list");
    var candidate = item;
    var li = document.createElement("li");
    li.setAttribute('id',item);
    li.appendChild(document.createTextNode(item));
    ul.appendChild(li);
}

