import { Task } from '../../entities/Task'
import { ITasksRepository } from '../ITasksRepository'
import { prisma } from '../../lib/prisma'

export class TasksRepository implements ITasksRepository {
  async findTaskById(id: string): Promise<Task> {
    const task = prisma.task.findUnique({
      where: {
        id
      },
      include: {
        user: true
      }
    })

    // @ts-ignore
    return task
  }

  async findTaskByUser(id: string): Promise<[Task]> {
    const tasks = await prisma.task.findMany({
      where: {
        user: {
          some: {
            id: id
          }
        }
      }
    })

    // @ts-ignore
    return tasks
  }

  async save(task: Task): Promise<Task> {
    const taskData = await prisma.task.create({
      data: {
        title: task.title,
        description: task.description,
        completed: task.completed,
        user: {
          connect: [
            {
              id: task.user.id
            }
          ]
        }
      }
    })

    return taskData
  }

  async update(task: Task): Promise<Task> {
    const taskData = await prisma.task.update({
      where: {
        id: task.id
      },
      data: {
        title: task.title,
        description: task.description,
        completed: task.completed
      },
      include: {
        user: true
      }
    })

    // @ts-ignore
    return taskData
  }

  async get(task: Task): Promise<Task> {
    const taskData = await prisma.task.findUnique({
      where: {
        id: task.id
      }
    })

    return taskData
  }

  async getTasks(): Promise<[Task]> {
    const taskData = await prisma.task.findMany({
      include: {
        user: true
      }
    })

    // @ts-ignore
    return taskData
  }

  async delete(task: Task): Promise<void> {
    await prisma.task.delete({
      where: {
        id: task.id
      }
    })
  }
}
