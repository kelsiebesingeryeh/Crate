// Imports
import Sequelize from 'sequelize'

// App Imports
  // the databaseConnection is an instance of Sequelize that that contains a connection to the database
import databaseConnection from './database'

  // imports the model files into Sequelize, which tells Sequelize what tables are available and how they are related and allows the resolvers to call models.User or models.Product to query those tables
const models = {
  User: databaseConnection.import('../modules/user/model'),
  Product: databaseConnection.import('../modules/product/model'),
  Crate: databaseConnection.import('../modules/crate/model'),
  Subscription: databaseConnection.import('../modules/subscription/model')
}

// sets up has many & belongs to relationships in Sequelize
Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models)
  }
})

  // defines the database connection to attach to the models
models.sequelize = databaseConnection
models.Sequelize = Sequelize

export default models
