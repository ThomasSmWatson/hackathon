var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var UserController = require('./controllers/UserController.js');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded())

var userController = new UserController();

//Connect to DB

app.use(express.static('public'))
app.get('/',function(req,res){
	res.render('index.html');
});


app.get('/user',function(req,res){
	var users = userController.getUser(function(data){
		res.send(data);
	});
});

app.post('/user',function(req,res){
	userController.postUser({
		username: req.body.username,
		password:req.body.password,
		itemsId: req.body.itemsId,
		locationId: req.body.locationId
	});
	res.sendStatus(200);
});
app.listen(8080);
console.log("Server listening on port: 8080");

