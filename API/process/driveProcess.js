var db = require('../other/cnt_mysql'),
var map = require('../other/google_maps');

exports.logIn= function(user, pass) {
	let sql = `SELECT * 
FROM user 
WHERE role = 4 
AND (MD5(phone) LIKE MD5('${user}') OR MD5(email) LIKE MD5('${user}')) 
AND password like MD5('${pass}');`;
	return db.load(sql);
}
exports.getListBookedCarInStatuLocated = function() {
	let sql = `SELECT customer.name 'customer_name', customer.phone 'customer_phone', 
BookCar.address 'welcome_address', BookCar.note, BookCar.status, BookCar.seats, BookCar.time 'time_request', 
g1.latitude 'geocoding_lat', g1.longitude 'geocoding_lon', g2.latitude 'reverse_geocoding_lat', g2.longitude 'reverse_geocoding_lon' 
FROM BookCar INNER JOIN customer ON BookCar.customer = customer.id 
LEFT JOIN geocode g1 ON BookCar.geocodin = g1.id 
LEFT JOIN geocode g2 ON BookCar.regeocoding = g2.id 
LEFT JOIN user ON BookCar.biker = user.id
WHERE BookCar.status LIKE N'đã định vị xong';`;
	return db.load(sql);
}

exports.distance = function(from, to) {
	return map.calculatorDistance(from, to);
}