const express = require('express')
const HealthController = require('../controllers/health.controller')

const setupRoute = (router = express.Router(), controller = new HealthController()) => {
  /**
  * @swagger
  * /health:
  *  get:
  *    tags:
  *      - health
  *    summary: Check the health of the service
  *    responses:
  *      200:
  *        description: Health returned successfully
  *        content:
  *          application/json:
  *            example:
  *              message: success
  */
  router.get('/', controller.get.bind(controller))

  return router
}

module.exports = setupRoute()
