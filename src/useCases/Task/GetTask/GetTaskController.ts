import { Request, Response } from 'express'
import { GetTaskUseCase } from './GetTaskUseCase'

export class GetTaskController {
  constructor(private getTaskUseCase: GetTaskUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const id = request.params.id

    try {
      const task = await this.getTaskUseCase.execute(id)

      return response.status(201).send(task)
    } catch (error: any) {
      return response.status(401).json({
        message: error.message || 'Unexpected error at get a task.'
      })
    }
  }
}
