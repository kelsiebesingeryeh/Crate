// Imports
import graphqlHTTP from 'express-graphql'

// App Imports
import serverConfig from '../config/server.json'
import authentication from './authentication'
import schema from './schema'

// Setup GraphQL
export default function (server) {
  console.info('SETUP - GraphQL...')

  // this configures the app to verify the api token sent in the headers of requests which need to be made by an authenticated user
  server.use(authentication)

  // API (GraphQL on route `/`)
  // this is effectively the GraphQL API route; it takes the url as the first argument and the action/function configuring GraphQL as the second
  server.use(serverConfig.graphql.endpoint, graphqlHTTP(request => ({
    schema,
    graphiql: serverConfig.graphql.ide,
    pretty: serverConfig.graphql.pretty,
    context: {
      auth: {
        user: request.user,
        isAuthenticated: request.user && request.user.id > 0
      }
    }
  })))
}
