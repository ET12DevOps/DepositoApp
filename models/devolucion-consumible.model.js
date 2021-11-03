'use strict';

module.exports = (sequelize, DataTypes) => {
  const DevolucionConsumible = sequelize.define('devolucionConsumible', {
    idDevolucionConsumible: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    idConsumible: {
      type: DataTypes.INTEGER,
    },
    numPrestamo: {
      type: DataTypes.INTEGER,
    },
    fecha: {
      type: DataTypes.DATE,
    }
  }, {
    freezeTableName: true
  });

  return DevolucionConsumible;
};
