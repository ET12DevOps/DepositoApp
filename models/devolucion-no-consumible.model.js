'use strict';

module.exports = (sequelize, DataTypes) => {
  const DevolucionNoConsumible = sequelize.define('devolucionNoConsumible', {
    idDevolucionNoConsumible: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    numPrestamo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    }
  }, {
    freezeTableName: true
  });

  return DevolucionNoConsumible;
};
