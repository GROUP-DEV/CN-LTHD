var http = require('http'), 
drive_process = require('../process/driveProcess'),
user_process = require('../process/userProcess');

var server = http.Server(require('express')());
var wss = require('socket.io')(server);

var listDrive = [];
/**
* 1 key socket has m_info is:
    name (name driver),
    phone (number phone of this driver),
    status (0: offline or 1: online)
    latilate, longilate
*/
wss.on('connection', socket => {
    socket.on('disconnection', () => {
        user_process.changeStatus()
        listDrive.splice(listDrive.indexOf(socket));
    });

    // info = [phone or email, pass]
    socket.on('login', info => {
    	user_process.logIn(info.user, info,pass)
        .then(rows => {
            if(rows.length == 0){
                socket.emit('login_response', {id: 0});
            }
            else if(rows.length == 1)
        })
        .catch(err => {
            console.log(`Error when driver login to system`);
            console.log(err);
        });
    });

    socket.on('sent_info', info => {
        socket.m_info = info;
        listDrive.push(socket);
    });
});

var port = process.env.port || 2471;
server.listen(port, () => {
	console.log(`Running socket with port ${port}...`);
});