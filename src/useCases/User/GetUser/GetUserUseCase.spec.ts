import supertest from 'supertest'
import { app } from '../../../app'

describe('Get an user endpoint', () => {
  it('should get an user by id', async () => {
    const res = await supertest(app)
      .get('/users/b09e99d8-476b-4a01-89b6-b8613103294b')
      .set('Authorization', `Bearer "${process.env.TEST_TOKEN}"`)
    console.log('response => ', res.body)
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('email')
  })
})
