const express = require('express');
const uuid = require('uuid');
var app = express.createServer();
const port = 3000

app.get('/', (req, res) => res.send('Hello asd!'))

app.post('/', function (req, res) {
  res.send('Got a POST request')
})

var friends = [{name : 'girish', age: '30'}, {name:'anand', age:'34'}];
app.post('/register', function(req, res){
		var email = req.param('email');
		var pwd = req.param('pwd');
		console.log(email + "-" + pwd);
		// Auth
		res.status(200).send({Guid : uuid.v1()});
	}
);

app.post('/login', function(req, res){
		var user = req.body;
		// save it to db :?
		res.status(200).send({Guid : uuid.v1()});
	}
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

