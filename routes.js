module.exports = function (app) {

	/**
	* * * * * * * * 
	* API Routes  *
	* * * * * * * *
	*/

	app.use(function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
	});

	app.get('/tareas', require('./routes/getTareas.js'));
	app.post('/tareas', require('./routes/addTarea.js'));
	app.put('/tareas/:id', require('./routes/editTarea.js'));
	app.delete('/tareas/:id', require('./routes/deleteTarea.js'));

}
