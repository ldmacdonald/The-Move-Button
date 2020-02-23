const express = require('express');
const uuid = require('uuid');
const bodyParser = require('body-parser');
var app = express.createServer();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); 

const path = require("path");
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)
db.defaults({ schedule: []})
  .write();
  
const port = 3000;
var fs = require('fs');
var apigClientFactory = require('aws-api-gateway-client').default;

app.use(express.static(__dirname + '/www'));
var userToken = 'XER';

var friends = [{name : 'girish', age: '30'}, {name:'anand', age:'34'}];
app.post('/register', function(req, res){
		var email = req.param('email');
		var pwd = req.param('pwd');
		console.log(email + "-" + pwd);
		// Auth
		res.status(200).send({Guid : uuid.v1()});
	}
);

app.post('/schedule', function(req, res){
		var sc = req.body;
		console.log(sc);
		db.get('schedule')
		  .push(sc)
		  .write()
		res.status(200).send({Guid : uuid.v1()});
	}
);

app.get('/schedule', function(req, res){
		res.status(200).send(db.get('schedule')
		  .take(5)
		  .value());
	}
);
var counter = 0;
app.get('/nowIstheTime', function(req, res){
		//var ticks = ((new Date().getTime() * 10000) + 621355968000000000);
		res.status(200).send({"isTime" : ++counter % 11 == 0});
	}
);

app.post('/sendEvent', function(req, res){
		var apigClient = apigClientFactory.newClient({
			invokeUrl:'',
			region: '',
			accessKey: '',
			secretKey: ''
		});

		var pathParams = {
		};
		var method = 'POST';
		var additionalParams = {
		};
		var body = {
			"EventTime": new Date(),
			"UserID": userToken
		};
		var pathTemplate = "";
		apigClient.invokeApi(pathParams, pathTemplate, method, additionalParams, body)
			.then(function(result){
				console.log(result);
			}).catch( function(result){
				console.log(result);
			});
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

