/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: string
 *           description: id auto-gerado do usuário
 *         name:
 *           type: string
 *           description: nome do usuário
 *         email:
 *           type: string
 *           description: email do usuário
 *         password:
 *           type: string
 *           description: senha do usuário
 *       example:
 *         id: 46dc7406-e3e4-47ce-9409-3e1a5586848e,
 *         name: Diego,
 *         email: usuario@gmail.com
 */
/**
 * @swagger
 * tags:
 *   name: User
 *   description: Gerenciamento de usuários
 * /users:
 *   post:
 *     summary: Criar um novo usuário
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *           example:
 *             name: Diego
 *             email: usuario@gmail.com
 *             password: qwe123
 *     responses:
 *       201:
 *         description: Retorna o usuário criado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *             example:
 *               id: 46dc7406-e3e4-47ce-9409-3e1a5586848e
 *               name: Diego
 *               email: usuario@gmail.com
 *       401:
 *         description: Unexpected error at create user.
 *
 */
/**
 * @swagger
 * tags:
 *   name: User
 *   description: Gerenciamento de usuários
 * /users:
 *   patch:
 *     summary: Editar um usuário
 *     security:
 *       - bearerAuth: []
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *           example:
 *             id: 46dc7406-e3e4-47ce-9409-3e1a5586848e,
 *             required: true
 *             name: Diego,
 *             email: usuario@gmail.com
 *             password: qwe123
 *     responses:
 *       201:
 *         description: Retorna as alteração/alterações no usuário
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *             example:
 *               id: 46dc7406-e3e4-47ce-9409-3e1a5586848e
 *               name: Diego
 *               email: usuario@gmail.com
 *       401:
 *         description: Unexpected error at update user.
 */
/**
 * @swagger
 * tags:
 *   name: User
 *   description: Gerenciamento de usuários
 * /users/{id}:
 *   delete:
 *     summary: Excluir um usuário
 *     security:
 *       - bearerAuth: []
 *     tags: [User]
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
 *         description: Sem retorno de informações
 *       401:
 *         description: Unexpected error at delete user.
 *
 */
/**
/**
 * @swagger
 * tags:
 *   name: User
 *   description: Gerenciamento de usuários
 * /users/{id}:
 *   get:
 *     summary: Listar um usuário
 *     security:
 *       - bearerAuth: []
 *     tags: [User]
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
 *         description: Retorna as informações do usuário
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *             example:
 *               id: 46dc7406-e3e4-47ce-9409-3e1a5586848e
 *               name: Diego
 *               email: usuario@gmail.com
 *       401:
 *         description: Unexpected error at list user.
 *
 */
/**
 * @swagger
 * tags:
 *   name: User
 *   description: Gerenciamento de usuários
 * /list-users:
 *   get:
 *     summary: Listagem de usuários
 *     security:
 *       - bearerAuth: []
 *     tags: [User]
 *     responses:
 *       201:
 *         description: Retorna a listagem de usuários cadastrados
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *             example:
 *               id: 46dc7406-e3e4-47ce-9409-3e1a5586848e,
 *               name: Diego,
 *               email: usuario@gmail.com
 *       401:
 *         description: Unexpected error at list users.
 *
 */
