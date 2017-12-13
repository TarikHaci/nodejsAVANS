//comentaar
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var routes_v1 = require('./api/routes_v1');
//var routes_v2 = require('./api/routes_v2');

var app = express();

app.use(bodyParser.urlencoded({'extended' : 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type : 'application/vnd.api+json'}));

app.use(logger('dev'));

app.use('*', function(req, res, next)
{
	res.contentType('application/json');
	console.log('Contenttype toegevoegd');
	next();
});

app.use('/api/v1', routes_v1);
//app.use('/api/v2', routes_v2);

app.use('*', function(error, req, res, next)
{
	res.status(500).json({
		message : error
	}).end();
// res.status(200)
// .json({
// 	message: 'Geen enkele endpoint matchte!' + ' URL ' + req.getHost + req.originalUrl + ' bestaat niet!'
// })
// .end();
});

app.listen(process.env.PORT || 3000, function(){
console.log('De server luistert op port 3000');
});

module.exports = app;