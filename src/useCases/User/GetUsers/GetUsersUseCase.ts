import { IUsersRepository } from '../../../repositories/IUsersRepository'

export class GetUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute() {
    const userData = await this.usersRepository.getUsers()

    userData.map((user) => {
      delete user.password

      return user
    })

    return userData
  }
}
