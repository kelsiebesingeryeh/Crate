import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../../setup/schema';
import authentication from '../../../setup/authentication'
import database from '../../../setup/database';

describe('user queries', () => {
  let server = express();

  beforeAll(() => {
    server.use(authentication)

    server.use(
      "/",
      graphqlHTTP(request => ({
        schema: schema,
        graphiql: false,
        context: {
          auth: {
            user: request.user,
            isAuthenticated: request.user && request.user.id > 0
          }
        }
      }))
    )
  });

  it('can log in a user', async () => {
    let response = await request(server)
      .post("/")
      .send({
        query: `{ userLogin(email: "user@crate.com", password: "123456") { token } }`
      })
      .expect(200)

    expect(response.body).toHaveProperty("data");
    expect(response.body.data).toHaveProperty("userLogin");
    expect(response.body.data.userLogin).toHaveProperty("token");
  });

  it('can get all user emails', async () => {
    let response = await request(server)
      .post("/")
      .send({
        query: `{ users { email } }`
      })
      .expect(200)

    expect(response.statusCode).toBe(200)
    expect(response.body).toMatchObject({
      data: {
        users: [
          { email: "admin@crate.com"},
          { email: "user@crate.com"}
        ]
      }
    })
  })

  afterAll(async done => {
    database.close();
    done();
  })
});
