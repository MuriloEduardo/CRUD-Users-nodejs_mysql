var app            = require('./config/app_config.js');
var userController = require('./controller/userController.js');
var validator      = require('validator');

/////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// Rotas ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

app.get('/api/users', function(req, res) {
	userController.list(function(resp){
		res.json(resp);
	});
});

app.get('/api/users/:id', function(req, res) {
	var id = validator.trim(validator.escape(req.params.id));

	userController.user(id, function(resp){
		res.json(resp);
	});
});

app.post('/api/users', function(req, res) {
	var name       = validator.trim(validator.escape(req.body.name));
	var email      = validator.trim(validator.escape(req.body.email));
	var password   = validator.trim(validator.escape(req.body.password));

	userController.save(name, email, password, function(resp){
		res.json(resp);
	});
});

app.put('/api/users', function(req, res) {
	var id         = validator.trim(validator.escape(req.body.id));
	var name       = validator.trim(validator.escape(req.body.name));
	var email      = validator.trim(validator.escape(req.body.email));
	var password   = validator.trim(validator.escape(req.body.password));

	userController.update(id, name, email, password, function(resp){
		res.json(resp);
	});
});

app.delete('/api/users/:id', function(req, res) {
	var id = validator.trim(validator.escape(req.params.id));

	userController.delete(id, function(resp){
		res.json(resp);
	});
});