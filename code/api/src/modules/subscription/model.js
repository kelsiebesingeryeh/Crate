'use strict'

// Subscription
  // tells Sequelize what columns, data types, and associations the subscriptions table has
  // this file is loaded when the database connection is established
  // we will need to update this file with new columns after database migration
module.exports = function(sequelize, DataTypes) {
  let Subscription = sequelize.define('subscriptions', {
    userId: {
      type: DataTypes.INTEGER
    },
    crateId: {
      type: DataTypes.INTEGER
    }
  })

  Subscription.associate = function(models) {
    Subscription.belongsTo(models.User)
    Subscription.belongsTo(models.Crate)
  }

  return Subscription
}
