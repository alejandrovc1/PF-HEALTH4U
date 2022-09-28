//Utilizando los esquemas creamos los modelos
const { Schema, model } = require("mongoose");
//const mongooseDelete = require("mongoose-delete");

//Mongo da una id predeterminadamente, no es necesario declarar
const consultaSchema = new Schema({
    servicio: {
        type: String,
    },
    precio: {
        type: Number,
    },
    fecha: {
        type: Date,
    },
},
{
    timestamps: true,
    versionKey: false,
});

const ConsultaModel = model("Consulta", consultaSchema);

module.exports = ConsultaModel;
