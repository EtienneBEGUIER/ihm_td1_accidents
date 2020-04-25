const { Router } = require('express')
const UserRouter = require('./users')
const AccidentRoute = require('./accidents')

const router = new Router()
router.get('/status', (req, res) => res.status(200).json('ok'))
router.use('/users',UserRouter)
router.use('/accidents',AccidentRoute)
module.exports = router