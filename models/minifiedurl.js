'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class MinifiedUrl extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  MinifiedUrl.init({
    longUrl: DataTypes.STRING,
    shortenedUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MinifiedUrl',
    tableName: "minified_links",
    timeStamps: false
  });
  return MinifiedUrl;
};