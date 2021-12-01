'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Order.init({
    orderPlaced: DataTypes.STRING,
    totalPrice: DataTypes.INTEGER,
    shipTo: DataTypes.STRING,
    orderNumber: DataTypes.INTEGER,
    description: DataTypes.STRING,
    returnDue: DataTypes.STRING,
    deliveryDate: DataTypes.STRING,
    totalOrders: DataTypes.INTEGER,
    trackingId: DataTypes.INTEGER,
    rateItem: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};