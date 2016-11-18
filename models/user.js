'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    facebookId:{
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull:false
    },
    lastName:{
      type: DataTypes.STRING,
      allowNull:false
    },
    zipCode:{
      type: DataTypes.STRING,
    },
    jobType: DataTypes.STRING,
    interests: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};