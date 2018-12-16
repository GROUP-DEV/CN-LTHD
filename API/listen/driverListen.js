var http = require('http');

var server = http.Server(require('express')());
var wss = require('socket.io')(server);

var listDrive = [];
/**
* 1 key socket has m_info is:
    name: name driver
    latilate, longilate
*/
wss.on('connection', socket => {
    // input info object: name, latitude,longitude
    socket.on('sent_info', info => {
        socket.m_info = info;
        listDrive.push(socket);
    });
});

var port = process.env.port || 2471;
server.listen(port, () => {
    console.log(`Running socket with address ${process.env.port ? require('ip').address() : ${port}...`);
});