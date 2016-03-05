var UserRepository = require('./../repositories/UserRepository.js');
var userRepo;

function UserController(){
	userRepo = new UserRepository();
}

UserController.prototype.getUser = function() {
	var values =  userRepo.getUser();
	if(values) return values;
	else{
		return "Empty";
	}
};
module.exports = UserController;