//Archivo que arranca el servidor 
require("dotenv").config();
const express = require ('express');
const morgan = require ('morgan');
//morgan permite ver las peticiones en consola
const cors = require('cors');
//cors permite comunicar el servidor y el frontend 
const routes = require('./routes/index.js')

const app = express();

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

app.use('/', routes)


app.listen(3000)
console.log("Server on port 3000")