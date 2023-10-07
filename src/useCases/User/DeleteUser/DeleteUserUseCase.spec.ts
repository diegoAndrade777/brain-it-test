import supertest from 'supertest'
import { app } from '../../../app'

describe('Delete user endpoint', () => {
  it('should delete an user', async () => {
    const res = await supertest(app)
      .delete('/users/b09e99d8-476b-4a01-89b6-b8613103294b')
      .set('Authorization', `Bearer "${process.env.TEST_TOKEN}"`)
    console.log('response => ', res.body)
    expect(res.statusCode).toEqual(201)
  })
})
