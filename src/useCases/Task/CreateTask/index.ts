import { TasksRepository } from '../../../repositories/implementations/TasksRepository'
import { CreateTaskUseCase } from './CreateTaskUseCase'
import { CreateUserController } from './CreateTaskController'

const tasksRepository = new TasksRepository()

const creatTaskUserCase = new CreateTaskUseCase(tasksRepository)

const createTaskController = new CreateUserController(creatTaskUserCase)

export { creatTaskUserCase, createTaskController }
