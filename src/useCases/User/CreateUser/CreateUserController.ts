import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

import { CreateUserUseCase } from './CreateUserUseCase'

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body
    let token

    try {
      const newUser = await this.createUserUseCase.execute({
        name,
        email,
        password
      })

      token = jwt.sign({ userId: newUser.id, email: newUser.email }, 'token', {
        expiresIn: '2h'
      })

      return response.status(201).send({ newUser, token })
    } catch (error: any) {
      return response.status(401).json({
        message: error.message || 'Unexpected error at create user.'
      })
    }
  }
}
