//Archivo para la conexion a la base de datos
require("dotenv").config();
const mongoose = require('mongoose')
//Aplicacion que nos sirve para esquematizar la base de datos, no funciona a nivel de DB sino de aplicación
const { DB_URI } = process.env;

const connectionString = DB_URI

// conexion a mongodb
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    //devuelve promesa
    .then(() => {
        console.log('Database connected to ATLAS')
    }).catch(err => {
        console.error('Connection Error: ',err)
    })


