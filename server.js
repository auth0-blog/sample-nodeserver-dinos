'use strict';

//----- Requires

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var _ = require('lodash');
var dinoJson = require('./dinosaurs.json');

//---- Variables

var app = express();
var allDinos = getAllDinos();

//---- Set up Express app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//----- GET Routes

app.get('/api/dinosaurs', function(req, res) {
	res.json(allDinos);
});

app.get('/api/dinosaur/:id', function(req,res) {
	var id = req.params.id * 1;
	var thisDino = _.find(dinoJson, { id: id });
	res.json(thisDino);
});

//---- Serve

app.listen(3001);
console.log('Listening on localhost:3001');

/**
 * Get all dinosaurs (abbreviated details)
 * [{ id: number, name: string }]
 * 
 * @returns {array}
 */
function getAllDinos() {
	return _.map(dinoJson, function(obj) {
		return {
			id: obj.id,
			name: obj.name
		};
	});
}