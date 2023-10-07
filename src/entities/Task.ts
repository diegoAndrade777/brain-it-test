import { v4 as uuidv4 } from 'uuid'
import { User } from './User'

export class Task {
  public readonly id: string

  public title?: string
  public description?: string
  public completed?: boolean
  public user?: User

  constructor(props: Omit<Task, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = uuidv4()
    }
  }
}
