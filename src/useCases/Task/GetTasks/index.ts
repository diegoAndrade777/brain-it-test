import { TasksRepository } from '../../../repositories/implementations/TasksRepository'
import { GetTasksUseCase } from './GetTasksUseCase'
import { GetTasksController } from './GetTasksController'

const tasksRepository = new TasksRepository()

const getTasksUseCase = new GetTasksUseCase(tasksRepository)

const getTasksController = new GetTasksController(getTasksUseCase)

export { getTasksUseCase, getTasksController }
