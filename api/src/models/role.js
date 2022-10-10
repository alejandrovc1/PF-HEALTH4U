//MODELO DE ADMIN 
import roles from './../../../client/src/helpers/roles';
//Utilizando los esquemas creamos los modelos
const { Schema, model } = require("mongoose");
//const mongooseDelete = require("mongoose-delete");

const ROLES = ["admin", "patient", "doctor"]

//Mongo da una id predeterminadamente, no es necesario declarar
const roleSchema = new Schema({
    name: {
        type: String,
    },
},
    {
        versionKey: false,
    });

const roleModel = model("Role", roleSchema);

module.exports = roleModel, ROLES;