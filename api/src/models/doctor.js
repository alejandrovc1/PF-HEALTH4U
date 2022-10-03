//MODELO DOCTOR
//Utilizando los esquemas creamos los modelos
const { Schema, model } = require("mongoose");
//const mongooseDelete = require("mongoose-delete");

//Mongo crea un id predeterminadamente, pero se agrega otro para mayor claridad
const doctorSchema = new Schema({
    id: {
        type: String,
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
    status: {
        type: String,
    },
    specialtie: {
        type: String
    },
    //Metodo de consulta del doctor(virtual, presencial)
    method: {
        type: String
    },
    //CLOUDINARY
    image: {
        type: String
    },
    description: {
        type: String
    },
    rating: {
        type: Number
    },
    role: {
        type: String
    }
},
    {
        timestamps: true,
        versionKey: false,
    });

const doctorModel = model("Doctor", doctorSchema);

module.exports = doctorModel;
