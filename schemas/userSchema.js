var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema(
	{
		username: String,
		password: String,
		itemsId: Array,
		postcode: String,
		lat:String,
		lng:String
	}
);

module.exports = mongoose.model('User',userSchema);