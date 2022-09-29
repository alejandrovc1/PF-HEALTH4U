//Utilizando los esquemas creamos los modelos
const { Schema, model } = require("mongoose");
//const mongooseDelete = require("mongoose-delete");

//Mongo da una id predeterminadamente, no es necesario declarar
const medicoSchema = new Schema({
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
    disponibilidad: {
        type: Date,
    },
    especialidad: {
        type: String
    },
    estado: {
        type: String
    }
},
{
    timestamps: true,
    versionKey: false,
});

const MedicoModel = model("Medico", medicoSchema);

module.exports = MedicoModel;
