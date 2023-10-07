import { app } from './app'
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

import { options } from './docs/config/config'

const specs = swaggerJsdoc(options)
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(specs, {
    explorer: false
  })
)

app.listen(process.env.PORT || 3333, () => {
  console.log('🚀HTTP server running on http://localhost:3333')
})
