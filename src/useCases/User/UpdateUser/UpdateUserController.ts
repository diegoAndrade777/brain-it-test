import { Request, Response } from 'express'
import { UpdateUserUseCase } from './UpdateUserUseCase'

export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, name, email, password } = request.body

    try {
      const user = await this.updateUserUseCase.execute({
        id,
        name,
        email,
        password
      })

      return response.status(201).send(user)
    } catch (error: any) {
      return response.status(401).json({
        message: error.message || 'Unexpected error at update user.'
      })
    }
  }
}
