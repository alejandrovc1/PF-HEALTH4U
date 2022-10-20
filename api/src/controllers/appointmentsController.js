const { appointmentModel, patientModel } = require('../models/models')
// const mongoose = require("mongoose");

const createAppointments = async (req, res, next) => {
    let { start, end, doctor } = req.body
    //date = date.toLocaleString()
    
    if ( !start || !end || !doctor ) res.status(400).send('Falta enviar datos obligatorios');
    // else if (typeof service !== 'string' || typeof doctor !== "string") {
    // res.status(400).send("Error, los tipos de datos son incorrectos")}
    
    try {
        const foundedAppo = await appointmentModel.find({ start: start })
        const existingAppo = foundedAppo.filter(a => a.doctorID === doctor)
        if(existingAppo.length > 0) {
            res.status(400).send('Appointment already exists')
        } else {
            await appointmentModel.create({
                start,
                end,
                status: "Free",
                doctorID: doctor
            });
            res.status(200).send('Appointment Successfully Created');
        }

        // let crearConsulta = await new appointmentModel({})
        // crearConsulta.save().then( result => {
        //     response.json(result)
        //     mongoose.connection.close() // es buena práctica cerrar las conexiones
        // })
        // .catch(err => next(err))

    } catch(error) {
        console.log('Error creating the appointment');
        next(error)
    }
};

const getAppointments = async () => {
    try{
        const response = await appointmentModel.find({})
        const Appointments = response?.map(a => {
            const Appoint = {
                id: a._id,
                start: a.start,
                end: a.end,
                status: a.status,
                doctorID: a.doctorID,
                patientID: a.patientID
            } 
            return Appoint;
        })
        if (Appointments.length > 0) {
            return Appointments
        } else return { msg: "There is no Appointments" }

    } catch (error) {
        console.log("Appointments couldn't be shown");
        throw new Error("An Error Ocurred. There's no Appointments")
    }
};

const getAppointmentByDoctor = async (doctor) => {
    try {
        const response = await appointmentModel.find({ doctorID: doctor })
        const Appointments = response?.map(a => {
            const Appoint = {
                id: a._id,
                start: a.start,
                end: a.end,
                status: a.status,
                doctorID: a.doctorID,
                patientID: a.patientID
            } 
            return Appoint;
        })
        return Appointments

    } catch (e) {
        console.error(e);
        throw new Error("An Error Ocurred. There's no Appointments with that doctor ID")
    }
}

const getAppointmentByPatient = async (patient) => {
    try {
        const response = await appointmentModel.find({ patientID: patient })
        const Appointments = response?.map(a => {
            const Appoint = {
                id: a._id,
                start: a.start,
                end: a.end,
                status: a.status,
                doctorID: a.doctorID,
                patientID: a.patientID
            } 
            return Appoint;
        })
        return Appointments

    } catch (e) {
        console.error(e);
        throw new Error("An Error Ocurred. There's no Appointments with that patient ID")
    }
}

const updateAppointment = async (req, res, next) => {
    try {
        const { start, patient, doctorId } = req.body
        const premium = await patientModel.findById(patient)
        console.log(patient, ", ", doctorId)
        if(premium.subscription) {
            let idAppo = await appointmentModel.find({ start: start })
            console.log(idAppo)
            idAppo = idAppo.filter(a => a.doctorID === doctorId)
            const appo = idAppo[0]
            console.log("back: ", appo)
            if(!appo) {
                res.status(400).send("Can't find the Appointment")
            } else {
                await appointmentModel.findByIdAndUpdate(appo._id, {
                    status: "Occupied",
                    patientID: patient
                }, { new : true}) // este ultimo parámetro hace que nos devuelva el doc actualizado
                .then( () => {
                    res.status(200).send("Appointment Successfully Updated")
                })
            }
        } else {
            res.status(400).send("You need to be Premium to make an appointment")
        }
        
    } catch (error) { next(error)}
};

const cancelAppointment = async (req, res, next) => {
    try {
        const { id } = req.body
        if(id){
            await appointmentModel.findByIdAndUpdate(id, {
                status: "canceled"
            })
            .then( () => {
                res.status(200).send("Appointment Successfully Canceled")
            })
        } else {
            res.status(400).send("Appointment cant be Cancelled")
        }
    } catch (error) { next(error)}
};

module.exports = {
    createAppointments,
    getAppointments,
    getAppointmentByDoctor,
    getAppointmentByPatient,
    updateAppointment, 
    cancelAppointment 
}