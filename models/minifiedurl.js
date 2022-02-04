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
    //the actual url
    longUrl: {
      type: DataTypes.TEXT
    },
    //identity assigned to the minified url
    shortenedUrlId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    // timestamps:false,
    modelName: 'MinifiedUrl',
    tableName: "minified_links",
  });
  return MinifiedUrl;
};