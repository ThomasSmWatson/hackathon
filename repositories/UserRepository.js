var User = require('../schemas/userSchema.js');
var mongoose = require('mongoose');
var q = require('q');
mongoose.connect('mongodb://localhost/tradeit');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function(callback){
        console.log('Database connected on Address.');
});

function UserRepository(){

}

UserRepository.prototype.getUser = function(callback) {
	User.find({},function(err,docs){
		if(err)
		{
			console.log(err);
			res.sendStatus(404);	
		} 
		else
		{
			if(docs){
				callback(docs);
			}
			callback(err);
		}
	});
};
UserRepository.prototype.getUserWithJson = function(deligateJson,callback) {
	User.find(deligateJson,function(err,docs){
		if(err)
		{
			console.log(err);
			res.sendStatus(404);	
		} 
		else
		{
			callback(docs[0]);
		}
	});
};
UserRepository.prototype.addUser = function(userJson) 
{

 var user = new User(userJson);
 user.save(function(err,data){
 	if(err) console.log(err)
 	else{
 		console.log(data);
 	}
 });
};
module.exports = UserRepository;