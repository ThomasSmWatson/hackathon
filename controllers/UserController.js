var UserRepository = require('./../repositories/UserRepository.js');
var userRepo;

function UserController(){
	userRepo = new UserRepository();
}

UserController.prototype.getUsers = function(callback) {
	userRepo.getUser(function(data){
		if(data)callback(data);
	});
};
UserController.prototype.getUserWithJson = function(deligateJson,callback) {
	userRepo.getUserWithJson(deligateJson,function(data){
		if(data)callback(data);
	});
};
UserController.prototype.postUser = function(json){
	userRepo.getUserWithJson({username: json.username},function(data){
		if(!data)
		userRepo.addUser(json);
		console.log("Duplicate attempt");
	});
}
module.exports = UserController;