var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema(
	{
		
	}
);

module.exports = mongoose.model('Item',itemSchema);