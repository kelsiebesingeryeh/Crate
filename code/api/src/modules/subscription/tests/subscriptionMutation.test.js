import request from 'supertest';
import { server, init, userLogin } from '../../../../test/testHelper';
import models from '../../../setup/models'

describe('subscription mutations', () => {
  init()

  it('can create a subscription', async () => {
    let userToken = await userLogin()
    const crate = await models.Crate.findOne()
    const crateId = crate.dataValues.id

    let response = await request(server)
      .post("/")
      .set("Authorization", `Bearer ${userToken}`)
      .set('Accept', 'application/json')
      .send({
        query: `mutation { subscriptionCreate(crateId: ${crateId}, style: "Edgy") { id } }`
      })
 
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("data");
    expect(response.body.data).toHaveProperty("subscriptionCreate");
    let newSubscription = response.body.data.subscriptionCreate
    expect(newSubscription).toHaveProperty("id");
  });
});
