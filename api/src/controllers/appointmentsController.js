const appointmentModel = require('../models/appointment')
const mongoose = require("mongoose");

const createAppointment = async (req, res, next) => {
    let {service, price, date, doctor} = req.body

    //date = date.toLocaleString()

    if ( !service || !price || !date || !doctor ) res.status(400).send('Falta enviar datos obligatorios');
    else if (typeof service !== 'string' || typeof price !== 'number' || typeof doctor !== "string") {
    res.status(400).send("Error, los tipos de datos son incorrectos")}

    try {
        await appointmentModel.create({
            service,
            price,
            date,
            doctor
        });

        // let crearConsulta = await new appointmentModel({})
        // crearConsulta.save()
        // .then( result => {
        //     console.log(result)
        //     mongoose.connection.close() // es buena práctica cerrar las conexiones
        // })
        // .catch(err => next(err))

        res.status(200).send('Appointment Successfully Created');
    } catch(error) {
        console.log('Error creating the appointment', error.message);
        next(error)
    }
};

const showAppointments = async (req, res, next) => {
    try{
        const findConsulta = await appointmentModel.find({})
        .then( result => {
            res.json(result)
            // mongoose.connection.close()
        })
        .catch(err => next (err))

        res.status(200).send(findConsulta)
    } catch (error) {
        console.log("Something went wrong, ", error);
        next(error)
    }
};

const deleteAppointment = async (req, res, next) => {
    try {
        const {id} = req.params

        await appointmentModel.findByIdAndRemove(id)
        .then( result => {
            res.status(200).send("Appointment Successfully Deleted")
        })
    } catch (error) {
        next(error)
    }
};

const updateAppointment = async (req, res, next) => {
    try {
        const {id} = req.params
        const {service, price, date, doctor} = req.body

        await appointmentModel.findByIdAndUpdate(id, {
            service: service,
            price: price,
            date: date,
            doctor: doctor
        })
        
        res.status(200).send("Appointment Successfully Updated")
    } catch (error) {
        next(error)
    }
};

module.exports = {
    createAppointment,
    showAppointments,
    deleteAppointment,
    updateAppointment
}