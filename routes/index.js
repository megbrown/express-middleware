"use strict";

const { Router } = require('express');
const router = Router();

router.use(require('./see-our-chickens'));
// router.use(require('./see-our-eggs'));

router.get('/', (req, res) => {
  res.json({
    "chickens": "see-our-chickens",
    "eggs": "see-our-eggs"
  });
});

module.exports = router;