var http = require('http'), 
drive_process = require('../process/driveProcess'),
user_process = require('../process/userProcess');

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

    wss.on('connection', socket => {
        setInterval(() => {
            wss.sockets.emit('request_update_location');
        }, 2500);

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
                && rows[0].group_user == '4'){
                user_process.changeStatus(rows[0].key, '1');

            socket.m_info.key = rows[0].key;
            socket.m_info.phone = rows[0].phone;
            socket.m_info.num_seat = rows[0].num_seat;
            socket.m_info.waiting_response = false;
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

    // info = [latitude, longitude]
    socket.on('update_location', info => {
        drive_process.updateLocationCurrent(socket.m_info.key, info.latitude, info.longitude);

        socket.m_info.latitude = info.latitude;
        socket.m_info.longitude = info.longitude;
    });

    processSendRequestTo3Driver = function(info_request) {
        var location_request = `${ rows[i].geocoding_lat },${ rows[i].geocoding_lon }`;
        var choose = [];

        for (var j = 0; j < listDrive.length; j++) {
            var location_drive = `${ listDrive[j].m_info.latitude },${ listDrive[j].m_info.longitude }`;

            if(drive_process.distance(location_drive, local_request) );
        }
        rows[i]
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
});

    var port = process.env.port || 2471;
    server.listen(port, () => {
     console.log(`Running socket with port ${port}...`);
 });