const jwt = require('jsonwebtoken')
require('dotenv').config()
const Usuario = require('../models/Usuarios')
const bcrypt = require('bcrypt')

const singUp = async (req, res) => {
    try {
        const user = new Usuario(req.body)
        user.hashPassword(req.body.password)
        const userSaved = await user.save()
        return res.json({
            success: true,
            message: 'Usuario registrado exitosamente',
            data: userSaved
        })
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            message: 'Error al registrar el usuario'
        })
    }

}

const logIn = async (req, res) => {
    const { email, password } = req.body
    console.log(email.password)
    if (!(email && password)) {
        return res.status(400).json({
            success: false,
            message: 'El usuario no proporciono las credenciales'
        })
    }

    //Consulta el usuario en la BD
    const user = await Usuario.findOne({ email })
    console.log(user)

    if (email === user.email && bcrypt.compareSync(password, user.password)) {
        const userJSON = user.toJSON()
        const token = jwt.sign(userJSON, process.env.JWTKEY, { expiresIn: '1d' })
        return res.json({
            success: true,
            message: "Usuario loggeado",
            token
        })
    }

    return res.status(400).json({
        success: false,
        message: "El usuario no fue encontrado"
    })
}

module.exports = {
    singUp,
    logIn
}