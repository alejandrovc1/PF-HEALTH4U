//Autorizador 

//Funciones para confirmar si el usuario envia el token
//Verifica si es doctor,paciente o admin
const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET;
const doctorModel = require('../models/doctor')
const patientModel = require('../models/patient')
const adminModel = require('../models/admin')
const roleModel = require('../models/role')

//Funcion para verificar si envia un token
const verifyToken = async (req, res, next) => {

    try {
        const token = req.headers["x-access-token"];

        console.log(token)

        if (!token) return res.status(403).json({ message: "No token provided" })

        const decoded = jwt.verify(token, JWT_SECRET)
        req.userId = decoded.id;

        const doctor = await doctorModel.findById(req.userId, { password: 0 })
        if (doctor) {
            //caso en el que haya doctor
        } else {
            const patient = await patientModel.findById(req.userId, { password: 0 })
            if (patient) {
                //caso en el que haya paciente
            } else {
                return res.status(404).json({ message: 'No user found' })
            }
        }
        next();
    } catch (error) {
        res.status(401).json({ message: 'Unoauthorized' })
    }
}

const isAdmin = async (req, res, next) => {
    try {
        const adminFound = await adminModel.findById(req.userId)
        const role = await roleModel.find({ _id: { $in: adminFound.role } })

        for (let i = 0; i < role.length; i++) {
            if (role[i].name === 'admin') {
                next()
                return;
            }
        }
        return res.status(403).json({ message: "Require admin role" })
    } catch (error) {

    }
}
const isDoctor = async (req, res, next) => {
    try {
        const doctorFound = await doctorModel.findById(req.userId)
        const role = await roleModel.find({ _id: { $in: doctorFound.role } })

        for (let i = 0; i < role.length; i++) {
            if (role[i].name === 'doctor') {
                next()
                return;
            }
        }
        return res.status(403).json({ message: "Require doctor role" })
    } catch (error) {
        console.log(error)
    }
}
const isPatient = async (req, res, next) => {
    try {
        const patientFound = await patientModel.findById(req.userId)
        const role = await roleModel.find({ _id: { $in: patientFound.role } })

        for (let i = 0; i < role.length; i++) {
            if (role[i].name === 'patient') {
                next()
                return;
            }
        }
        return res.status(403).json({ message: "Require patient role" })
    } catch (error) {

    }
}
module.exports = { verifyToken, isAdmin, isDoctor, isPatient };
