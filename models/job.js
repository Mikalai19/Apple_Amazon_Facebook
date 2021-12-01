'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Job.init({
    jobTitle: DataTypes.STRING,
    postedBy: DataTypes.STRING,
    jobDetails: DataTypes.STRING,
    postedDate: DataTypes.INTEGER,
    referenceOption: DataTypes.STRING,
    workLocation: DataTypes.STRING,
    remoteRole: DataTypes.STRING,
    salary: DataTypes.INTEGER,
    benefits: DataTypes.STRING,
    scedule: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Job',
  });
  return Job;
};