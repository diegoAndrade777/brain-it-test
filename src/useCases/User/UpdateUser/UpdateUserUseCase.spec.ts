import supertest from 'supertest'
import { app } from '../../../app'

describe('Update a user endpoint', () => {
  it('should update a user', async () => {
    const res = await supertest(app)
      .patch('/users')
      .send({
        id: 'b09e99d8-476b-4a01-89b6-b8613103294b',
        name: 'usuario'
      })
      .set('Authorization', `Bearer "${process.env.TEST_TOKEN}"`)
    console.log('response => ', res.body)
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('id')
  })
})
