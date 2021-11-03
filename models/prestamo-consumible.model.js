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
      type: DataTypes.BOOLEAN
    },
    detalle: {
      type: DataTypes.STRING
    }
  }, {
    freezeTableName: true
  });

  return PrestamoConsumible;
};
