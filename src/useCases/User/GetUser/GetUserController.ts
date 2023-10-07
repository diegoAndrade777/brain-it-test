import { Request, Response } from 'express'
import { GetUserUseCase } from './GetUserUseCase'

export class GetUserController {
  constructor(private getUserUseCase: GetUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const id = request.params.id

    try {
      const user = await this.getUserUseCase.execute(id)

      return response.status(201).send(user)
    } catch (error: any) {
      return response.status(401).json({
        message: error.message || 'Unexpected error at get a user.'
      })
    }
  }
}
