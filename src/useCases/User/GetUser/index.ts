import { UsersRepository } from '../../../repositories/implementations/UsersRepository'
import { GetUserUseCase } from './GetUserUseCase'
import { GetUserController } from './GetUserController'

const usersRepository = new UsersRepository()

const getUserUseCase = new GetUserUseCase(usersRepository)

const getUserController = new GetUserController(getUserUseCase)

export { getUserUseCase, getUserController }
