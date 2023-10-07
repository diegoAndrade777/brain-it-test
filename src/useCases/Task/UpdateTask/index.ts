import { TasksRepository } from '../../../repositories/implementations/TasksRepository'
import { UpdateTaskUseCase } from './UpdateTaskUseCase'
import { UpdateTaskController } from './UpdateTaskController'

const tasksRepository = new TasksRepository()

const updateTaskUseCase = new UpdateTaskUseCase(tasksRepository)

const updateTaskController = new UpdateTaskController(updateTaskUseCase)

export { updateTaskUseCase, updateTaskController }
