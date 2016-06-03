var db  = require('../config/db_config.js');
var hat = require('hat');

exports.list = function(callback){
	db.query('SELECT * FROM usuarios', function(err, results, fields) {
		if(err){
			callback({error: 'Algo deu errado! ' + err});
		}else{
			callback(results);
		}
	});
};

exports.user = function(id, callback){
	db.query('SELECT * FROM usuarios WHERE id = ' + id, function(err, results, fields) {
		if(err){
			callback({error: 'Algo deu errado! ' + err});
		}else{
			callback(results);
		}
	});
};

exports.save = function(name, email, password, callback){
	var token      = hat();
	var created_at = new Date().toLocaleString();

	db.query('INSERT INTO usuarios (nome, email, senha, token, created_at) VALUES ("'+name+'","'+email+'","'+password+'","'+token+'","'+created_at+'")', function(err, results, fields) {
		if(err){
			callback({error: 'Algo deu errado! ' + err});
		}else{
			callback(results);
		}
	});
};

exports.update = function(id, name, email, password, callback){
	var updated_at = new Date().toLocaleString();

	db.query('UPDATE usuarios SET nome = "'+name+'", email = "'+email+'", senha = "'+password+'", updated_at = "'+updated_at+'" WHERE id = ' + id, function(err, results, fields) {
		if(err){
			callback({error: 'Algo deu errado! ' + err});
		}else{
			callback(results);
		}
	});
};

exports.delete = function(id, callback){
	db.query('DELETE FROM usuarios WHERE id = ' + id, function(err, results, fields) {
		if(err){
			callback({error: 'Algo deu errado! ' + err});
		}else{
			callback(results);
		}
	});
};