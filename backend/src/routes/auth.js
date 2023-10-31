const { Router } = require('express')
const { singUp, logIn } = require('../controllers/auth')

const auth = (server) => {
    const router = Router()
    server.use('/api', router)
    router.post('/signUp', singUp)
    router.post('/logIn', logIn)
}

module.exports = auth