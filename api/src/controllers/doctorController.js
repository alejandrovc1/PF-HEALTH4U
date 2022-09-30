const { doctorModel } = require('../models/models');

const getAllDoctors = async () => {
    try {
        console.log("acá")
        const response = await doctorModel
            .find({}).populate({
                path: "specialtie",
            })
        if (response) {
            return response
        } else {
            res.send({ msg: "There's no doctors in the DB" });
        }

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
        if (response) {
            return response
        } else {
            res.send({ msg: "There's no doctor with that id" });
        }
    } catch (e) {
        console.error(e);
        throw new Error("Error. Doctor can't showed.")
    }
}

const registerDoctor = async (registerData) => {
    try {
        const { name, email, password, status, specialtie, method, image } = registerData
        const found = await doctorModel.findOne({ name: name })
        console.log(registerData)
        if (!found) {
            const result = await cloudinary.uploader.upload(image, {
                //nombre del folder que se crea con las fotos, si no existe se crea automaticamente
                folder: doctorPhotos,
            })
            const register = await doctorModel.create({
                name,
                email,
                password,
                status,
                specialtie,
                method,
                image: result.secure_url
            })
            return register
        } else {
            res.send({ msg: "This Doctor already exists" });
        }

    } catch (e) {
        console.error(e);
        throw new Error("Error. Doctor can't be registered.")
    }
}
const loginDoctor = async (loginData) => {
    try {
        const { email, password } = loginData

        if (email && password) {
            const doctor = await doctorModel.findOne({ email: email, password: password })
            if (doctor) {
                return doctor
            } else {
                res.send({ msg: "Some Login data wasn't correct" });
            }
        }

    } catch (e) {
        console.error(e);
        throw new Error("Error. Can't logIn.")
    }
}

module.exports = {
    getAllDoctors,
    getDoctorDetail,
    registerDoctor,
    loginDoctor,
};