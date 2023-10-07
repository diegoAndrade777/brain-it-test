/**
 * @swagger
 * components:
 *   schemas:
 *    Tasks:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - completed
 *         - user
 *       properties:
 *         id:
 *           type: string
 *           description: id auto-gerado da tarefa
 *         title:
 *           type: string
 *           description: título da tarefa
 *         description:
 *           type: string
 *           description: descrição da tarefa
 *         completed:
 *           type: boolean
 *           description: se a tarefa foi completada
 *         user:
 *           type: object
 *           description: objeto user com o id da usuário a qual a tarefa pertence
 *       example:
 *         title: Tarefa 1
 *         description: criar endpoint 1
 *         completed: false
 *         user: {
 *          id: be68d628-78c3-4065-b019-d1fa3372f670
 *         }
 */
/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: Gerenciamento de tarefas
 * /tasks:
 *   post:
 *     summary: Criar uma tarefa
 *     security:
 *       - bearerAuth: []
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tasks'
 *           example:
 *             title: Criar enpoint user
 *             description: Criar enpoint de listagem de usuários
 *             completed: false
 *             user: { id: be68d628-78c3-4065-b019-d1fa3372f670 }
 *     responses:
 *       201:
 *         description: Retorna os dados da tarefa criada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tasks'
 *             example:
 *               id: 46dc7406-e3e4-47ce-9409-3e1a5586848e
 *               title: Criar enpoint user
 *               description: Criar enpoint de listagem de usuários
 *               completed: false
 *               user: { id: be68d628-78c3-4065-b019-d1fa3372f670 }
 *               createdAt: 2023-08-31T17:16:59.418Z
 *       401:
 *         description: Some server error
 *
 */
/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: Gerenciamento de tarefas
 * /tasks:
 *   patch:
 *     summary: Editar um tarefa
 *     security:
 *       - bearerAuth: []
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tasks'
 *           example:
 *             id: 46dc7406-e3e4-47ce-9409-3e1a5586848e
 *             title: Criar enpoint user updated
 *             description: Criar enpoint de listagem de usuários
 *             completed: false
 *     responses:
 *       201:
 *         description: Retorna as alteração/alterações da tarefa
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tasks'
 *             example:
 *               id: 46dc7406-e3e4-47ce-9409-3e1a5586848e
 *               title: Criar enpoint user updated
 *               description: Criar enpoint de listagem de usuários
 *               completed: false
 *               user: { id: be68d628-78c3-4065-b019-d1fa3372f670 }
 *               createdAt: 2023-08-31T17:16:59.418Z
 *               updatedAt: 2023-08-31T17:41:48.719Z
 *       401:
 *         description: Some server error
 *
 */
/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: Gerenciamento de tarefas
 * /tasks/{id}:
 *   delete:
 *     summary: Excluir uma tarefa
 *     security:
 *       - bearerAuth: []
 *     tags: [Tasks]
 *     parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           schema:
 *             type: string
 *             format: uuid
 *           description: id da tarefa
 *     responses:
 *       201:
 *         description: Sem retorno de informações
 *       401:
 *         description: Unexpected error at delete task
 *
 */
/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: Gerenciamento de tarefas
 * /tasks/user/{id}:
 *   get:
 *     summary: Listagem de tarefas de um usuário
 *     security:
 *       - bearerAuth: []
 *     tags: [Tasks]
 *     parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           schema:
 *             type: string
 *             format: uuid
 *           description: id do usuário
 *     responses:
 *       201:
 *         description: Retorna as tarefas do usuario informado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tasks'
 *             example:
 *               id: 46dc7406-e3e4-47ce-9409-3e1a5586848e
 *               title: Criar enpoint user updated
 *               description: Criar enpoint de listagem de usuários
 *               completed: false
 *               user: {
 *                id: be68d628-78c3-4065-b019-d1fa3372f670
 *               }
 *               createdAt: 2023-08-31T17:16:59.418Z
 *               updatedAt: 2023-08-31T17:41:48.719Z
 *       401:
 *         description: Some server error
 *
 */
/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: Gerenciamento de tarefas
 * /list-tasks:
 *   get:
 *     summary: Listagem de tarefas
 *     security:
 *       - bearerAuth: []
 *     tags: [Tasks]
 *     responses:
 *       201:
 *         description: Retorna todas as tarefa cadastradas
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tasks'
 *             example:
 *               id: 46dc7406-e3e4-47ce-9409-3e1a5586848e
 *               title: Criar enpoint user updated
 *               description: Criar enpoint de listagem de usuários
 *               completed: false
 *               user: { id: be68d628-78c3-4065-b019-d1fa3372f670 }
 *               createdAt: 2023-08-31T17:16:59.418Z
 *               updatedAt: 2023-08-31T17:41:48.719Z
 *       401:
 *         description: Unexpected error at list task
 *
 */
/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: Gerenciamento de tarefas
 * /tasks/{id}:
 *   get:
 *     summary: Listar uma tarefa
 *     security:
 *       - bearerAuth: []
 *     tags: [Tasks]
 *     parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           schema:
 *             type: string
 *             format: uuid
 *           description: id da tarefa
 *     responses:
 *       201:
 *         description: Retorna os dados da tarefa
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tasks'
 *             example:
 *               id: 46dc7406-e3e4-47ce-9409-3e1a5586848e
 *               title: Criar enpoint user updated
 *               description: Criar enpoint de listagem de usuários
 *               completed: false
 *               user: { id: be68d628-78c3-4065-b019-d1fa3372f670 }
 *               createdAt: 2023-08-31T17:16:59.418Z
 *               updatedAt: 2023-08-31T17:41:48.719Z
 *       401:
 *         description: Unexpected error at list task
 *
 */
