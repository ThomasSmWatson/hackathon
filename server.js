var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var UserController = require('./controllers/UserController.js');
app.use(bodyParser.json());

var userController = new UserController();

//Connect to DB

app.use(express.static('public'))
app.get('/',function(req,res){
	res.sendStatus(200);
});


app.get('/user',function(req,res){
	var users = userController.getUser(function(data){
		res.send(data);
	});
});
app.listen(8080);
console.log("Server listening on port: 8080");

