const { expressjwt: expressjwt } = require('express-jwt')
require('dotenv').config()

const getToken = (req) => {
    const { authorization } = req.headers

    if (authorization) {
        const [type, token] = authorization.split(' ')
        return type === 'Bearer' || type === 'Token' ? token : null

    }
    return null
}

const auth = expressjwt({
    secret: process.env.JWTKEY,
    algorithms: ['HS256'],
    usuarioProperty: 'usuario',
    getToken
})

module.exports = auth