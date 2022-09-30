//MODELO DE PACIENTE
//Utilizando los esquemas creamos los modelos
const { Schema, model } = require("mongoose");
//const mongooseDelete = require("mongoose-delete");

//Mongo da una id predeterminadamente, no es necesario declarar
const patientSchema = new Schema({
    id:{
        type: String
    },
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
    //fecha nacimiento
    birthDate: {
        type: Date,
    },
    genre: {
        type: String
    },
    // CLOUDINARY 
    image: {
        type: String
    }
},
    {
        timestamps: true,
        versionKey: false,
    });

const patientModel = model("Patient", patientSchema);

module.exports = patientModel;