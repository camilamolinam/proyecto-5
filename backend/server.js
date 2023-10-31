//importar la variables de entorno
require('dotenv').config()
const express = require('express');
const cors = require('cors')
const connect = require('./src/cofig/db')
const producto = require('./src/routes/productos')
const auth = require('./src/routes/auth')

const server = express();

server.use(cors())
server.use(express.json());

connect();


//endpoint:url a la que se hace referencia
server.get("/", (request, response) => {
    response.send("API V1.0")
})

auth(server)
producto(server)


server.listen(process.env.PORT, () => {
    console.log("Servidor a iniciado en el puerto ", process.env.PORT);
})


