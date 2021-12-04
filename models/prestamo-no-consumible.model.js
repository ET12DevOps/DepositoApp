'use strict';

module.exports = (sequelize, DataTypes) => {
  const PrestamoNoConsumible = sequelize.define('prestamoNoConsumible', {
    idPrestamoNoConsumible: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    idNoConsumible: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    nroPrestamo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    devuelto: {
      type: DataTypes.BOOLEAN
    },
    detalle: {
      type: DataTypes.STRING
    }
  }, {
    freezeTableName: true
  });

  return PrestamoNoConsumible;
};
