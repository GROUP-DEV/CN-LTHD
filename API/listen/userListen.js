var express = require('express'),
user = require('../process/userProcess');
var router = express.Router();

/*
"u":"coldboy@gmail.com",
"p":"123456"
*/
router.post('/login', (req, res) => {
	user.logIn(req.body.u, req.body.p)
	.then(rows => {
		if(rows.length == 1)
			res.status(200).json(rows[0]);
		res.status(405).send({message: `Don't found user`});
	})
	.catch(err => {
		//console.log(err);
		res.status(500).send(err);
	});
})

/*
"u_phone":"0947123456"
"u_mail":"coldboy@gmail.com",
"u_pass":"123456",
"u_name":"Tran Joss",
"u_role":"0"
"u_seat":"1" (if car has 1 seats)
*/
router.post('/signin', (req, res) => {
	user.signIn(req.body.u_name, req.body.u_phone, req.body.u_seat, req.body.u_mail, req.body.u_pass, req.body.u_role)
	.then(value => {
		console.log(value);
		res.status(200).send({message: `Create account successfully!`});
	})
	.catch(err => {
		//console.log(err);
		res.status(500).send(err);
	});
})

module.exports = router;