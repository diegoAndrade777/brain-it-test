import { TasksRepository } from '../../../repositories/implementations/TasksRepository'
import { GetTasksByUserUseCase } from './GetTasksByUserUseCase'
import { GetTasksByUserController } from './GetTasksByUserController'

const tasksRepository = new TasksRepository()

const getTasksByUserUseCase = new GetTasksByUserUseCase(tasksRepository)

const getTasksByUserController = new GetTasksByUserController(
  getTasksByUserUseCase
)

export { getTasksByUserUseCase, getTasksByUserController }
