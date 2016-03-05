var express = require('express');
var app = express();

var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/tradeit');

//Connect to DB
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function(callback){
        console.log('Database connected on Address.');
})
//Schemas
var User = require('./schemas/userSchema.js');

app.use(express.static('public'))
app.get('/',function(req,res){
	res.send("Holla!");
});

app.get('/user/:id',function(req,res){
	User.find({},function(err,docs){
		if(err)
		{
			console.log(err);
			res.sendStatus(404);	
		} 
		else
		{
			res.send(docs);
		}
	});
});
app.listen(8080);
console.log("Server listening on port: 8080");

