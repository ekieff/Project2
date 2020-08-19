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
    }
  };
  wineFlight.init({
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    wine1: DataTypes.INTEGER,
    wine2: DataTypes.INTEGER,
    wine3: DataTypes.INTEGER,
    wine4: DataTypes.INTEGER,
    wine5: DataTypes.INTEGER,
    wine6: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'wineFlight',
  });
  return wineFlight;
};