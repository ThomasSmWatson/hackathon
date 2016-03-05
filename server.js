//Express should be passed into the controllers! NOT CONTROLLERS ALL CALLED IN SERVER.JS
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//Controllers. Need a factory!!!!
var UserController = require('./controllers/UserController.js');
var ItemController = require('./controllers/ItemController.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded())

//Really should use a factory...
var userController = new UserController();
var ItemController = new ItemController();


app.use(express.static('public'))
app.get('/',function(req,res){
	res.render('index.html');
});


app.get('/user',function(req,res){
	var users = userController.getUsers(function(data){
		res.send(data);
	});
});
app.get('/user/:id',function(req,res){
	console.log(req.params);
	var users = userController.getUserWithJson({ _id : req.params.id},function(data){
		res.send(data);
	});
});

app.post('/user',function(req,res){
	userController.postUser({
		username: req.body.username,
		password:req.body.password,
		itemsId: req.body.itemsId,
		postcode: req.body.postcode,
		lat: req.body.lat,
		lng: req.body.lng
	});
	res.sendStatus(200);
});
app.listen(8080);
console.log("Server listening on port: 8080");

