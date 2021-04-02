import request from 'supertest';
import { server, init } from '../../../../test/testHelper';


describe('subscription mutations', () => {
  init()

  it('can create a subscription', async () => {
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
        query: `mutation { subscriptionCreate(crateId: 7, style: "Edgy") { id } }`
      })
      console.log(response.body)
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("data");
    expect(response.body.data).toHaveProperty("subscriptionCreate");
    let newSubscription = response.body.data.subscriptionCreate
    expect(newSubscription).toHaveProperty("id");
  });
});
