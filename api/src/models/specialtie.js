//MODELO DE ESPECIALIDADES
//Utilizando los esquemas creamos los modelos
const { Schema, model } = require("mongoose");
//const mongooseDelete = require("mongoose-delete");

//Mongo da una id predeterminadamente, no es necesario declarar
const specialtieSchema = new Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    //CLOUDINARY - GUARDAR SVG 
    image: {
        type: String,
    }
},
    {
        timestamps: true,
        versionKey: false,
    });

const specialtieModel = model("Specialtie", specialtieSchema);

module.exports = specialtieModel;
