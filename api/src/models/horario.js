//Utilizando los esquemas creamos los modelos
const { Schema, model } = require("mongoose");
//const mongooseDelete = require("mongoose-delete");

//Mongo da una id predeterminadamente, no es necesario declarar
const horarioSchema = new Schema({
    fecha: {
        type: Date,
    },
    horaInicio: {
        type: String,
    },
    horaFinal: {
        type: String,
    },
},
{
    timestamps: true,
    versionKey: false,
});

const HorarioModel = model("Horario", horarioSchema);

module.exports = HorarioModel;
