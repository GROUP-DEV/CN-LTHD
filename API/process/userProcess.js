var db = require('../other/cnt_mysql');

exports.loadAll = function() {
	var sql = `SELECT * FROM user`;
	return db.load(sql);
}

exports.logIn = function(user, pass) {
	var sql = `SELECT id 'key', username 'fullname', email 'mail', role 'group_user' FROM user WHERE MD5(email) LIKE MD5('${user}') AND password like MD5('${pass}');`;

	console.log(sql);
	return db.load(sql);
}

exports.signIn = function(user, email, password, role) {

	var sql = `INSERT INTO user (username, email, password, role) VALUES 
('${user ? user : ''}', '${email}', MD5('${password}'), '${role ? role : `-1`}');`;

	console.log(sql);
	return db.write(sql);
}