var nodegeocoder = require('node-geocoder');

var options = {
	provider: 'google',
	httpAdapter: 'https',
	apiKey: 'AIzaSyCHY7K0nxdBJ2MVMMVe46mJP8PvoezIUvc',
	formatter: null
};

var geocoder = nodegeocoder(options);

exports.getGeoCoding = function(address) {
	geocoder.geocode(address)
	.then(res => {
		return {
			latitude: res.latitude,
			longitude:  res.longitude
		}
	})
	.catch(err => {
		console.log(err);
	});
}