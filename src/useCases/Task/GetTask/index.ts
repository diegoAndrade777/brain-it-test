import { TasksRepository } from '../../../repositories/implementations/TasksRepository'
import { GetTaskUseCase } from './GetTaskUseCase'
import { GetTaskController } from './GetTaskController'

const tasksRepository = new TasksRepository()

const getTaskUseCase = new GetTaskUseCase(tasksRepository)

const getTaskController = new GetTaskController(getTaskUseCase)

export { getTaskUseCase, getTaskController }
