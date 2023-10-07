import { Router } from 'express'

import { authController } from './useCases/Auth'

import { createUserController } from './useCases/User/CreateUser'
import { getUserController } from './useCases/User/GetUser'
import { getUsersController } from './useCases/User/GetUsers'
import { updateUserController } from './useCases/User/UpdateUser'
import { deleteUserController } from './useCases/User/DeleteUser'

import { createTaskController } from './useCases/Task/CreateTask'
import { getTaskController } from './useCases/Task/GetTask'
import { getTasksByUserController } from './useCases/Task/GetTasksByUser'
import { getTasksController } from './useCases/Task/GetTasks'
import { updateTaskController } from './useCases/Task/UpdateTask'
import { deleteTaskController } from './useCases/Task/DeleteTask'

import { isAuthenticated } from './middleware/isAuthenticated'

const router = Router()

// Auth route
router.post('/auth', (request, response) => {
  return authController.handle(request, response)
})

// User routes
router.post('/users', (request, response) => {
  return createUserController.handle(request, response)
})
router.get('/users/:id', isAuthenticated, (request, response) => {
  return getUserController.handle(request, response)
})
router.get('/list-users', isAuthenticated, (request, response) => {
  return getUsersController.handle(request, response)
})
router.patch('/users', isAuthenticated, (request, response) => {
  return updateUserController.handle(request, response)
})
router.delete('/users/:id', isAuthenticated, (request, response) => {
  return deleteUserController.handle(request, response)
})

// Tasks routes
router.post('/tasks', isAuthenticated, (request, response) => {
  return createTaskController.handle(request, response)
})
router.get('/tasks/:id', isAuthenticated, (request, response) => {
  return getTaskController.handle(request, response)
})
router.get('/tasks/user/:id', isAuthenticated, (request, response) => {
  return getTasksByUserController.handle(request, response)
})
router.get('/list-tasks', isAuthenticated, (request, response) => {
  return getTasksController.handle(response)
})
router.patch('/tasks', isAuthenticated, (request, response) => {
  return updateTaskController.handle(request, response)
})
router.delete('/tasks/:id', isAuthenticated, (request, response) => {
  return deleteTaskController.handle(request, response)
})

export { router }
