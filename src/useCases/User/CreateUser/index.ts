import { UsersRepository } from '../../../repositories/implementations/UsersRepository'
import { CreateUserUseCase } from './CreateUserUseCase'
import { CreateUserController } from './CreateUserController'

const usersRepository = new UsersRepository()

const createUserUserCase = new CreateUserUseCase(usersRepository)

const createUserController = new CreateUserController(createUserUserCase)

export { createUserUserCase, createUserController }
