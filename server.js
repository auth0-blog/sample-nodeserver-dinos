'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var _ = require('lodash');
var dinos = require('./dinosaurs.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/dinosaurs', function(req, res) {
	res.json(dinos);
});

app.get('/api/dinosaur/:id', function(req,res) {
	var id = req.params.id * 1;
	var thisDino = _.find(dinos, { id: id });
	res.json(thisDino);
});

app.get('/api/dinosaurs/carnivores', function(req,res) {
	var carnivores = _.filter(dinos, { diet: 'carnivorous' });
	res.json(carnivores);
});

app.get('/api/dinosaurs/omnivores', function(req,res) {
	var omnivores = _.filter(dinos, { diet: 'omnivorous' });
	res.json(omnivores);
});

app.get('/api/dinosaurs/herbivores', function(req,res) {
	var herbivores = _.filter(dinos, { diet: 'herbivorous' });
	res.json(herbivores);
});

app.listen(3001);
console.log('Listening on localhost:3001');