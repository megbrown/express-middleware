'use strict';

const { Router } = require('express');
const router = Router();

const { seeChickens } = require('../controllers/chickenCtrl');

router.get('/see-our-chickens', seeChickens);

module.exports = router;


