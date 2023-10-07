import supertest from 'supertest'
import { app } from '../../../app'

describe('Get tasks by User endpoint', () => {
  it('should get tasks by user', async () => {
    const res = await supertest(app)
      .get('/tasks/user/24ded564-12d8-4270-981b-700d4982ac1d')
      .set('Authorization', `Bearer "${process.env.TEST_TOKEN}"`)
    console.log('response => ', res.body)
    expect(res.statusCode).toEqual(201)
  })
})
