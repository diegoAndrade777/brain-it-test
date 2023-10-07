import { Task } from '../entities/Task'

export interface ITasksRepository {
  findTaskById(id: string): Promise<Task>
  findTaskByUser(id: string): Promise<[Task]>
  save(task: Task): Promise<Task>
  get(task: Task): Promise<Task>
  getTasks(): Promise<[Task]>
  update(task: Task): Promise<Task>
  delete(task: Task): Promise<void>
}
