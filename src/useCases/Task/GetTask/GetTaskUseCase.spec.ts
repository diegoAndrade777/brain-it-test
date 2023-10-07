import supertest from 'supertest'
import { app } from '../../../app'

describe('Get an task endpoint', () => {
  it('should get an task by id', async () => {
    const res = await supertest(app)
      .get('/tasks/a641653c-f1eb-40d9-9a40-e5e26b2ed840')
      .set('Authorization', `Bearer "${process.env.TEST_TOKEN}"`)
    console.log('response => ', res.body)
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('title')
  })
})
