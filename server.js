var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var UserRepository = require('./repositories/UserRepository.js');
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/tradeit');

//Connect to DB
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function(callback){
        console.log('Database connected on Address.');
});


app.use(express.static('public'))
app.get('/',function(req,res){
	res.sendStatus(200);
});

app.post('/user',function(req,res){
	res.send(500);
 
});
app.listen(8080);
console.log("Server listening on port: 8080");

