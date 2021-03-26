// This file is the entry point for the app; it's used to load dependencies, load the GraphQL schema, and start the server. We won't need to change this file or the files it imports to implement additional features

// Imports
import express from 'express'

// App Imports
import setupLoadModules from './setup/load-modules'
import setupGraphQL from './setup/graphql'
import setupUpload from './setup/upload'
import setupStartServer from './setup/start-server'

// Create express server
const server = express()

// Setup load modules
  // dependencies help the api do things like communicate with the front-end, parse json, and load assets from the public folder
setupLoadModules(server)

// Setup uploads
  // allows the app to receive and store images, which can be uploaded by an admin user when they add products
setupUpload(server)

// Setup GraphQL
  // configures the server to user GraphQL, which includes routes, the database connection, and the configuration for graphiql
setupGraphQL(server)

// Start server
  // starts the server/tells it to begin listening for requests on the port specified in the env file
setupStartServer(server)
