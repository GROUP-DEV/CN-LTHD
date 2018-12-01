var db = require('../other/cnt_mysql');

exports.loadAll = function() {
	var sql = `SELECT * FROM user`;
	return db.load(sql);
}