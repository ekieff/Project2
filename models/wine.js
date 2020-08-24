'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class wine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.wine.hasMany(models.wineTasting)
    }
  };
  wine.init({
    wine: DataTypes.STRING,
    color: DataTypes.STRING,
    country: DataTypes.STRING,
    region: DataTypes.STRING,
    appelation: DataTypes.STRING,
    vintage: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'wine',
  });
  return wine;
};