module.exports = function (app) {

	/**
	* * * * * * * * 
	* API Routes  *
	* * * * * * * *
	*/

	app.get('/tareas', require('./routes/getTareas.js'));
	app.post('/tareas', require('./routes/addTarea.js'));
	app.put('/tareas/:id', require('./routes/editTarea.js'));
	app.delete('/tareas/:id', require('./routes/deleteTarea.js'));

}
