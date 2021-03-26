'use strict'

module.exports = function(sequelize, DataTypes) {
  let Crate = sequelize.define('crates', {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    }
  })

  Crate.associate = function(models) {
    Crate.hasMany(models.Subscription)
  }

  return Crate
}

// modules contains the four tables 
// if a new table needs to be created we will need to create a new table folder. 
// each table has its own folders 

