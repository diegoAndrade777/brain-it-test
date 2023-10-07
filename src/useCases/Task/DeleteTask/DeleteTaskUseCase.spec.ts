import supertest from 'supertest'
import { app } from '../../../app'

describe('Delete a task endpoint', () => {
  it('should delete a task', async () => {
    const res = await supertest(app)
      .delete('/tasks/5e73a747-f9ca-44c5-a588-e8fa7ce3ea95')
      .set('Authorization', `Bearer "${process.env.TEST_TOKEN}"`)
    console.log('response => ', res.body)
    expect(res.statusCode).toEqual(201)
  })
})
