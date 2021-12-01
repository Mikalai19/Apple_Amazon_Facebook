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
    jobTitle:
    {
      type: DataTypes.STRING,
      validate: { notNull: true }
    },
    postedBy: DataTypes.STRING,
    jobDetails: DataTypes.STRING,
    postedDate: {
      type: DataTypes.INTEGER,
      validate: { isInt: { msg: 'postDate must be in Integer' } }
    },
    referenceOption: DataTypes.STRING,
    workLocation: DataTypes.STRING,
    remoteRole: DataTypes.STRING,
    salary:
    {
      type: DataTypes.INTEGER,
      allowNull: false

    },
    benefits: DataTypes.STRING,
    scedule: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Job',
  });
  return Job;
};