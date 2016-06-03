var mysql = require('mysql');

// Instancia mySQL
var db = mysql.createConnection({
	user: 'root',
	password: '',
	host: 'localhost'
});

// Em caso de erro na conexão
db.on('error', console.error.bind(console, 'Erro ao conectar no banco'));

// Selecionando o banco de dados 
// a ser usado
db.query('USE adcanoas');

module.exports = db;