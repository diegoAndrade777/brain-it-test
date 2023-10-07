import jwt from 'jsonwebtoken'

import { User } from '../../entities/User'
import { IAuthRepository } from '../IAuthRepository'
import { prisma } from '../../lib/prisma'

export class AuthRepository implements IAuthRepository {
  async findByEmail(email: string): Promise<User> {
    const user = prisma.user.findUnique({
      where: {
        email
      }
    })

    return user
  }

  async signIn(email: string, password: string): Promise<User> {
    try {
      const secret = 'secret'
      const user: any = await jwt.sign(
        { email: email, password: password },
        secret,
        {
          expiresIn: '2h'
        }
      )

      return user
    } catch (error) {
      throw new Error(error)
    }
  }
}
