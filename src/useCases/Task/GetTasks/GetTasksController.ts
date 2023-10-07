import { Response } from 'express'
import { GetTasksUseCase } from './GetTasksUseCase'

export class GetTasksController {
  constructor(private getTasksUseCase: GetTasksUseCase) {}

  async handle(response: Response): Promise<Response> {
    try {
      const tasks = await this.getTasksUseCase.execute()

      return response.status(201).send(tasks)
    } catch (error: any) {
      return response.status(401).json({
        message: error.message || 'Unexpected error at get tasks.'
      })
    }
  }
}
