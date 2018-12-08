var gm = require('../other/google_maps'), 
db = require('../other/cnt_mysql');

exports.getGeoCoding = function(lat,lon) {
	var sql = `SELECT id, latitude, longitude FROM geocode WHERE latitude LIKE '${lat}' AND longitude LIKE '${lon}'`;
	return db.load(sql);
}

exports.addGeoCoding = function(lat,lon) {
	var `INSERT INTO geocode (latitude, longitude) VALUES ('${lat}', '${lon}')`;
	return db.write(sql);
}

exports.getGeoId = function(lat,lon) {
	return this.getGeoCoding(lat, lon)
	.then(rows => {
		if(rows.length == 1)
			return rows[0].id;
		return '-1';
	})
	.then(value => {
		if(value = '-1'){
			return this.addGeoCoding(lat,lon);
		}
		return value;
	})
	.then(value => {
		if(typeof value == 'string' || typeof value == 'number')
			return value;
		return value.insertId;
	})
	.catch(err => {
		console.log(err);
		throw err;
	});
}