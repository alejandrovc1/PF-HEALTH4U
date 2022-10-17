//MODELO CONSULTA
//Utilizando los esquemas creamos los modelos
const { Schema, model } = require("mongoose");
//const mongooseDelete = require("mongoose-delete");

//Mongo da una id predeterminadamente, no es necesario declarar
const appointmentSchema = new Schema({
    start: {
        type: Date,
    },
    end: {
        type: Date,
    },
    status: {
        type: String,
    },
    doctorID: {
        type: String,
    },
    patientID: {
        type: String,
    }
},
{
    timestamps: true,
    versionKey: false,
});

const appointmentModel = model("Appointment", appointmentSchema);

module.exports = appointmentModel;
