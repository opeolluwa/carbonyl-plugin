'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Minifier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Minifier.init({
    longUrl: DataTypes.STRING,
    shortenedUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Minifier',
    tableName: "minifier"
  });
  return Minifier;
};