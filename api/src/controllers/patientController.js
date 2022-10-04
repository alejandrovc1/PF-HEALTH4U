const { patientModel } = require('../models/models');
const cloudinary = require('../cloudinary')
const nameFolder = 'patientPhotos'

const getAllPatients = async () => {
    try {
        const response = await patientModel.find({})
        const patients = response?.map(p => {
            const Pa = {
                id: p._id,
                name: p.name,
                email: p.email,
                birthDate: p.birthDate,
                genre: p.genre,
                image: p.image,
                role: p.role
            }
            return Pa
        })
        if (patients.length > 0) {
            return patients
        } else {
            return { msg: "There's no patients in the DB" };
        }

    } catch (e) {
        console.error(e);
        throw new Error("Error. Patients can't be showed.")
    }
}

const getPatientByName = async (name) => {
    try {
        const response = await patientModel.find({
            name: name,
        })
        const patients = response?.map(p => {
            const Pa = {
                id: p._id,
                name: p.name,
                email: p.email,
                birthDate: p.birthDate,
                genre: p.genre,
                image: p.image,
            }
            return Pa
        })
        if(patients.length > 0) {
            return patients
        } else return { msg: "There's no patients with that name"}

    } catch (e) {
        console.error(e);
        throw new Erorr("Error. Patients not found")
    }
}

const getPatientDetail = async (id) => {
    try {
        const response = await patientModel.findById(id)
        const patient = {
            id: response._id,
            name: response.name,
            email: response.email,
            birthDate: response.birthDate,
            genre: response.genre,
            image: response.image,
            role: response.role
        }
        if(patient) {
            return patient
        } else return { msg: "There's no Patient with that id"}

    } catch (e) {
        console.error(e);
        throw new Erorr("Error. Patient not found")
    }
}

const registerPatient = async (registerData) => {
    try {
        const { name, email, password, birthDate, genre, image } = registerData
        const found = await patientModel.findOne({ email: email })

        if (!found) {
            const result = await cloudinary.uploader.upload(image, {
                //nombre del folder que se crea con las fotos, si no existe se crea automaticamente
                folder: patientPhotos,
            })
            const newPatient = await patientModel.create({
                name,
                email,
                password,
                birthDate,
                genre,
                image: result.secure_url,
                role: "Patient"
            })
            const register = {
                id: newPatient._id,
                name: newPatient.name,
                email: newPatient.email,
                birthDate: newPatient.birthDate,
                genre: newPatient.genre,
                image: newPatient.image,
                role: newPatient.role
            }
            return register
        } else {
            return { msg: "This email is already in use" };
        }

    } catch (e) {
        console.error(e);
        throw new Error("Error. Patient can't be registered.")
    }
}

// const loginPatient = async (loginData) => {
//     try {
//         const { email, password } = loginData

//         if (email && password) {
//             const patient = await patientModel.findOne({ email: email, password: password })
//             if (patient) {
//                 const response = {
//                     id: patient._id,
//                     name: patient.name,
//                     email: patient.email,
//                     birthDate: patient.birthDate,
//                     genre: patient.genre,
//                     image: patient.image,
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
    getAllPatients,
    getPatientByName,
    getPatientDetail,
    registerPatient,
    // loginPatient,
}