import { ITasksRepository } from '../../../repositories/ITasksRepository'
import { IGetTaskRequestDTO } from './GetTaskDTO'

export class GetTaskUseCase {
  constructor(private tasksRepository: ITasksRepository) {}

  async execute(id: string) {
    const taskData: IGetTaskRequestDTO =
      await this.tasksRepository.findTaskById(id)

    if (!taskData) {
      throw new Error('Task not found.')
    }

    return taskData
  }
}
