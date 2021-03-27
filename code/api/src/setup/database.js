// Imports
import { Sequelize } from 'sequelize'

// App Imports
  // loads the environment
import { NODE_ENV } from '../config/env'
import databaseConfig from '../config/database.json'

// Load database config
  // loads the database for the environment the app is running in
const databaseConfigEnv = databaseConfig[NODE_ENV]

// Create new database connection
  // createsan instance of the Sequelize class with a connection to the database
const connection = new Sequelize(databaseConfigEnv.database, databaseConfigEnv.username, databaseConfigEnv.password, {
  host: databaseConfigEnv.host,
  dialect: databaseConfigEnv.dialect,
  logging: false
})

// Test connection
console.info('SETUP - Connecting database...')

connection
  // tests that the database connections is ok
  .authenticate()
  .then(() => {
    console.info('INFO - Database connected.')
  })
  .catch(err => {
    console.error('ERROR - Unable to connect to the database:', err)
  })

export default connection
