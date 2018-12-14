var express = require('express');
book = require('../process/bookProcess');
geocoding = require('../other/google_maps'); 
var jwt=require('jsonwebtoken');
geocode = require('../process/geocodeProcess');
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

router.post('/bookcar',verifyAccess ,(req, res) => {
	console.log(req.body);
	var date_book = book.getDateCurrent();
	console.log(date_book);
	book.bookCar(req.body.b_name, req.body.b_phone, req.body.b_address, req.body.b_note, (req.body.b_seat ? req.body.b_seat : '1'), date_book)
	.then(value => {
		console.log(value);
		return value;
	})
	.then(value => {
		return geocoding.getGeoCoding(req.body.b_address);
	})
	.then(value => {
		console.log(value);
		return geocode.get(value[0].latitude, value[0].longitude);
	})
	.then(rows => {
		if(rows.length == 1)
			return rows[0].id;
		return geocoding.getGeoCoding(req.body.b_address);
	})
	.then(value => {
		if(typeof value === 'object')
			return geocode.add(value[0].latitude, value[0].longitude);
		return value;
	})
	.then(value => {
		if(typeof value === 'object')
			value = value.insertId;
		book.set2GeoCoding(value, req.body.b_phone, date_book)
		res.status(200).send({message: 'Added successfully!'});
	})
	.catch(err => {
		console.log(err);
		res.status(400).send(err);
	});
})


router.post('/getRequestFromPhone',verifyAccess ,(req, res) => {
	book.getRequestFromPhone(req.body.phone_customer)
	.then(rows => {
		res.status(200).send(JSON.stringify(rows));
	})
	.catch(err => {
		console.log(err);
		res.status(400).send(JSON.stringify(err));
	});
})



router.get('/',verifyAccess ,(req, res) => {
	book.getAll()
	.then(rows => {
		res.status(200).send(JSON.stringify(rows));
	})
	.catch(err => {
		console.log(err);
		res.status(400).send(JSON.stringify(err));
	});
})

module.exports = router;