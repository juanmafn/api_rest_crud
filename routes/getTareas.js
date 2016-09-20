module.exports = function (req, res) {
	var Tarea = require('../model/tarea.js');
	
	console.log("getTarea");

	Tarea.find(function(err, tareas) {
		if (err) {
			res.status(500).end();
		}
		else {
			console.log("tareas: " + tareas);
			res.status(200).jsonp(tareas);
		}
	});
}
