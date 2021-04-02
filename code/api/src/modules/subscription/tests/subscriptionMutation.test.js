import request from 'supertest';
import { server, init, userLogin } from '../../../../test/testHelper';


describe('subscription mutations', () => {
  init()

  it('can create a subscription', async () => {
    let userToken = await userLogin()

    let response = await request(server)
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
