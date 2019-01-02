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
    socket.emit('news', { hello: 'world' });

    //callback socket
    socket.on('disconnection', () => {
        user_process.changeStatus(socket.m_info.key, '0');

        listDrive.splice(listDrive.indexOf(socket));
    });

    socket.on('updateToken',info=>{
        user_process.updateToken(info.id,info.token).then(rows=>{
            if(rows.length==0){
                socket.emit('update_token_failed',{status:'failed'});
            }else if(rows.length==1){
                socket.emit('update_token_succes',{status:'success'})
            }
        })
    });

    // khi lai xe dang nhap
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

    // cap nhat vi tri cua lai xe
    // info = [latitude, longitude]
    socket.on('location_driver', info => {
        socket.m_info.latitude = info.latitude;
        socket.m_info.longitude = info.longitude;

        drive_process.updateLocationCurrent(socket.m_info.key, info.latitude, info.longitude);
    });
    
    // lai xe chap nhan yeu cau
    // info = [phone (of request), time_book (car)]
    socket.on('accept_request', info => {
        book_process.setDriver(info.phone, info.time_book, socket.m_info.key);
        book_process.changeStatus(info.phone, info.time_book, 'đã có xe nhận');
    });

    // khi khong muon nhan yeu cau thi se nhan ham nay
    // info = [phone (of request), time_book (car)]
    socket.on('reject_request', info => {
        book_process.changeStatus(info.phone, info.time_book, 'đã định vị xong');
    });

    // gui yeu cau tim nguoi de cho 
    socket.on('search_request', () => {
        drive_process.getListBookedCarInStatuLocated()
        .then(rows => {
            let index_request_has_distance_min = 0;
            for (var i = 1; i < rows.length; i++) {
                if(drive_process.distance(`${rows[i].geocoding_lat},${rows[i].geocoding_lon}`, `${socket.latitude},${socket.longitude}`) 
                    > drive_process.distance(`${rows[index_request_has_distance_min].geocoding_lat},${rows[index_request_has_distance_min].geocoding_lon}`, `${socket.latitude},${socket.longitude}`))
                    index_request_has_distance_min = i;
            }
            socket.emit('sent_request', rows[number_request_sent]);
            book_process.changeStatus(rows[number_request_sent].customer_phone, rows[number_request_sent]time_request, 'đang nhận phản hồi');
        })
        .catch(err => {
            console.log(`Error when get list book car statu-ing locatived.`);
            console.log(err);
        });
    });
});

var port = process.env.port || 2471;
server.listen(port, () => {
   console.log(`Running socket with port ${port}...`);
});