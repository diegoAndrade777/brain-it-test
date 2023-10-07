import { TasksRepository } from '../../../repositories/implementations/TasksRepository'
import { DeleteTaskUseCase } from './DeleteTaskUseCase'
import { DeleteTaskController } from './DeleteTaskController'

const tasksRepository = new TasksRepository()

const deleteTaskUseCase = new DeleteTaskUseCase(tasksRepository)

const deleteTaskController = new DeleteTaskController(deleteTaskUseCase)

export { deleteTaskUseCase, deleteTaskController }
