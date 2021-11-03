'use strict';

module.exports = (sequelize, DataTypes) => {
  const PrestamoConsumible = sequelize.define('prestamoConsumible', {
    idPrestamoConsumible: {
      type: DataTypes.INTEGER,
      primaryKey:true,
      allowNull:false
    },
    idConsumible: {
      type: DataTypes.INTEGER,
    },
    numPrestamo: {
      type: DataTypes.INTEGER,
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
