const express = require('express')

const setupRoutes = (router = express.Router()) => {
  router.use('/health', require('./health'))
  return router
}

module.exports = setupRoutes()
