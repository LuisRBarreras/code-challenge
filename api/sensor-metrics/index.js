const express = require('express');
const controller = require('./sensor-metrics.controller');

const router = express.Router();
router.get('/:field/:operation/:timeInterval', controller.findAll);

module.exports = router;
