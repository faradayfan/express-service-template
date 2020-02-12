const swaggerJSDoc = require('swagger-jsdoc')
const packageJson = require('./package.json')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: packageJson.name,
      version: packageJson.version,
      description: packageJson.description
    },
    servers: [{ url: 'http://localhost:3000', description: 'Local' }]
  },
  apis: ['./routes/**/*.js', './app.js']
}

module.exports = swaggerJSDoc(options)
