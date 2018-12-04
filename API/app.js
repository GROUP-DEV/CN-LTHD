var express = require('express'),
morgan = require('morgan'),
bodyParser = require('body-parser'),
cors = require('cors');

var app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.json({
		msg: 'Welcome to VietBiker'
	});
})

app.use('/u', require('./listen/userListen'));

var port = process.env.port || 1742;
app.listen(port, () => {
	console.log(`Running...`);
	console.log(`Open with address: ${require('ip').address()}:${port}`);
});
