'use strict';

module.exports = (sequelize, DataTypes) => {
  const MotivoDocumento = sequelize.define('motivoDocumento', {
    idMotivo: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    idDocumento: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    }
  });

  return MotivoDocumento;
};
