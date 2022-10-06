const appointmentModel = require('../models/appointment')
// const mongoose = require("mongoose");

const createAppointment = async (req, res, next) => {
    let {service, date, doctor} = req.body

    //date = date.toLocaleString()

    if ( !service || !date || !doctor ) res.status(400).send('Falta enviar datos obligatorios');
    else if (typeof service !== 'string' || typeof doctor !== "string") {
    res.status(400).send("Error, los tipos de datos son incorrectos")}

    try {
        await appointmentModel.create({
            service,
            date,
            doctor
        });

        // let crearConsulta = await new appointmentModel({})
        // crearConsulta.save().then( result => {
        //     response.json(result)
        //     mongoose.connection.close() // es buena práctica cerrar las conexiones
        // })
        // .catch(err => next(err))

        res.status(200).send('Appointment Successfully Created');
    } catch(error) {
        console.log('Error creating the appointment');
        next(error)
    }
};

const showAppointments = async (req, res, next) => {
    try{
        await appointmentModel.find({})

        .then( result => {
            res.status(200).json(result)
            // mongoose.connection.close()
        })
        .catch(err => next (err))
    } catch (error) {
        console.log("Appointments couldn't be shown");
        next(error)
    }
};

const deleteAppointment = async (req, res, next) => {
    try {
        const {id} = req.params

        await appointmentModel.findByIdAndRemove(id)
        .then( () => {
            res.status(200).send("Appointment Successfully Deleted")
        })
    } catch (error) { next(error)}
};

const updateAppointment = async (req, res, next) => {
    try {
        const {id} = req.params
        const {service, date, doctor} = req.body

        const updatedAppo = await appointmentModel.findByIdAndUpdate(id, {
            service: service,
            date: date,
            doctor: doctor
        }, { new : true}) // este ultimo parámetro hace que nos devuelva el doc actualizado
        .then( () => {
            console.log(updatedAppo)
            res.status(200).send("Appointment Successfully Updated")
        })
    
    } catch (error) { next(error)}
};

module.exports = {
    createAppointment,
    showAppointments,
    deleteAppointment,
    updateAppointment
}