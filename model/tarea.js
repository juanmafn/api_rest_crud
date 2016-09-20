var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var tareaSchema = new Schema({
	tarea: String
}, {versionKey: false});

module.exports = mongoose.model('Tarea', tareaSchema);
