var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema(
	{
		username: {type:String,lowercase:true,unique:true},
		password: String,
		itemsId: Array,
		postcode: String,
		lat:String,
		lng:String
	}
);

module.exports = mongoose.model('User',userSchema);