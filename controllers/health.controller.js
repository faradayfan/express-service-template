
module.exports = class HealthController {
  get (req, res) {
    return res.json({ message: 'success' })
  }
}
