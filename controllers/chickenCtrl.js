"use strict";

// let express = require('express');
const { readFile } = require('fs');

module.exports.seeChickens = (req, res, next) => {
	readFile('../templates/see-our-chickens.html', (err, data) => {
		if(err) {
			next(err);
		}
		res.send(data);
	});
};