'use strict';

module.exports = (sequelize, DataTypes) => {
  const PrestamoNoConsumible = sequelize.define('prestamoNoConsumible', {
    idNoCosumible: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    numPrestamo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    devuelto: {
      type: DataTypes.STRING
    },
    detalle: {
      type: DataTypes.STRING
    }
  }, {
    freezeTableName: true
  });

  return PrestamoNoConsumible;
};
