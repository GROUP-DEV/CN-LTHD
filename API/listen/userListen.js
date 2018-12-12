var express = require('express');
var jwt=require('jsonwebtoken');
user = require('../process/userProcess');
var router = express.Router();

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


/*
"u":"coldboy@gmail.com",
"p":"123456"
*/
router.post('/login', (req, res) => {
	user.logIn(req.body.u, req.body.p)
	.then(rows => {
		if(rows.length == 1){
			var userAuth=rows[0];
			var payload={
				user: userAuth,
			}
			var acToken=jwt.sign(payload,'7avodoilc',{
				expiresIn: 180
			});
			var rfToken='';
			res.json({
			user: userAuth,
			access_token: acToken,
			refresh_token: rfToken});	
		}else{
			res.status(405).send({message: `Don't found user`});
		}
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

router.post('/changeStatus', (req, res) => {
	user.changeStatus(req.body.u_id, req.body.u_status)
	.then(value => {
		console.log(value);
		res.status(200).send({message: `Change status success!`});
	})
	.catch(err => {
		//console.log(err);
		res.status(500).send(err);
	});
})


module.exports = router;