'use strict';

module.exports = (sequelize, DataTypes) => {
  const DevolucionNoConsumible = sequelize.define('devolucionNoConsumible', {
    idDevolucionNoConsumible: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    idPrestamoNoConsumible: {
      type: DataTypes.INTEGER,
    },
    fecha: {
      type: DataTypes.DATE,
    }
  }, {
    freezeTableName: true
  });

  return DevolucionNoConsumible;
};
