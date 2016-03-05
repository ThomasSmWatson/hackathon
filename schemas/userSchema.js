var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema(
	{
		username: String,
		password: String,
		itemsId: Array,
		postcode: String,
		latitude:String,
		longitude:String
	}
);

module.exports = mongoose.model('User',userSchema);