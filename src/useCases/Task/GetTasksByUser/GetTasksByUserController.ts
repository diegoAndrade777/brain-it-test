import { Request, Response } from 'express'
import { GetTasksByUserUseCase } from './GetTasksByUserUseCase'

export class GetTasksByUserController {
  constructor(private getTasksByUserUseCase: GetTasksByUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const id = request.params.id

    try {
      const tasks = await this.getTasksByUserUseCase.execute(id)

      return response.status(201).send(tasks)
    } catch (error: any) {
      return response.status(401).json({
        message: error.message || 'Unexpected error at get a task.'
      })
    }
  }
}
