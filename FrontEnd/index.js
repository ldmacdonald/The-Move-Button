const express = require('express');
const uuid = require('uuid');
var app = express.createServer();
const path = require("path");
const port = 3000;
var fs = require('fs');

app.use(express.static(__dirname + '/www'));

var friends = [{name : 'girish', age: '30'}, {name:'anand', age:'34'}];
app.post('/register', function(req, res){
		var email = req.param('email');
		var pwd = req.param('pwd');
		console.log(email + "-" + pwd);
		// Auth
		res.status(200).send({Guid : uuid.v1()});
	}
);

app.get('/signup', function(req, res){
		fs.readFile('www/signup.html',
            function(err, data) {
                if (err) throw err;
                res.writeHead(200);
                res.write(data.toString('utf8'));
                return res.end();
        });

	}
);


app.get('/login', function(req, res){
		fs.readFile('www/login.html',
            function(err, data) {        
                if (err) throw err;
                res.writeHead(200);
                res.write(data.toString('utf8'));
                return res.end();
        });
 
	}
);

app.post('/login', function(req, res){
		var user = req.body;
		// save it to db :?
		res.status(200).send({Guid : uuid.v1()});
	}
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

