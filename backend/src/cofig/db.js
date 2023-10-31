require('dotenv').config()
const mongoose = require('mongoose')

const connect = async () => {
    const connection = await mongoose.connect(process.env.URI_DB)
    console.log("Conectado a la BD", connection.connection.host)
}

module.exports = connect;