const { medicoModel } = require('../models/models');
const { create } = require('../models/paciente');

const getAllMedicos = async () => {
    try {
        const response = await medicoModel
            .find({ }).populate({
                path: "especialidad",
            })
        if(response) {
            return response
        } else {
            res.send({ msg: "No hay médicos en la DB"});
        }

    } catch (e) {
        console.error(e);
        throw new Error ("Error. No se pueden mostrar los médicos.")
    }
}
    
const getMedicoDetail = async (id) => {
    try {
        const response = await medicoModel.findById(id).populate({
            path: "especialidad",
        })
        if(response) {
            return response
        } else {
            res.send({ msg: "No hay médico con ese id"});
        }
    } catch (e) {
        console.error(e);
        throw new Error ("Error. No se puede mostrar médico.")
    }
}
    
const registerMedico = async (registerData) => {
    try {
        const { nombre, correo, contrasena, disponibilidad, cedula } = registerData
        const found = await medicoModel.findOne({ cedula: cedula })

        if(!found) {
            const register = await medicoModel.create({
                nombre,
                correo,
                contrasena,
                disponibilidad,
                cedula,
            })
            return register
        } else {
            res.send({ msg: "Este médico ya existe"});
        }

    } catch (e) {
        console.error(e);
        throw new Error ("Error. No se puede registrar al médico.")
    }
}
    const loginMedico = async (loginData) => {
        try {

        } catch (e) {
            console.error(e);
            throw new Error ("Error. No se puede iniciar sesión.")
        }
    }

    module.exports = {
        getAllMedicos,
        getMedicoDetail,
        registerMedico,
        loginMedico,
    };