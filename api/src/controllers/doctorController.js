const { doctorModel } = require('../models/models');
const cloudinary = require('../cloudinary')
const nameFolder = 'doctorPhotos'

const getAllDoctors = async (req, res, next) => {
    try {
        const response = await doctorModel.find({}).populate({
            path: "specialtie",
        })
        const doctors = response?.map(d => {
            const Dr = {
                id: d._id,
                name: d.name,
                email: d.email,
                status: d.status,
                specialtie: d.specialtie,
                method: d.method,
                image: d.image,
                description: d.description,
                rating: d.rating,
                role: d.role,
                country: d.country
            }
            return Dr
        })

        if (doctors.length > 0) res.status(200).send(doctors);
        else return { msg: "There are no doctors in the DB" }
    } catch (error) {
        console.error("Error occurred. Doctors couldn't be shown.");
        next(error)
    }
};

const getDoctorDetail = async (req, res, next) => {
    try {
        const { id } = req.params

        const response = await doctorModel.findById(id).populate({
            path: "specialtie",
        })
        const doctor = {
            id: response._id,
            name: response.name,
            email: response.email,
            status: response.status,
            specialtie: response.specialtie,
            method: response.method,
            image: response.image,
            description: response.description,
            rating: response.rating,
            role: response.role,
            country: response.country
        }
        doctor ? res.status(200).send(doctor) : { msg: "There's no doctor with that id" };

    } catch (error) {
        console.error("Error occurred. Doctor couldn't be shown.");
        next(error)
    }
};

const registerDoctor = async (registerData) => {

    try {
        const { name, email, password, specialtie, method, image, description, rating, country } = registerData

        const found = await doctorModel.findOne({ email: email })
        if (!found) {
            // const result = await cloudinary.uploader.upload(image, {
            //     //nombre del folder que se crea con las fotos, si no existe se crea automaticamente
            //     folder: 'doctorPhotos',
            // })
            const newDoctor = await doctorModel.create({
                name,
                email,
                password,
                status: "active",
                // specialtie,
                // method,
                // image: result.secure_url,
                // description,
                rating: rating || 0,
                role: "Doctor",
                // country
            })
            const register = {
                id: newDoctor._id,
                name: newDoctor.name,
                email: newDoctor.email,
                status: newDoctor.status,
                // specialtie: newDoctor.specialtie,
                // method: newDoctor.method,
                // image: newDoctor.image,
                // description: newDoctor.description,
                // rating: newDoctor.rating,
                role: newDoctor.role,
                // country: newDoctor.country
            }
            return register
        } else return { msg: "This email is already in use" };

    } catch (e) {
        console.error(e);
        throw new Error("Error occurred. Patient couldn't be registered.")
    }
}

const updateDoctor = async (req, res, next) => {
    try {
        const { id } = req.params
        const { name, email, password, status, specialtie, method, image, description, rating, country } = req.body

        // const result = await cloudinary.uploader.upload(image, {
        //     //nombre del folder que se crea con las fotos, si no existe se crea automaticamente
        //     folder: 'doctorPhotos',
        // })

        const updatedDoc = await doctorModel.findByIdAndUpdate(id, {
            name,
            email,
           // password,
           // status,
            specialtie,
            method,
            image,
            description,
           // rating,
            country
        }, { new: true }) // este ultimo parámetro hace que nos devuelva el doc actualizado
            .then(() => {
                console.log(updatedDoc)
                res.status(200).send("Doctor Successfully Updated")
            })
    } catch (error) { next(error) }
};

const deleteDoctor = async (req, res, next) => {
    try {
        const { id } = req.params

        await doctorModel.findByIdAndRemove(id)
            .then(() => {
                res.status(200).send("Doctor Successfully Deleted")
            })
    } catch (error) { next(error) }
}

module.exports = {
    getAllDoctors,
    getDoctorDetail,
    registerDoctor,
    updateDoctor,
    deleteDoctor
};