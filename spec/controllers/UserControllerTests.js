var UserController = require('./../../controllers/UserController.js');
describe('Unit tests for user controller',function(){
	it('Will call user repo get',function(){
		var sut = new UserController();
		var users = sut.getUser();
		console.log(users);
	})
})