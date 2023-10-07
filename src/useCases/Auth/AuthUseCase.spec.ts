import supertest from 'supertest'
import { app } from '../../app'

describe('Auth endpoint', () => {
  it('should authenticate a user', async () => {
    const res = await supertest(app).post('/auth').send({
      email: 'diego.rodrigo.andrade@gmail.com',
      password: 'qwe123'
    })
    console.log('response => ', res.body)
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('token')
  })
})
