const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const usuarioSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    phone: String,
    email: String,
    password: String,
    rol : String
})

usuarioSchema.methods.hashPassword = function (password) {
    this.password = bcrypt.hashSync(password, 10000)
}

const Usuario = mongoose.model('Usuario', usuarioSchema)

module.exports = Usuario