import { Request, Response } from 'express'
import { DeleteUserUseCase } from './DeleteUserUseCase'

export class DeleteUserController {
  constructor(private deleteUserUseCase: DeleteUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const id = request.params.id

    try {
      await this.deleteUserUseCase.execute(id)

      return response.status(201).send()
    } catch (error: any) {
      return response.status(401).json({
        message: error.message || 'Unexpected error at delete user.'
      })
    }
  }
}
