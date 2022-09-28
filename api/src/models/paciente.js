//Utilizando los esquemas creamos los modelos
const { Schema, model } = require("mongoose");
//const mongooseDelete = require("mongoose-delete");

//Mongo da una id predeterminadamente, no es necesario declarar
const pacienteSchema = new Schema({
    nombre: {
        type: String,
    },
    correo: {
        type: String,
        unique: true,
    },
    contrasena: {
        type: String,
    },
    fechaNacimiento: {
        type: Date,
    },
    genero: {
        type: String
    },
},
{
    timestamps: true,
    versionKey: false,
});

const PacienteModel = model("Paciente", pacienteSchema);

module.exports = PacienteModel;