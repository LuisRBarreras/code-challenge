module.exports = (sequelize, Sequelize) => {
  const SensorMetrics = sequelize.define('sensor_metrics', {
    time: {
      type: Sequelize.TIME,
      allowNull: false,
    },
    power: {
      type: Sequelize.DOUBLE,
      allowNull: true,
    },
    temp: {
      type: Sequelize.DOUBLE,
      allowNull: true,
    },
    humidity: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    light: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    co2: {
      type: Sequelize.DOUBLE,
      allowNull: true,
    },
    dust: {
      type: Sequelize.DOUBLE,
      allowNull: true,
    },
    createdAt: {
      allowNull: true,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: true,
      type: Sequelize.DATE,
    },
  });

  return SensorMetrics;
};
