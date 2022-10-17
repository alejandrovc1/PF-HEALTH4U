//Validador

//Verifica si un usuario ya existe
//Verifica si el rol que envia ya esta creado
const { ROLES } = require('../models/role')
const { doctorModel, patientModel, adminModel } = require('../models/models')

const checkRolesExisted = async (req, res, next) => {
    if (req.body.role) {
        for (let i = o; i < req.body.role.length; i++) {
            if (!ROLES.includes(req.body.role[i])) {
                return res.status(400).json({
                    message: `Role ${req.body.role[i]} does not exists`
                })
            }
        }
    }
    next();
}

const checkDuplicatedUser = async (req, res, next) => {
    const doctorFound = await doctorModel.findOne({ email: req.body.email })
    const patientFound = await patientModel.findOne({ email: req.body.email })
    const adminFound = await adminModel.findOne({ email: req.body.email })

    if (!doctorFound) {
        if (!patientFound) {
            if (!adminFound) {
                next()
            } else {
                return res.status(400).json({ message: 'The user already exists' })
            }
        }
    }
}

module.exports = { checkRolesExisted, checkDuplicatedUser }