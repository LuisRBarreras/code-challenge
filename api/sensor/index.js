const express = require('express');
// const controller = require('./sensor.controller');

const router = express.Router();
router.get('/:field/:operation/:timeInterval', (req, res) => {
  res.send('sensor endpoint');
});

module.exports = router;
