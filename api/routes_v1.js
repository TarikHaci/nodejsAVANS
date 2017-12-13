// routes_v1_.js
var express = require('express');
var routes = express.Router();

var mijnObject = {
	mijnstekst: 'Hello World!'
};

routes.get('/hello', function(req, res){
	res.contentType('application/json');
	res.status(200);
	res.json(mijnObject);
});

routes.post('/hello', function(req, res){
	var body = req.body;

	console.dir(body);

	res.status(200);
	res.json(mijnObject);
});

routes.delete('/hello', function(req, res){
	var body = req.body;

	console.dir(body);
	
	res.status(200);
	res.json(mijnObject);
});

routes.put('/hello', function(req, res){
	var body = req.body;

	console.dir(body);
	
	res.status(200);
	res.json(mijnObject);
});

routes.get('/goodbye', function(req, res){
	res.status(200);
	res.json({ 'tekst' : 'Goodbye get!'});
});

routes.get('/hello/error', function(req, res, next){
	next('HIER TREEDT EEN ERROR OP');
});

module.exports = routes;