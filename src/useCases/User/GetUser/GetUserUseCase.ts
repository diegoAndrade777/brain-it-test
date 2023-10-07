import { IUsersRepository } from '../../../repositories/IUsersRepository'

export class GetUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(id: string) {
    const userData = await this.usersRepository.findUserById(id)

    if (!userData) {
      throw new Error('User not found.')
    }

    delete userData.password

    return userData
  }
}
