//Archivo que arranca el servidor 
const express = require ('express');
const morgan = require ('morgan');
//morgan permite ver las peticiones en consola
const cors = require('cors');
//cors permite comunicar el servidor y el frontend 


const app = express();

app.use(morgan('dev'))
app.use(cors())


app.listen(3000)
console.log("Server on port 3000")