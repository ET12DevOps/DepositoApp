'use strict';

module.exports = (sequelize, DataTypes) => {
  const DevolucionConsumible = sequelize.define('devolucionConsumible', {
    idDevolucionConsumible: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    idPrestamoConsumible: {
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
