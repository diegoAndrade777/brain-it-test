import { AuthRepository } from '../../repositories/implementations/AuthRepository'
import { AuthUseCase } from './AuthUseCase'
import { AuthController } from './AuthController'

const authRepository = new AuthRepository()

const authUserCase = new AuthUseCase(authRepository)

const authController = new AuthController(authUserCase)

export { authUserCase, authController }
