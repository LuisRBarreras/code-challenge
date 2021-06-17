const express = require('express');
const controller = require('./sensor-metrics.controller');

const router = express.Router();
router.get('/highest/:field', controller.findHighest);
router.get('/average/highest/:field/:interval', controller.findHighestAverageGroupByInterval);

module.exports = router;
