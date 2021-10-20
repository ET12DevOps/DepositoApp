'use strict';

module.exports = (sequelize, DataTypes) => {
  const PrestamoConsumible = sequelize.define('prestamoConsumible', {
    idConsumible: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    numPrestamo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    devuelto: {
      type: DataTypes.STRING
    },
    detalle: {
      type: DataTypes.STRING
    }
  });

  return PrestamoConsumible;
};
