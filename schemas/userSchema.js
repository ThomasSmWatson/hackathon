var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema(
	{
		username: String,
		password: String,
		itemsId: Array,
		locationId: Number
	}
);

module.exports = mongoose.model('User',userSchema);