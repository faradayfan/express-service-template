const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const swaggerUi = require('swagger-ui-express')
const swaggerDocs = require('./swagger-docs')

const indexRouter = require('./routes/index')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', indexRouter)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

module.exports = app
