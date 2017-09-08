"use strict";
const { join } = require('path');
const { sendFile } = require('fs');

module.exports.seeChickens = (req, res, next) => {
	res.sendFile(join(__dirname, "../templates/see-our-chickens.html"));
};