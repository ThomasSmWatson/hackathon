var UserRepository = require('./../repositories/UserRepository.js');
var userRepo;

function UserController(){
	userRepo = new UserRepository();
}

UserController.prototype.getUser = function(callback) {
	userRepo.getUser(function(data){
		if(data)callback(data);
	});
};
UserController.prototype.postUser = function(json){
	userRepo.addUser(json);
}
module.exports = UserController;