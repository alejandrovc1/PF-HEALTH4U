const { doctorModel, patientModel, adminModel } = require('../models/models');

const loginFunction = async (loginData) => {
    try {
        const { role, email, password} = loginData
        console.log(role, email, password);
        if (role === "Doctor"){
            if (email && password) {
                const doctor = await doctorModel.findOne({ email: email, password: password })
                if (doctor) {
                    const response = {
                        id: doctor._id,
                        name: doctor.name,
                        email: doctor.email,
                        status: doctor.status,
                        specialtie: doctor.specialtie,
                        method: doctor.method,
                        image: doctor.image,
                        description: doctor.description,
                        rating: doctor.rating,
                        role: doctor.role
                    }
                    return response
                } else {
                    return { msg: "Doctor not found" };
                }
            }
        } else if (role === "Patient"){
            if (email && password) {
                const patient = await patientModel.findOne({ email: email, password: password })
                if (patient) {
                    const response = {
                        id: patient._id,
                        name: patient.name,
                        email: patient.email,
                        image: patient.image,
                        genre: patient.genre,
                        role: patient.role
                    }
                    return response
                } else {
                    return { msg: "Patient not found" };
                }
            }
        } else if (role === "Admin"){
            if (email && password) {
                const admin = await adminModel.findOne({ email: email, password: password })
                if (admin) {
                    const response = {
                        id: admin._id,
                        name: admin.name,
                        email: admin.email,
                        role: admin.role
                    }
                    return response
                } else {
                    return { msg: "Not admin user" };
                }
            }
        } else return "Please indicate the user role"
    } catch (e) {
        console.error(e);
        throw new Error("Error. Can't logIn.")
    }
}

module.exports = {loginFunction};