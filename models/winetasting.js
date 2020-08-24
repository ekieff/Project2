'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class wineTasting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.wineTasting.belongsTo(models.user)
      models.wineTasting.belongsTo(models.wine)
    }
  };
  wineTasting.init({
    userId: DataTypes.INTEGER,
    wineId: DataTypes.INTEGER,
    notes: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'wineTasting',
  });
  return wineTasting;
};