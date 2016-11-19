'use strict';
module.exports = function(sequelize, DataTypes) {
  var listings = sequelize.define('listings', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    position: DataTypes.STRING,
    zip: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return listings;
};