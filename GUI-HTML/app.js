const express = require('express')
const bodyParser = require('body-parser')

var app = express();
const port = 3000

var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({ extended: false })

// lắng nghe phương thức post trang login lấy ra 2 giá trị username và password
app.post('/login.html', urlencodedParser, function (req, res) {
    res.send('welcome, ' + req.body.Username +' '+req.body.Password)
  })
  

app.listen(port, () => console.log(`Example app listening on port ${port}!`))