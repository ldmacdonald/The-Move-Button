const express = require('express');
const uuid = require('uuid');
var app = express.createServer();
const path = require("path");
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

app.post('/sendEvent', function(req, res){
		var apigClient = apigClientFactory.newClient({
			invokeUrl:'<>',
			region: 'us-west-2',                                           
			accessKey: '<>',                                
			secretKey: '<>'
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

