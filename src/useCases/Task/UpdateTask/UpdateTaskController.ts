import { Request, Response } from 'express'
import { UpdateTaskUseCase } from './UpdateTaskUseCase'

export class UpdateTaskController {
  constructor(private updateTaskUseCase: UpdateTaskUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, title, description, completed } = request.body

    try {
      const task = await this.updateTaskUseCase.execute({
        id,
        title,
        description,
        completed
      })

      return response.status(201).send(task)
    } catch (error: any) {
      return response.status(401).json({
        message: error.message || 'Unexpected error at update task.'
      })
    }
  }
}
