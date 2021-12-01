'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Accessory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Accessory.init({
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    color: DataTypes.STRING,
    caseSize: DataTypes.INTEGER,
    bandSize: DataTypes.STRING,
    productInfo: DataTypes.STRING,
    compatibility: DataTypes.INTEGER,
    recomended: DataTypes.STRING,
    storePickup: DataTypes.STRING,
    delivery: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Accessory',
  });
  return Accessory;
};