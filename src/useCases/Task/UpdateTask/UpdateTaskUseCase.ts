import { ITasksRepository } from '../../../repositories/ITasksRepository'
import { IUpdateTaskRequestDTO } from './UpdateTaskDTO'

export class UpdateTaskUseCase {
  constructor(private tasksRepository: ITasksRepository) {}

  async execute(data: IUpdateTaskRequestDTO) {
    const taskData = await this.tasksRepository.update(data)

    return taskData
  }
}
