//Utilizando los esquemas creamos los modelos
const { Schema, model } = require("mongoose");
//const mongooseDelete = require("mongoose-delete");

//Mongo da una id predeterminadamente, no es necesario declarar
const especialidadSchema = new Schema({
    nombre: {
        type: String,
    },
},
{
    timestamps: true,
    versionKey: false,
});

const EspecialidadModel = model("Especialidad", especialidadSchema);

module.exports = EspecialidadModel;
