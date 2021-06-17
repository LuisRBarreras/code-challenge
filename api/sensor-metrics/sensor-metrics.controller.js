const db = require('../models');
const { captureException } = require('../helpers/sentry.helpers');

const SensorMetrics = db.sensor_metrics;

exports.findHighest = async (req, res) => {
  try {
    const { field } = req.params;

    if (!field) {
      throw new Error('Missing parameters');
    }

    const query = `SELECT  time, max(${field}) FROM sensor_metrics GROUP BY ${field}, time ORDER BY ${field} DESC LIMIT 1;`;

    const record = await db.sequelize.query(query, {
      model: SensorMetrics,
      mapToModel: true,
    });

    return res.json(record);
  } catch (error) {
    captureException(error);
    return res.status(500).send(error);
  }
};

exports.findHighestAverageGroupByInterval = async (req, res) => {
  try {
    const { field, interval } = req.params;

    if (!field || !interval) {
      throw new Error('Missing parameters');
    }

    const queryInterval = (interval === 'hour') ? '1 hours' : '1 days';

    const query = `SELECT time_bucket('${queryInterval}', time) as "bucket" , avg(${field}) as ${field}_avg
      FROM sensor_metrics GROUP BY bucket ORDER BY ${field}_avg DESC LIMIT 1; `;

    const record = await db.sequelize.query(query, {
      model: SensorMetrics,
      mapToModel: true,
    });

    return res.json(record);
  } catch (error) {
    captureException(error);
    return res.status(500).send(error);
  }
};
