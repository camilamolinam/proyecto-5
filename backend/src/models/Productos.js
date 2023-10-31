const mongoose = require('mongoose')

const productoSchema = new mongoose.Schema({
    nombre: String,
    descripcion: String,
    precio: Number,
    existencias: Number,
    img: String
})

const Producto = mongoose.model('productos', productoSchema)

module.exports = Producto