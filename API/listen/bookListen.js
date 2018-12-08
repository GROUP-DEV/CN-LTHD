var express = require('express'),
book = require('../process/bookProcess');
var router = express.Router();

router.post('/bookcar', (req, res) => {
	console.log(req.body);
	book.bookCar(req.body.b_name, req.body.b_phone, req.body.b_address, req.body.b_note, (req.body.b_seat ? req.body.b_seat : '1'))
	.then(value => {
		//console.log(value);
	})
	.catch(err => {
		console.log(err);
		res.status(400).send(err);
	});

	res.status(200).send({message: 'Added successfully!'});
})

module.exports = router;