import request from 'supertest';
import { server, init, userLogin} from '../../../../test/testHelper';


describe('product queries', () => {
  init()
  
  it('returns list of products', async () => {
    let userToken = await userLogin()


    let response = await request(server)
      .post("/")
      .set("Authorization", `Bearer ${userToken}`)
      .set('Accept', 'application/json')
      .send({
        query: `{ surveyProducts(type: 1, gender: 1){ products{ category styleTag image } } }`
            })

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("data");
    expect(response.body).not.toHaveProperty("errors");
    expect(response.body.data).toHaveProperty("surveyProducts");
    expect(response.body.data.surveyProducts).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
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

  it('can query a different type and gender', async () => {
    let userToken = await userLogin()

    let response = await request(server)
      .post("/")
      .set("Authorization", `Bearer ${userToken}`)
      .set('Accept', 'application/json')
      .send({
        query: `{ surveyProducts(type: 2, gender: 2){ products{ category styleTag image } } }`
            })

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("data");
    expect(response.body).not.toHaveProperty("errors");
    expect(response.body.data).toHaveProperty("surveyProducts");
    expect(response.body.data.surveyProducts).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          products: expect.arrayContaining([
            expect.objectContaining({
              category: 6,
              styleTag: 2,
              image: '/images/stock/classy-watch-f-2.jpg'
            })
          ])
        })
      ])
    )
  });

  it('can query without a type', async () => {
    let userToken = await userLogin()
    
    let response = await request(server)
      .post("/")
      .set("Authorization", `Bearer ${userToken}`)
      .set('Accept', 'application/json')
      .send({
        query: `{ surveyProducts(gender: 2){ products{ category styleTag image type } } }`
            })

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("data");
    expect(response.body).not.toHaveProperty("errors");
    expect(response.body.data).toHaveProperty("surveyProducts");
    expect(response.body.data.surveyProducts).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          products: expect.arrayContaining([
            expect.objectContaining({
              type: 1
            })
          ])
        }),
        expect.objectContaining({
          products: expect.arrayContaining([
            expect.objectContaining({
              type: 2
            })
          ])
        })
      ])
    )
  });
})

