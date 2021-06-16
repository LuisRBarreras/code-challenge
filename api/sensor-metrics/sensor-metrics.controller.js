const db = require('../models');

const SensorMetrics = db.sensor_metrics;

exports.findAll = async (req, res) => {
  try {
    const records = await SensorMetrics.findAll({
      attributes: ['co2', 'temp'],
    });
    res.send(records);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};
