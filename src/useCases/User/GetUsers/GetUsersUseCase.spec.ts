import supertest from 'supertest'
import { app } from '../../../app'

describe('Get users endpoint', () => {
  it('should list all users', async () => {
    const res = await supertest(app)
      .get('/list-users')
      .send()
      .set('Authorization', `Bearer "${process.env.TEST_TOKEN}"`)
    console.log('response => ', res.body)
    expect(res.statusCode).toEqual(201)
  })
})
