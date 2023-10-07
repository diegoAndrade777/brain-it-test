import { User } from '../entities/User'

export interface IUsersRepository {
  findByEmail(email: string): Promise<User>
  findUserById(id: string): Promise<User>
  save(user: User): Promise<User>
  get(user: User): Promise<User>
  getUsers(): Promise<[User]>
  update(user: User): Promise<User>
  delete(id: string): Promise<void>
}
