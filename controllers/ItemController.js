var ItemRepository = require('./../repositories/ItemRepository.js');
var itemRepo;

function ItemController(){
	itemRepo = new ItemRepository();
}

ItemController.prototype.getUsers = function(callback) {
	itemRepo.getItem(function(data){
		if(data)callback(data);
	});
};
ItemController.prototype.getUser = function(deligateJson,callback) {
	itemRepo.getItemWithJson(deligateJson,function(data){
		if(data)callback(data);
	});
};
ItemController.prototype.postUser = function(json){
		userRepo.addUser(json);
}
module.exports = ItemController;