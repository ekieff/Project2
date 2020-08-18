'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class wineFlight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.wineFlight.belongsTo(models.user)
      models.wineFlight.hasMany(models.wine)
    }
  };
  wineFlight.init({
    wine1: DataTypes.STRING,
    wine2: DataTypes.STRING,
    wine3: DataTypes.STRING,
    wine4: DataTypes.STRING,
    wine5: DataTypes.STRING,
    wine6: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'wineFlight',
  });
  return wineFlight;
};