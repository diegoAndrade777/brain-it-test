import supertest from 'supertest'
import { app } from '../../../app'

describe('Update a task endpoint', () => {
  it('should update a task', async () => {
    const res = await supertest(app)
      .patch('/tasks')
      .send({
        id: 'a641653c-f1eb-40d9-9a40-e5e26b2ed840',
        title: 'tarefa 3 updated',
        completed: true
      })
      .set('Authorization', `Bearer "${process.env.TEST_TOKEN}"`)
    console.log('response => ', res.body)
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('id')
  })
})
