/**
 * @swagger
 * components:
 *   schemas:
 *    Auth:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: email do usuário
 *         password:
 *           type: string
 *           description: senha do usuário
 *       example:
 *         email: email@gmail.com,
 *         password: qwe123
 */
/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Gerenciamento da autenticação do usuário
 * /auth:
 *   post:
 *     summary: Autenticar usuário
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Auth'
 *           example:
 *             email: email@gmail.com
 *             password: qwe123
 *     responses:
 *       201:
 *         description: Retorna as informações  do usuário autenticado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Auth'
 *             example:
 *               id: fec90fed-8c5c-4293-851b-e8c2298d0f02,
 *               name: Diego,
 *               email: diego.rodrigo.andrade@gmail.com,
 *               createdAt: 2023-08-31T17:16:59.418Z,
 *               updatedAt: 2023-08-31T17:41:48.71ss9Z },
 *               token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ
 *       401:
 *         description: Unexpected error at authenticate a user.
 *
 */
