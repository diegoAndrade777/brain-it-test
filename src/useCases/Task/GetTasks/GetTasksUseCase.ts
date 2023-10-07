import { ITasksRepository } from '../../../repositories/ITasksRepository'

export class GetTasksUseCase {
  constructor(private tasksRepository: ITasksRepository) {}

  async execute() {
    const tasksData = await this.tasksRepository.getTasks()

    return tasksData
  }
}
