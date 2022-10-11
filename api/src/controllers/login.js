const { doctorModel, patientModel, adminModel } = require('../models/models');

const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET;

const loginFunction = async (req, res) => {
    try {
        if (req.body.email && req.body.password) {
            //populate lo que hace es devolver todo el objeto role entero debido a que necesitamos el nombre, no solo el id
            const doctorFound = await doctorModel.findOne({ email: req.body.email }).populate("role")
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

                res.send({
                    email: doctorFound.email,
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

                    res.send({
                        email: patientFound.email,
                        token,
                        logged: true
                    })
                } else {
                    return res.status(400).json({ token: null, message: 'User not found' })
                }
            }
        } return { msg: "Email and password are required" };

    } catch (e) {
        console.error(e);
        throw new Error("Error. Can't logIn.")
    }
}

module.exports = { loginFunction };