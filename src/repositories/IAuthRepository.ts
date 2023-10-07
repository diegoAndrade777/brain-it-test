import { User } from '../entities/User'

export interface IAuthRepository {
  findByEmail(email: string): Promise<User>
  signIn(email: string, password: string): Promise<User>
}
