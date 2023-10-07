import { ITasksRepository } from '../../../repositories/ITasksRepository'

export class GetTasksByUserUseCase {
  constructor(private tasksRepository: ITasksRepository) {}

  async execute(id: string) {
    const tasksData = await this.tasksRepository.findTaskByUser(id)

    if (!tasksData) {
      throw new Error('This user has no Tasks.')
    }

    return tasksData
  }
}
