const express = require('express')
const HealthController = require('../controllers/health.controller')

const setupRoute = (router = express.Router(), controller = new HealthController()) => {
  /* GET home page. */
  router.get('/', controller.get.bind(controller))

  return router
}

module.exports = setupRoute()
