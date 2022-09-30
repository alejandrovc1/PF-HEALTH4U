//MODELO HORARIO
//Utilizando los esquemas creamos los modelos
const { Schema, model } = require("mongoose");
//const mongooseDelete = require("mongoose-delete");

//Mongo da una id predeterminadamente, no es necesario declarar
const scheduleSchema = new Schema({
    date: {
        type: Date,
    },
    startTime: {
        type: String,
    },
    endTime: {
        type: String,
    },
},
{
    timestamps: true,
    versionKey: false,
});

const scheduleModel = model("Schedule", scheduleSchema);

module.exports = scheduleModel;
