import { Request, Response } from 'express'

import { AuthUseCase } from './AuthUseCase'

export class AuthController {
  constructor(private authUseCase: AuthUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, name, email, password } = request.body

    try {
      const userData = await this.authUseCase.execute({
        id,
        name,
        email,
        password
      })

      return response.status(201).send(userData)
    } catch (error: any) {
      return response.status(401).json({
        message: error.message || 'Unexpected error at authenticate a user.'
      })
    }
  }
}
