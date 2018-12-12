var express = require('express');
const debug = require('debug')('poi:server');
const path = require('path');
var jwt=require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');

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
require('./listen/driverListen');


var port = process.env.port || 1742;
app.listen(port, () => {
	console.log(`Running...`);
	console.log(`Open with address: ${require('ip').address()}:${port}`);
});
