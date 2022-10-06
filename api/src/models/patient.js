//MODELO DE PACIENTE
//Utilizando los esquemas creamos los modelos
const { Schema, model } = require("mongoose");
//const mongooseDelete = require("mongoose-delete");

//Mongo da una id predeterminadamente, no es necesario declarar
const patientSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    birthDate: {
        type: Date,
    },
    genre: {
        type: String
    },
    //Dirección
    address: {
        type: String
    },
    country: {
        type: String
    },
    tel: {
        type: Number
    },
    // CLOUDINARY 
    image: {
        type: String
    },
    role: {
        type: String
    },
    status: {
        type: String
    }
},
    {
        timestamps: true,
        versionKey: false,
    });

const patientModel = model("Patient", patientSchema);

module.exports = patientModel;