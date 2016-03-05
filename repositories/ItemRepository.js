var Item = require('../schemas/itemSchema.js');
var mongoose = require('mongoose');
var q = require('q');
mongoose.connect('mongodb://localhost/tradeit');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function(callback){
        console.log('Database connected on Address.');
});

function ItemRepository(){

}

ItemRepository.prototype.getItem = function(callback) {
	Item.find({},function(err,docs){
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
			callback("");
		}
	});
};
ItemRepository.prototype.getItemWithJson = function(deligateJson,callback) {
	Item.find(deligateJson,function(err,docs){
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
			callback("");
		}
	});
};
ItemRepository.prototype.addItem = function(itemJson) 
{

 var item = new Item(itemJson);
 item.save(function(err,data){
 	if(err) console.log(err)
 	else{
 		console.log(data);
 	}
 });
};
module.exports = ItemRepository;