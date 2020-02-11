const HealthController = require('./health.controller')

const initController = () => {
  return new HealthController()
}

describe('HealthController', () => {
  describe('constructor', () => {
    it('should exist', () => {
      expect(initController).not.toThrow()
    })
  })

  describe('get', () => {
    let req, res, controller
    beforeEach(() => {
      req = {}
      res = {
        json: jest.fn()
      }
      controller = initController()

      controller.get(req, res)
    })
    it('should ', () => {
      expect(res.json).toHaveBeenCalledWith({ message: 'success' })
    })
  })
})
