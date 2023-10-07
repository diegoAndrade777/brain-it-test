import { ITasksRepository } from '../../../repositories/ITasksRepository'
import { IDeleteTaskRequestDTO } from './DeleteTaskDTO'

export class DeleteTaskUseCase {
  constructor(private tasksRepository: ITasksRepository) {}

  async execute(data: IDeleteTaskRequestDTO) {
    await this.tasksRepository.delete(data)
  }
}
