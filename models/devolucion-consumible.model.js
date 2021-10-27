'use strict';

module.exports = (sequelize, DataTypes) => {
  const DevolucionConsumible = sequelize.define('devolucionConsumible', {
    idDevolucionConsumible: {
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

  return DevolucionConsumible;
};
