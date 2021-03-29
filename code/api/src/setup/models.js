// Imports
import Sequelize from 'sequelize'

// App Imports
import databaseConnection from './database'

const models = {
  User: databaseConnection.import('../modules/user/model'),
  Product: databaseConnection.import('../modules/product/model'),
  Crate: databaseConnection.import('../modules/crate/model'),
  Subscription: databaseConnection.import('../modules/subscription/model')
}
// if new table is created this is where we will update that. 


// const is to save a variable 
// in js theres four ways to set a variable ie). 
// const = means variable cant be changed 
// let = means variable is prob gona change or be changed 
// var = it can be changed but don't need to? 


Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models)
  }
})

// looking at model keys ie. line 8 User is the key 
// for each model name associate it with its proper model. 




models.sequelize = databaseConnection
models.Sequelize = Sequelize

export default models
