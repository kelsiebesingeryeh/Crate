import request from 'supertest';
import { server, init } from '../../../../test/testHelper';


describe('user queries', () => {
  init()

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
});
