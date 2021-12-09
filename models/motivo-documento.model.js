'use strict';

module.exports = (sequelize, DataTypes) => {
  const MotivoDocumento = sequelize.define('motivoDocumento', {
    idMotivo: {
      type: DataTypes.INTEGER, 
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    idDocumento: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    }
  }, {
    freezeTableName: true
  });

  return MotivoDocumento;
};
