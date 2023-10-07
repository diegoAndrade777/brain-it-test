import { Request, Response } from 'express'
import { DeleteTaskUseCase } from './DeleteTaskUseCase'

export class DeleteTaskController {
  constructor(private deleteTaskUseCase: DeleteTaskUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const id = request.params.id

    try {
      await this.deleteTaskUseCase.execute({ id })

      return response.status(201).send()
    } catch (error: any) {
      return response.status(401).json({
        message: error.message || 'Unexpected error at delete task.'
      })
    }
  }
}
