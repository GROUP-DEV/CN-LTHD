var db = require('../other/cnt_mysql');

exports.loadAll = function() {
	var sql = `SELECT * FROM user`;
	return db.load(sql);
}

exports.logIn = function(user, pass) {
	var sql = `SELECT id 'key', username 'fullname', phone 'numberphone', seat 'num_seat', email 'mail', role 'group_user' FROM user WHERE (MD5(email) LIKE MD5('${user}')) AND password like MD5('${pass}')`;
	return db.load(sql);
}

exports.logIn1 = function(user, pass) {
	var sql = `SELECT id 'key', username 'fullname', phone 'numberphone', email 'mail', seat 'num_seat', role 'group_user', password FROM user 
	WHERE (MD5(email) LIKE MD5('${user}') OR MD5(phone) LIKE MD5('${user}')) AND password like MD5('${pass}')`;
	return db.load(sql);
}

exports.signIn = function(user, phone, email, password, seat, seat, role) {
	var sql = `INSERT INTO user (username, phone, seat, email, password, role) VALUES 
('${user ? user : ''}', '${phone}', '${seat ? seat : '0'}', '${email}', MD5('${password}'), '${role ? role : `-1`}');`;
	return db.write(sql);
}

exports.changeStatus=function(u_id,u_status){
	var sql =`UPDATE user set status = '${ u_status }' WHERE id = '${ u_id }'`;
	return db.write(sql);
}

exports.findLimitCarCanBook=function(){
	var sql =`SELECT id,username,phone FROM user where role = 4 and status = 0;`;
	return db.load(sql);
}