var db = require('../other/cnt_mysql'),
geocoding = require('../other/google_maps');

exports.loadAll = function() {
	var sql = `SELECT customer.name 'customer_name', customer.phone 'customer_phone', BookCar.address 'welcome_address', BookCar.note, BookCar.seats, BookCar.time 'time_request', g1.latitude 'geocoding_lat', g1.longitude 'geocoding_lon', g2.latitude 'reverse_geocoding_lat', g2.longitude 'reverse_geocoding_lon' FROM BookCar INNER JOIN customer ON BookCar.customer = customer.id LEFT JOIN geocode g1 ON BookCar.geocodin = g1.id LEFT JOIN geocode g2 ON BookCar.regeocoding = g2.id LEFT JOIN user ON BookCar.biker = user.id`;

	return db.load(sql);
}

function geocodingId(lati, longi) {
	db.load(`SELECT id FROM geocode WHERE latitude LIKE '${lati}' AND longitude LIKE '${longi}'`, (err, rows) => {
		if(rows.length == 1) return rows[0].id;
		else {
			db.write(`INSERT INTO geocode (latitude, longitude) VALUES ('${lati}', '${longi}')`, (err, value) => {
				return value.insertId;
			});
		}
	});
}

exports.bookCar = function(name, phone, address, note, seat) {
	var sql = `SELECT id, name, phone FROM customer WHERE MD5(phone) like MD5('${phone}')`;

	db.load(sql)
	.then(rows => {
		if(rows.length == 0){
			return db.write(`INSERT INTO customer (name, phone) VALUES ('${name}', '${phone}')`).insertId;
		}
		else if(rows.length == 1 && rows[0].name != name){
			db.write(`UPDATE customer SET name = '${name}' WHERE phone = '${phone}')`);
			return rows[0].id;
		}
		else if(rows.length == 1){
			return rows[0].id;
		}
	})
	.then(id_customer => {
		let geocode = geocoding.getGeoCoding(address);

		db.write(`INSERT INTO BookCar(customer, address, note, geocodin, status, seats) VALUES 
			('${id_customer}','${address}','${node}','${geocodingId(geocode.latitude,geocode.longitude)}','0','${seat}')`);
	})
	.catch(err => {
		console.log(err);
		res.status(400).send(err);
	});
}