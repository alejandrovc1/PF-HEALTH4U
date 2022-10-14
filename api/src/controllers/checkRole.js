const { doctorModel, patientModel } = require('../models/models');

const checkRole = async (req, res) => {
    const { id }  = req.params
    console.log(id)
    try {
        if(id) {
            const doctorFound = doctorModel.findOne({ _id: id }).populate("role")
            const patientFound = patientModel.findOne({ _id: id}).populate("role")

            if(doctorFound) {
                res.send(doctorFound.role)
            } else if (patientFound) {
                res.send(patientFound.role)
            } else {
                res.send({ msg: "Id not found"})
            }
        }
    } catch(e) {
        console.error(e);
    }
}

module.exports = { checkRole }