import { Task } from '../../../entities/Task'
import { ITasksRepository } from '../../../repositories/ITasksRepository'
import { ICreateTaskRequestDTO } from './CreateTaskDTO'

export class CreateTaskUseCase {
  constructor(private tasksRepository: ITasksRepository) {}

  async execute(data: ICreateTaskRequestDTO) {
    let task = new Task(data)

    await this.tasksRepository.save(task)

    return task
  }
}
