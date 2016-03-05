var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema(
	{
		name:String,
		image:{data:Buffer, contentType: String},
		price: Number,
		categories: Array
	}
);

module.exports = mongoose.model('Item',itemSchema);