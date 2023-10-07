import { Request, Response } from 'express'
import { GetUsersUseCase } from './GetUsersUseCase'

export class GetUsersController {
  constructor(private getUsersUseCase: GetUsersUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const user = await this.getUsersUseCase.execute()

      return response.status(201).send(user)
    } catch (error: any) {
      return response.status(401).json({
        message: error.message || 'Unexpected error at get users.'
      })
    }
  }
}
