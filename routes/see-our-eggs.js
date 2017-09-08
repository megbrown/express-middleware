'use strict';

const { Router } = require('express');
const router = Router();

const { seeEggs } = require('../controllers/eggCtrl');

router.get('/see-our-eggs', seeEggs);

module.exports = router;