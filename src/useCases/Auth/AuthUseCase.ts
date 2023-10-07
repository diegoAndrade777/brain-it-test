import { IAuthRepository } from '../../repositories/IAuthRepository'
import { IAuthRequestDTO } from './AuthDTO'

import jwt from 'jsonwebtoken'

export class AuthUseCase {
  constructor(private authRepository: IAuthRepository) {}

  async execute(data: IAuthRequestDTO) {
    const userData = await this.authRepository.findByEmail(data.email)

    if (!userData) {
      throw new Error('User not found!')
    }

    if (userData.password != data.password) {
      throw new Error('Password does not match!')
    }

    let token
    const secret = 'secret'

    token = jwt.sign({ userId: userData.id, email: userData.email }, secret, {
      expiresIn: '2h'
    })

    delete userData.password

    await this.authRepository.signIn(userData.id, userData.email)

    return { userData, token }
  }
}
