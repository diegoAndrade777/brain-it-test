import supertest from 'supertest'
import { app } from '../../../app'

describe('Get tasks endpoint', () => {
  it('should list all tasks', async () => {
    const res = await supertest(app)
      .get('/list-tasks')
      .send()
      .set('Authorization', `Bearer "${process.env.TEST_TOKEN}"`)
    console.log('response => ', res.body)
    expect(res.statusCode).toEqual(201)
  })
})
