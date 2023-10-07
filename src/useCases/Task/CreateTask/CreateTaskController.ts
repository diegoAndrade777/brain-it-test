import { Request, Response } from 'express'

import { CreateTaskUseCase } from './CreateTaskUseCase'

export class CreateUserController {
  constructor(private createTaskUseCase: CreateTaskUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { title, description, completed, user } = request.body

    try {
      const newTask = await this.createTaskUseCase.execute({
        title,
        description,
        completed,
        user
      })

      return response.status(201).send(newTask)
    } catch (error: any) {
      return response.status(401).json({
        message: error.message || 'Unexpected error at create task.'
      })
    }
  }
}
