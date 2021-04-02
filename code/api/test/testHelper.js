import express from 'express';
import graphqlHTTP from 'express-graphql'; 
import schema from '../src/setup/schema';
import authentication from '../src/setup/authentication'
import database from '../src/setup/database'



let server = express();
function init() { 
  beforeAll(() => {
    server.use(authentication)
    server.use(
      "/",
      graphqlHTTP(request => ({
        schema: schema,
        graphql: false,
        context: {
          auth: {
            user: request.user,
            isAuthenticated: request.user && request.user.id > 0
            }
          }
        }))
      )
    }
  )

  afterAll(async done => {
    database.close();
    done();
  });
}

export { server, init } 