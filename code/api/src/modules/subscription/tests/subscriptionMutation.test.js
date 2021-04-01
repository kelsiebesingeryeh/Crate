import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../../setup/schema';
import authentication from '../../../setup/authentication'
import database from '../../../setup/database';

describe('subscription mutations', () => {
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

  it.skip('can create a subscription', async () => {
    let response = await request(server)
      .post("/")
      .send({
        query: `{ userLogin(email: "user@crate.com", password: "123456") { token } }`
      })

    let userToken = response.body.data.userLogin.token

    response = await request(server)
      .post("/")
      .set("Authorization", `Bearer ${userToken}`)
      .set('Accept', 'application/json')
      .send({
        query: `mutation { subscriptionCreate(crateId: 7) { id } }`
      })

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("data");
    expect(response.body.data).toHaveProperty("subscriptionCreate");
    let newSubscription = response.body.data.subscriptionCreate
    expect(newSubscription).toHaveProperty("id");
  });


  afterAll(async done => {
    database.close();
    done();
  });
});
