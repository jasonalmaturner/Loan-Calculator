'use strict';

var express = require('express');
var app = express();
var port = 9004
var interestRate;

app.use(express.static(__dirname + '/public'))

app.listen(port, function(){
	console.log('listening on port ' + port);
})

app.get('/interest_rate', function(req, res){
	interestRate = +(Math.random() * 20).toFixed(2)

	return res.status(200).send(JSON.stringify(interestRate));
})