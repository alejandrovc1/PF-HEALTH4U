//Archivo para la conexion a la base de datos
const mongoose = require('mongoose')
//Aplicacion que nos sirve para esquematizar la base de datos 
const {
    DB_USER, DB_PASSWORD,
} = process.env;

const connectionString = `mongodb+srv://Health4UAdmin:mongodb@cluster1.hgdsrwx.mongodb.net/?retryWrites=true&w=majority`

// conexion a mongodb
mongoose.connect(connectionString)
    //devuelve promesa
    .then(() => {
        console.log('Database connected')
    }).catch(err => {
        console.error(err)
    })

//Esquemas que tienen que tener los modelos de nuestra app
//Utilizando los esquemas creamos los modelos
const pacienteSchema = new mongoose.Schema({
    //Mongo da una id predeterminadamente, no es necesario declarar
    Nombre: String,
    Correo: String,
    Contrasena: String,
    FechaNacimiento: String,
    Genero: String
})

const consultaSchema = new mongoose.Schema({
    Servicio: String,
    Precio: Number,
    Fecha: Date
})

const reviewSchema = new mongoose.Schema({
    Calificacion: Number,
    Fecha: Date,
    Review: String
})

const medicoSchema = new mongoose.Schema({
    Nombre: String,
    Correo: String,
    Contrasena: String,
    Disponibilidad: String
})

const especialidadSchema = new mongoose.Schema({
    Nombre: String
})

const horarioServicioSchema = new mongoose.Schema({
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



