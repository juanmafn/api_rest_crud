module.exports = function (req, res) {
	var Tarea = require('../model/tarea.js');
	
	console.log("editTarea");

	if (req.params.id === undefined || req.body.tarea === undefined) {
		var result = {"code": "MISSING_REQUIRED_FIELDS"};
	    res.status(400).jsonp(result);
	}
	else {
		Tarea.findOne({"_id" : req.params.id}, function(err, tarea) {
			if (err) {
				res.status(500).end();
			}
			else if (tarea == undefined) {
				res.status(404).end();
			}
			else {
				console.log("tarea: " + tarea);
				tarea.tarea = req.body.tarea;
				tarea.save(function(err) {
					if (err) res.status(500).end();
					else {
						res.status(200).jsonp(tarea);
					}
				});
			}
		});
	}
}
