var nodegeocoder = require('node-geocoder'),
db = require('./cnt_mysql');

var options = {
	provider: 'google',
	httpAdapter: 'https',
	apiKey: 'AIzaSyCHY7K0nxdBJ2MVMMVe46mJP8PvoezIUvc',
	formatter: null
};

var geocoder = nodegeocoder(options);

exports.getGeoCoding = function(address) {
	/*geocoder.geocode(address, (err, res) => {
		var value_release = 888;
		if(err) throw err;
		console.log(res);
		db.load(`SELECT id FROM geocode WHERE latitude LIKE '${res[0].latitude}' AND longitude LIKE '${res[0].longitude}'`, (err, rows) => {
			if(err) throw err;
			console.log('List geocode: \n'+rows);
			if(rows.length == 1) var value_release = rows[0].id;
			else {
				console.log(`INSERT INTO geocode (latitude, longitude) VALUES ('${res[0].latitude}', '${res[0].longitude}')`);
				db.write(`INSERT INTO geocode (latitude, longitude) VALUES ('${res[0].latitude}', '${res[0].longitude}')`, (err, value) => {
					if(err) throw err;
					var value_release = value.insertId;
				});
			}
		});
	});*/
	return geocoder.geocode(address);
}