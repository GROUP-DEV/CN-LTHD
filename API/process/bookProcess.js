var db = require('../other/cnt_mysql'),
geocoding = require('../other/google_maps');

exports.loadAll = function() {
	var sql = `SELECT customer.name 'customer_name', customer.phone 'customer_phone', BookCar.address 'welcome_address', BookCar.note, BookCar.seats, BookCar.time 'time_request', g1.latitude 'geocoding_lat', g1.longitude 'geocoding_lon', g2.latitude 'reverse_geocoding_lat', g2.longitude 'reverse_geocoding_lon' FROM BookCar INNER JOIN customer ON BookCar.customer = customer.id LEFT JOIN geocode g1 ON BookCar.geocodin = g1.id LEFT JOIN geocode g2 ON BookCar.regeocoding = g2.id LEFT JOIN user ON BookCar.biker = user.id`;

	return db.load(sql);
}

function geocodingId(lati, longi) {
	console.log("Location: "+lati + " " + longi);
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
	let sql = `SELECT id, name, phone FROM customer WHERE MD5(phone) like MD5('${phone}')`;

	return db.load(sql)
	.then(rows => {
		if(rows.length == 0){
			return db.write(`INSERT INTO customer (name, phone) VALUES ('${name}', '${phone}')`);
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
		if(typeof id_customer === 'object')
			id_customer = id_customer.insertId;

		sql = `INSERT INTO BookCar(customer, address, note, status, seats) VALUES 
			('${id_customer}', 
			'${address}', 
			'${note}', 
			'0', 
			'${seat}')`;
		return db.write(sql);
	})
	.catch(err => {
		console.log(err);
		throw err;
	});
}

exports.getDateCurrent = function() {
	var current = new Date();
	return `${current.getMonth() + 1}/${current.getDate()}/${current.getFullYear()} ${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;
}