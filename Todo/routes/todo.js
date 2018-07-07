var express = require('express');
var bodyParser = require('body-parser');


var router = express.Router();
var todos = [{item:'get milk'},{item:'walk dog'},{item:'kick some coding ass'}];
var urlencodedParser = bodyParser.urlencoded({extended:false});

router.get('/', function(req, res, next) {
    res.json(todos);
});

router.post('/',urlencodedParser,function (req,res) {
    todos.push(req.body);
    res.json(todos);
});

router.put('/:item',urlencodedParser, function (req,res) {
    for(var i=0;i<todos.length;i++){
        if(todos[i].item === req.params.item){
            todos[i].item = req.body.item;
            break;
        }
    }
    res.json(todos);
});

router.delete('/:item',function (req,res) {
    todos = todos.filter(function (todo) {
        return todo.item !== req.params.item;
    })
    res.json(todos);
})

module.exports = router;