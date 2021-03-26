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
setupLoadModules(server)
// this is loading the modules and the fours folders inside 
// crate, product, subscription, user 



// Setup uploads
setupUpload(server)
// this is loads thet Upload 
// Allows the admin to upload pictures 

// Setup GraphQL
setupGraphQL(server)


// Start server
setupStartServer(server)


