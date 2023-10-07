export const options = {
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        name: 'Authorization',
        description: 'Bearer token to access these api endpoints',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        in: 'header'
      }
    }
  },
  security: [
    {
      bearerAuth: []
    }
  ],
  definition: {
    openapi: '3.1.0',
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    },
    basePath: '/',
    info: {
      title: 'BrainIt Test Api',
      version: '0.1.0',
      description: 'This is am API test application made with Express',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html'
      },
      contact: {
        name: 'Diego',
        url: 'https://www.linkedin.com/in/diego-r-andrade/',
        email: 'diego.rodrigo.andrade@gmail.com'
      }
    },
    servers: [
      {
        url: 'http://localhost:3333'
      }
    ]
  },
  apis: ['src/docs/swaggerUI/*.ts']
}
