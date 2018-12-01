var mysql = require('mysql'),
info = {
	host: '127.0.0.1',
	port: 3306,
	user: 'root',
	password: '',
	database: 'VietBiker'
};

exports.load = function(sql) {
	return new Promise((resolve, reject) => { 
		var cnt = mysql.createConnection({info});
		cnt.connect();
		cnt.query(sql, (error, results, fields) => {
			if(error) reject(error);
			else resolve(results);
			cnt.end();
		});
	})
}

exports.write = function(sql) {
	return new Promise((resolve, reject) => {
		var cnt.mysql.createConnection(info);
		cnt.connect();
		cnt.query(sql, (error, value) => {
			if(error) reject(error);
			else resolve(value);
			cnt.end();
		});
	});
}