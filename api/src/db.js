//Archivo para la conexion a la base de datos
require('dotenv').config();
const mongoose = require('mongoose')
const { Schema } = mongoose;
//Aplicacion que nos sirve para esquematizar la base de datos

const { DB_USER, DB_PASSWORD } = require('../credentialsMongo.js');

const connectionString = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster1.hgdsrwx.mongodb.net/Health4U?retryWrites=true&w=majority`

// conexion a mongodb
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    //devuelve promesa
    .then(() => {
        console.log('Database connected')
    }).catch(err => {
        console.error(err)
    })

//Esquemas que tienen que tener los modelos de nuestra app
//Utilizando los esquemas creamos los modelos
const pacienteSchema = new Schema({
    //Mongo da una id predeterminadamente, no es necesario declarar
    Nombre: String,
    Documento: Number,
    Correo: String,
    Contrasena: String,
    FechaNacimiento: String,
    Genero: String
})

const consultaSchema = new Schema({
    Servicio: String,
    Precio: Number,
    Fecha: Date,
    Hora: String
})

const reviewSchema = new Schema({
    Calificacion: Number,
    Fecha: Date,
    Review: String
})

const medicoSchema = new Schema({
    Nombre: String,
    Correo: String,
    Contrasena: String,
    Disponibilidad: String,
    Especialidad: String,
    Estado: String
})

const especialidadSchema = new Schema({
    Nombre: String
})

const horarioServicioSchema = new Schema({
    Fecha: Date,
    HoraInicio: String,
    HoraFinal: String
})

//Utilizando los esquemas creamos clases que nos instancian las entidades que necesitamos

//                        --Nombre modelo--Esquema del modelo 
const Paciente = mongoose.model('Paciente', pacienteSchema)
const Consulta = mongoose.model('Consulta', consultaSchema)
const Review = mongoose.model('Review', reviewSchema)
const Medico = mongoose.model('Medico', medicoSchema)
const Especialidad = mongoose.model('Especialidad', especialidadSchema)
const HorarioServicio = mongoose.model('HorarioServicio', horarioServicioSchema)



