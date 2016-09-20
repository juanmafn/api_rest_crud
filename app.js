var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/crud_rest', function(err, res) {
        if(err) console.log('ERROR: Conectando a la BD: ' + err);
        else console.log('Conexión a la BD realizada');
});

function logErrors(err, req, res, next) { console.error(err.stack); next(err); }

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({limit: '10mb'}));
app.use(methodOverride());
app.use(logErrors);


require('./routes')(app);

var port = 3000;
app.listen(port, function() {
  console.log("Node server running on http://localhost:"+port);
});
