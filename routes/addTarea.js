module.exports = function (req, res) {
	var Tarea = require('../model/tarea.js');
	
	console.log("args: " + req.body.tarea);

	if (req.body.tarea === undefined) {
		var result = {"code": "MISSING_REQUIRED_FIELDS"};
	    res.status(400).jsonp(result);
	}
	else {
		var newTarea = new Tarea({tarea: req.body.tarea});
		newTarea.save();
		res.status(200).jsonp({"result" : newTarea});
	}
}
