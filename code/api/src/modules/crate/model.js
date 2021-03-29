'use strict'

module.exports = function(sequelize, DataTypes) {
  let Crate = sequelize.define('crates', {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    type: {
      type: DataTypes.INTEGER
    },
    gender: {
      type: DataTypes.INTEGER
    }
  })

  Crate.associate = function(models) {
    Crate.hasMany(models.Subscription)
  }

  return Crate
}