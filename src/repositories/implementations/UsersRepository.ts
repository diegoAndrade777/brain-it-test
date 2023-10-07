import { User } from '../../entities/User'
import { IUsersRepository } from '../IUsersRepository'
import { prisma } from '../../lib/prisma'

export class UsersRepository implements IUsersRepository {
  async findByEmail(email: string): Promise<User> {
    const user = prisma.user.findUnique({
      where: {
        email
      }
    })

    return user
  }

  async findUserById(id: string): Promise<User> {
    const user = prisma.user.findUnique({
      where: {
        id
      }
    })

    return user
  }

  async save(user: User): Promise<User> {
    const userData = await prisma.user.create({
      data: {
        name: user.name,
        password: user.password,
        email: user.email
      }
    })

    return userData
  }

  async update(user: User): Promise<User> {
    const userData = await prisma.user.update({
      where: {
        id: user.id
      },
      data: {
        name: user.name,
        password: user.password,
        email: user.email
      }
    })

    return userData
  }

  async get(user: User): Promise<User> {
    const userData = await prisma.user.findUnique({
      where: {
        id: user.id
      }
    })

    return userData
  }

  async getUsers(): Promise<[User]> {
    const userData = await prisma.user.findMany()

    // @ts-ignore
    return userData
  }

  async delete(id: string): Promise<void> {
    await prisma.user.delete({
      where: {
        id: id
      }
    })
  }
}
