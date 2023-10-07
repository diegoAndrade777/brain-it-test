import supertest from 'supertest'
import { app } from '../../../app'

describe('Create user endpoint', () => {
  it('should create a new user', async () => {
    const res = await supertest(app).post('/users').send({
      name: 'usuario',
      email: 'usertest@gmail.com',
      password: 'qwe123'
    })
    console.log('response => ', res.body)
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('newUser')
  })
})
