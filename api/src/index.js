//Archivo que arranca el servidor 
require("dotenv").config();
const express = require('express');
const morgan = require('morgan');
//morgan permite ver las peticiones en consola
const cors = require('cors');
//cors permite comunicar el servidor y el frontend 
const routes = require('./routes/index.js')
//conectamos la DB
const { dbConn } = require("./db.js")

const app = express();

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

app.use('/', routes)

// Error catching endware.
app.use((err, req, res, next) =>
{ // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});

app.listen(3001, () =>
{ // puerto 3001
    console.log('Server listening on port 3001'); // eslint-disable-line no-console
});

dbConn();