import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../../setup/schema';
import authentication from '../../../setup/authentication'
import database from '../../../setup/database'
import { isType } from 'graphql';


describe('product queries', () => {
  let server = express();

  beforeAll(() => {
    server.use(authentication)
    server.use(
      "/",
      graphqlHTTP(request => ({
        schema:schema,
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

  it('returns list of products', async () => {
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
        query: `{ surveyProducts(type: 1, gender: 1){ category products{ category styleTag image } } }`
            })

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("data");
    expect(response.body).not.toHaveProperty("errors");
    expect(response.body.data).toHaveProperty("surveyProducts");
    expect(response.body.data.surveyProducts).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          category: 1,
          products: expect.arrayContaining([
            expect.objectContaining({
              category: 1,
              styleTag: 3,
              image: '/images/stock/edgy-shirt-m-1.jpg'
            })
          ])
        })
      ])
    )
  });

  afterAll(async done => {
    database.close();
    done();
  });
})


// data: {
//   products: {
//     shirt: [{}],
//     bottoms: [{}],
//     jacket: [{}]
//   }
// }
