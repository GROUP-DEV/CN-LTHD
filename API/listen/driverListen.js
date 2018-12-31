var http = require('http'), 
drive_process = require('../process/driveProcess'),
user_process = require('../process/userProcess'),
book_process = require('../process/bookProcess');

var server = http.Server(require('express')());
var wss = require('socket.io')(server);

var listDrive = [];
/**
* 1 key socket has m_info is:
key (id of this driver),
name (name driver),
phone (number phone of this driver),
status (0: offline or 1: online)
latitude, longitude,
waiting_response (boolean)
*/

//event sử lý client
wss.on('connection', socket => {
    //callback socket
    socket.on('disconnection', () => {
        user_process.changeStatus(socket.m_info.key, '0');

        listDrive.splice(listDrive.indexOf(socket));
    });

    // info = [phone or email, pass]
    socket.on('login', info => {
        user_process.logIn1(info.user, info.pass)
        .then(rows => {
            if(rows.length == 0){
                socket.emit('login_response', {key: 0});
            }
            else if(rows.length == 1 
                && (rows[0].mail == info.user || rows[0].phone == info.user) 
                && rows[0].password == info.pass 
                && rows[0].group_user == '4')
            {
                user_process.changeStatus(rows[0].key, '1');
                socket.m_info.key = rows[0].key;
                socket.m_info.phone = rows[0].phone;
                socket.m_info.num_seat = rows[0].num_seat;
                socket.m_info.waiting_response = false;
                socket.user=row[0];
                listDrive.push(socket);
                socket.emit('login_response', JSON.stringify(row[0]));
            }
            else {
                socket.emit('login_response', {key: 0});
            }
        })
        .catch(err => {
            console.log(`Error when driver login to system`);
            console.log(err);
            socket.emit('login_response', {key: -1, message: err});
        });
    });

    setInterval(() => {
        wss.sockets.emit('request_update_location');
    }, 2500);

    // info = [latitude, longitude]
    socket.on('update_location', info => {
        drive_process.updateLocationCurrent(socket.m_info.key, info.latitude, info.longitude);

        socket.m_info.latitude = info.latitude;
        socket.m_info.longitude = info.longitude;
    });

    processSendRequestTo3Driver = function(info_request) {
        var location_request = `${ info_request.geocoding_lat },${ info_request.geocoding_lon }`;
        
        for (var i = 0; i < 3; i++) {
            var len = listDrive.length;
            let max = -1;
            for (var j = 0; j < len; j++) {
                var location_drive = `${ listDrive[j].m_info.latitude },${ listDrive[j].m_info.longitude }`, 
                location_drive_max = (max == -1 ? '' : `${ listDrive[max].m_info.latitude },${ listDrive[max].m_info.longitude }`);

                if(drive_process.distance(location_drive, local_request) > (max == -1 ? 0 : drive_process.distance(location_drive_max, local_request)) 
                    && listDrive[j].m_info.waiting_response == false)
                    max = j;
            }
            if(max != -1) {
                listDrive[max].emit('send_request', info_request);
                listDrive[max].m_info.waiting_response = true;
            }
        }
    }

    // receive request book car and process send request to driver
    setInterval(() => {
        drive_process.getListBookedCarInStatuLocated()
        .then(rows => {
            for (var i = 0; i < rows.length; i++) {
                processSendRequestTo3Driver(rows[i]);
            }
        })
        .catch(err => {
            console.log(`Error when get list book car statu-ing locatived.`);
            console.log(err);
        })
    }, 5000);

    // info = [phone (of request), time_book (car)]
    socket.on('response_request', info => {
        drive_process.getBookCar(info.phone, info.time_book)
        .then(rows => {
            if(rows.length == 1 && rows[0].status == `đã định vị xong`) {
                socket.emit('accept_responce');
                book_process.setDriver(info.phone, info.time_book, socket.m_info.key);
                book_process.changeStatus(info.phone, info.time_book, 'đã có xe nhận');
            }
            else {
                socket.m_info.waiting_response = false;
                socket.emit('miss_response');
            }
        })
        .catch(err => {
            console.log('Error when getBookCar in driveProcess');
            console.log(err);
        })
    });

    var rad = function(x) {
        return x * Math.PI / 180;
      };
      
      var getDistance = function(p1, p2) {
        var R = 6378137; //Haversine Earth’s mean radius in meter
        var p1lat=parseFloat(p1.lat);
        var p1lng=parseFloat(p1.lng);
        var p2lat=parseFloat(p2.lat);
        var p2lng=parseFloat(p2.lng);
      
        var dLat = rad(p2lat - p1lat);
        var dLong = rad(p2lng - p1lng);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(rad(p1lat)) * Math.cos(rad(p2lat)) *
          Math.sin(dLong / 2) * Math.sin(dLong / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d; // returns the distance in meter
      };
});

var port = process.env.port || 2471;
server.listen(port, () => {
   console.log(`Running socket with port ${port}...`);
});