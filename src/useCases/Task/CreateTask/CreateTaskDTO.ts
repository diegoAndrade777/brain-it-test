export interface ICreateTaskRequestDTO {
  id?: string
  title: string
  description: string
  completed: boolean
  user: {
    id: string
    name?: string
    email?: string
    password?: string
  }
}
