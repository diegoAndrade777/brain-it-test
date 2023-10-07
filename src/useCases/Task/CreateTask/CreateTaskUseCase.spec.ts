import supertest from 'supertest'
import { app } from '../../../app'

describe('Create task endpoint', () => {
  it('should create a new task', async () => {
    const res = await supertest(app)
      .post('/tasks')
      .send({
        title: 'Tarefa3',
        description: 'criar crud 3',
        user: {
          id: '24ded564-12d8-4270-981b-700d4982ac1d'
        },
        completed: false
      })
      .set('Authorization', `Bearer "${process.env.TEST_TOKEN}"`)
    console.log('response => ', res.body)
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('id')
  })
})
