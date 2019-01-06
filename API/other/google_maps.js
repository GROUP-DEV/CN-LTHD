var distance = require('google-distance-matrix');
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
    return geocoder.geocode(address);
}
exports.calculatorDistance = function(from, to) {
    var origins = [from];
    var destinations = [to];

    distance.key(options.apiKey);
    distance.units('metric');

    distance.matrix(origins, destinations, function (err, distances) {
        if (err) {
            return console.log(err);
        }
        if(!distances) {
            return console.log('no distances');
            return 0;
        }
        if (distances.status == 'OK') {
            for (var i=0; i < origins.length; i++) {
                for (var j = 0; j < destinations.length; j++) {
                    var origin = distances.origin_addresses[i];
                    var destination = distances.destination_addresses[j];
                    if (distances.rows[0].elements[j].status == 'OK') {
                        var distance = distances.rows[i].elements[j].distance.text;
                        console.log('Distance from ' + origin + ' to ' + destination + ' is ' + distance.replace(' km', '').replace(/,/g, ''));
                        return parseFloat(distance.replace(' km', '').replace(/,/g, ''));
                    } else {
                        console.log(destination + ' is not reachable by land from ' + origin);
                        return 9999;
                    }
                }
            }
        }
    });
}