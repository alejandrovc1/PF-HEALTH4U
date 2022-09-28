//Utilizando los esquemas creamos los modelos
const { Schema, model } = require("mongoose");
//const mongooseDelete = require("mongoose-delete");

//Mongo da una id predeterminadamente, no es necesario declarar
const administradorSchema = new Schema({
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
},
{
    timestamps: true,
    versionKey: false,
});

const AdministradorModel = model("Administrador", administradorSchema);

module.exports = AdministradorModel;
