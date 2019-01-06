var express = require('express');
const debug = require('debug')('poi:server');
const path = require('path');
var jwt=require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http'),
drive_process = require('./process/driveProcess'),
user_process = require('./process/userProcess'),
book_process = require('./process/bookProcess');
var app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.get('/', (req, res) => {
	res.json({
		msg: 'Welcome to VietBiker'
	});
})

app.use(function(req,res,next){
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Headers","Origin,X-Requested-with,Content-Type,Accept");
	next();
});

app.use(function(err,req,res,next){
	res.locals.message=err.message;
	res.locals.error=req.app.get('env')==='development' ? err : {};
	res.status(err.status||500);
	res.render('error');
});

app.use(express.static(path.join(__dirname,'../clien')));

//   app.use(function(req,res,next){
//   	console.dir(req);
//  	console.dir(res);
//   	let err=new Error('Not Found');
//  	err.status=404;
// next(err);
//   });

var verifyAccess=(req,res,next)=>{
	var token=req.headers['x-access-token'];
	if(token){
		jwt.verify(token,'7avodoilc', (err,payload) => {
			if(err){
				res.statusCode=403;
				res.JSON({
					msg:'Invalid token',
					error: err
				});
			}else{
				req.token_payload=payload;
				next();
			}
		})
	}else{
		res.statusCode=403;
		res.JSON({
			msg:'No token found'
		});
	}
}


app.use('/u', require('./listen/userListen'));
app.use('/b', require('./listen/bookListen'));


var port =1742;
var server=app.listen(port, () => {
	console.log(`Running...`);
	console.log(`Open with address: ${process.env.port ? require('ip').address() : 'localhost'}:${port}`);
});

var listDrive=[];

var wss = require('socket.io')(server);
wss.on('connection', socket => {
    console.log(socket.id)

    socket.emit('news', { hello: 'world' });

    //callback socket
    socket.on('disconnection', () => {
        user_process.changeStatus(socket.m_info.key, '0');

        listDrive.splice(listDrive.indexOf(socket));
    });
    socket.on('SEND_MESSAGE', (data) => {
        console.log(data.hello);
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

    // khi co ket noi toi ma khon co thong tin thi gui yeu cau nhan lai thong tin
    if(typeof socket.m_info == 'undefined') {
        socket.emit('request_resent_profile');
    }

    // tu dong nhan lai thong tin
    socket.on('relogin', info_user => {
        user_process.changeStatus(info_user.key, '1');
        let info = {
            key: info_user.key,
            phone: info_user.numberphone,
            num_seat: info_user.num_seat,
            waiting_response: false
        };
        socket.m_info = info;
        //socket.user=row[0];
        listDrive.push(socket);
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
                && rows[0].password == require('MD5')(info.pass) 
                && rows[0].group_user == '4')
            {
                console.log(rows[0]);
                user_process.changeStatus(rows[0].key, '1');
                let info = {
                    key: rows[0].key,
                    phone: rows[0].numberphone,
                    num_seat: rows[0].num_seat,
                    waiting_response: false
                };
                socket.m_info = info;
                rows[0].password = undefined;
                //socket.user=row[0];
                listDrive.push(socket);
                socket.emit('login_response', JSON.stringify(rows[0]));
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
    socket.on('update_location_driver', info => {
        socket.m_info.latitude = info.latitude;
        socket.m_info.longitude = info.longitude;
        console.log(socket.m_info.latitude+'   '+socket.m_info.longitude);
        drive_process.updateLocationCurrent(socket.m_info.key, info.latitude, info.longitude);
    });
    
    // lai xe chap nhan yeu cau
    // info = [phone (of request), time_book (car)]
    socket.on('accept_request', info => {
        book_process.setDriver(info.phone, info.time_book, socket.m_info.key);
        book_process.changeStatus(info.phone, info.time_book, 'Đã có xe nhận');
        user_process.changeStatus(socket.m_info.key, '1');
    });

    // khi khong muon nhan yeu cau thi se nhan ham nay
    // info = [phone (of request), time_book (car)]
    socket.on('reject_request', info => {
        book_process.changeStatus(info.phone, info.time_book, 'Đã được định vị');
        listDrive[max].m_info.waiting_response = false;
    });

    // khi da khi da cho khach toi dia diem dich
    // info = [phone (of request), time_book (car)]
    socket.on('finish_request', info => {
        book_process.changeStatus(info.phone, info.time_book, 'Đã hoàn thành');
        user_process.changeStatus(socket.m_info.key, '0');
        listDrive[max].m_info.waiting_response = false;
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
            book_process.changeStatus(rows[number_request_sent].customer_phone, rows[number_request_sent].time_request, 'Đang nhận phản hồi');
        })
        .catch(err => {
            console.log(`Error when get list book car statu-ing locatived.`);
            console.log(err);
        });
    });

    // ham xac dinh tai xe nao gan nhat de gui thong tin yeu cau
    // khi da xac dinh duoc tai xedo thi gui toanbo thong tin yeu cau cho tai xe qua ham:
    //      'send_request' kèm theo toàn bộ thong tin
    processSendRequestToDriver = function(info_request) {
        var local_request = `${ info_request.geocoding_lat },${ info_request.geocoding_lon }`;
        console.log('local_request '+local_request);
        var len = listDrive.length;
        let max = -1;
        for (var j = 0; j < len; j++) {
            var location_drive = `${ listDrive[j].m_info.latitude },${ listDrive[j].m_info.longitude }`, 
            location_drive_max = (max == -1 ? '' : `${ listDrive[max].m_info.latitude },${ listDrive[max].m_info.longitude }`);
console.log('location_drive '+location_drive);
            if(drive_process.distance(location_drive, local_request) > (max == -1 ? 0 : drive_process.distance(location_drive_max, local_request)) 
                && listDrive[j].m_info.waiting_response == false)
                max = j;
        }
        if(max != -1) {
            listDrive[max].emit('send_request', info_request);
            listDrive[max].m_info.waiting_response = true;
        }
    }

    // sau 2.5s se chay lai ham nay mot lan
    setInterval(() => {
        drive_process.getListBookedCarInStatuLocated()
        .then(rows => {
            console.log(rows.length);
            for (var i = 0; i < rows.length; i++) {
                processSendRequestToDriver(rows[i]);
            }
        })
        .catch(err => {
            console.log(`Error when get list book car statu-ing locatived.`);
            console.log(err);
        })
    }, 2500);
});