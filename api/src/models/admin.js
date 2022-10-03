//MODELO DE ADMIN 
//Utilizando los esquemas creamos los modelos
const { Schema, model } = require("mongoose");
//const mongooseDelete = require("mongoose-delete");

//Mongo da una id predeterminadamente, no es necesario declarar
const adminSchema = new Schema({
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
    role: {
        type: String
    }
},
{
    timestamps: true,
    versionKey: false,
});

const adminModel = model("Admin", adminSchema);

module.exports = adminModel;
