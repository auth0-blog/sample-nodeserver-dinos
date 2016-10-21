'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var _ = require('lodash');
var dinos = require('./dinosaurs.json');
var dinoDetail = require('./dinosaurs-detail.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/dinosaurs', function(req, res) {
	res.json(dinos);
});

app.get('/api/dinosaur/:id', function(req,res) {
	var id = req.params.id * 1;
	var thisDino = _.find(dinoDetail, { id: id });
	res.json(thisDino);
});

app.listen(3001);
console.log('Listening on localhost:3001');