const { doctorModel, patientModel, adminModel } = require('../models/models');

const jwt = require("jsonwebtoken");
const { findById } = require('../models/patient');
const JWT_SECRET = process.env.JWT_SECRET;

const loginFunction = async (req, res) => {
    try {
        if (req.body.email && req.body.password) {
            //populate lo que hace es devolver todo el objeto role entero debido a que necesitamos el nombre, no solo el id
            const doctorFound = await doctorModel.findOne({ email: req.body.email })
            if (doctorFound) {
                const matchPassword = await doctorModel.comparePassword(req.body.password, doctorFound.password)

                if (matchPassword === false) return res.status(401).json({ token: null, message: 'Invalid Password 1' })

                const userForToken = {
                    id: doctorFound._id,
                    username: doctorFound.username
                }

                const token = jwt.sign(userForToken, JWT_SECRET, {
                    expiresIn: 86400 // Un dia 
                })

                await doctorModel.findByIdAndUpdate(doctorFound._id, {
                    token: token,
                })

                res.send({
                    name: doctorFound.name,
                    email: doctorFound.email,
                    id: doctorFound._id,
                    token,
                })
            } else {

                const patientFound = await patientModel.findOne({ email: req.body.email })
                if (patientFound) {
                    const matchPassword2 = await patientModel.comparePassword(req.body.password, patientFound.password)

                    if (matchPassword2 === false) return res.status(401).json({ token: null, message: 'Invalid Password 2' })

                    const userForToken2 = {
                        id: patientFound._id,
                        email: patientFound.email
                    }

                    const token = jwt.sign(userForToken2, JWT_SECRET, {
                        expiresIn: 86400 // Un dia 
                    })
                    await patientModel.findByIdAndUpdate(patientFound._id, {
                        token: token,
                    })
                    res.send({
                        name: patientFound.name,
                        email: patientFound.email,
                        id: patientFound._id,
                        token,
                    })
                } else {
                    const adminFound = await adminModel.findOne({ email: req.body.email })
                    if (adminFound) {
                        const userForToken3 = {
                            id: adminFound._id,
                            email: adminFound.email
                        }

                        const token = jwt.sign(userForToken3, JWT_SECRET, {
                            expiresIn: 86400 // Un dia 
                        })
                        await adminModel.findByIdAndUpdate(adminFound._id, {
                            token: token,
                        })

                        res.send({
                            name: adminFound.name,
                            email: adminFound.email,
                            id: adminFound._id,
                            token,
                        })
                    }
                    else { return res.status(400).json({ token: null, message: 'User not found' }) }
                }
            }
        } return { msg: "Email and password are required" };

    } catch (e) {
        console.error(e);
        throw new Error("Error. Can't logIn.")
    }
}

const compareToken = async (req, res) => {
    try {
        const { id, token } = req.body
        const doctorFound = await doctorModel.findOne({ _id: id })
        const patientFound = await patientModel.findOne({ _id: id })
        const adminFound = await adminModel.findOne({_id:id})
        console.log('doctor: ' + doctorFound + "patient: " + patientFound)
        if (doctorFound) {
            if (doctorFound.token === token) {
                let roleFound = 'doctor'

                res.send(
                    roleFound,
                )
            }
        } else
            if (patientFound) {
                if (patientFound.token === token) {
                    let roleFound = 'patient'
                    res.send(
                        roleFound,
                    )
                }
            } else 
            if (adminFound) {
                if (adminFound.token === token) {
                    let roleFound = 'admin'
                    res.send(
                        roleFound,
                    )
                }
            }else{
                res.send('problemas')
            }
    } catch (e) {
        console.log(e)
    }
}

module.exports = { loginFunction, compareToken };