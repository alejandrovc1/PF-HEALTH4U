const { doctorModel } = require('../models/models');
const cloudinary = require('../cloudinary')
const nameFolder = 'doctorPhotos'

const getAllDoctors = async () => {
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
                role: d.role
            }
            return Dr
        })
        if(doctors.length > 0) {
            return doctors
        } else return { msg: "There's no doctors in the DB" }
    } catch (e) {
        console.error(e);
        throw new Error("Error. Doctors can't be showed.")
    }
}

const getDoctorDetail = async (id) => {
    try {
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
            role: response.role
        }
        if (doctor) {
            return doctor
        } else {
            return { msg: "There's no doctor with that id" };
        }
    } catch (e) {
        console.error(e);
        throw new Error("Error. Doctor can't showed.")
    }
}

const registerDoctor = async (registerData) => {
    try {
        const { name, email, password, specialtie, method, image, description, rating} = registerData
        const found = await doctorModel.findOne({ email: email })

        if (!found) {
            const result = await cloudinary.uploader.upload(image, {
                //nombre del folder que se crea con las fotos, si no existe se crea automaticamente
                folder: doctorPhotos,
            })
            const newDoctor = await doctorModel.create({
                name,
                email,
                password,
                status: "active",
                specialtie,
                method,
                image: result.secure_url,
                description,
                rating: rating || 0,
                role: "Doctor"
            })
            const register = {
                id: newDoctor._id,
                name: newDoctor.name,
                email: newDoctor.email,
                status: newDoctor.status,
                specialtie: newDoctor.specialtie,
                method: newDoctor.method,
                image: newDoctor.image,
                description: newDoctor.description,
                rating: newDoctor.rating,
                role: newDoctor.role
            }

            return register
        } else {
            return { msg: "This email is already in use" };
        }
    } catch (e) {
        console.error(e);
        throw new Error("Error. Doctor can't be registered.")
    }
}

// const loginDoctor = async (loginData) => {
//     try {
//         const { username, password } = loginData
//         if (email && password) {
//             const doctor = await doctorModel.findOne({ email: email, password: password })
//             if (doctor) {
//                 const response = {
//                     id: doctor._id,
//                     name: doctor.name,
//                     email: doctor.email,
//                     status: doctor.status,
//                     specialtie: doctor.specialtie,
//                     method: doctor.method,
//                     image: doctor.image,
//                 }
//                 return response
//             } else {
//                 return { msg: "Some Login data wasn't correct" };
//             }
//         }
//     } catch (e) {
//         console.error(e);
//         throw new Error("Error. Can't logIn.")
//     }
// }

module.exports = {
    getAllDoctors,
    getDoctorDetail,
    registerDoctor,
    // loginDoctor,
};