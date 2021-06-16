'use strict';

var express = require('express');
// const controller = require('./sensor.controller');

var router = express.Router();
router.get('/:field/:operation/:timeInterval', (req, res) => {
    res.send('sensor endpoint');
});

module.exports = router;