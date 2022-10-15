const { doctorModel } = require('../models/models');
const { roleModel } = require('../models/models');
const cloudinary = require('../cloudinary')

const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
const { json } = require('body-parser');
const {EmeilerConfig}= require('../Emeiler.config.js')


const getAllDoctors = async (req, res, next) => {
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
                role: d.role,
                country: d.country
            }
            return Dr
        })

        if (doctors.length > 0) res.status(200).send(doctors);
        else return { msg: "There are no doctors in the DB" }
    } catch (error) {
        console.error("Error occurred. Doctors couldn't be shown.");
        next(error)
    }
};

const getDoctorDetail = async (req, res, next) => {
    try {
        const { id } = req.params

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
            role: response.role,
            country: response.country
        }
        doctor ? res.status(200).send(doctor) : { msg: "There's no doctor with that id" };

    } catch (error) {
        console.error("Error occurred. Doctor couldn't be shown.");
        next(error)
    }
};

const registerDoctor = async (registerData) => {

    try {
        const { name, email, password, specialtie, method, image, description, country } = registerData

        const found = await doctorModel.findOne({ email: email })
        if (!found) {
            // const result = await cloudinary.uploader.upload(image, {
            //     //nombre del folder que se crea con las fotos, si no existe se crea automaticamente
            //     folder: 'doctorPhotos',
            // })
            const newDoctor = new doctorModel({
                name,
                email,
                password: await doctorModel.encryptPassword(password),
                // specialtie,
                // method,
                // image: result.secure_url,
                // description,
                // country
                role: 'Doctor',
                rating: 0,
                status: "active",
            })

            // if (roles) {
            //     //en caso de que quisieramos agregar varios roles a un doctor
            //     const foundRoles = await roleModel.find({ name: { $in: roles } })
            //     //en la propiedad rol del doctor se guarda un arreglo con el id del rol
            //     newDoctor.role = foundRoles.map(role => role._id)//por cada objeto(role) devuelve el id (role._id)
            // } else {
            //     // solo agrega un rol por defecto al usuario
            //     const role = await roleModel.findOne({ name: "doctor" })
            //     newDoctor.role = [role._id]
            // }

            const savedUser = await newDoctor.save();
            console.log(savedUser)

            //Permite crear un token
            //Recibe que se va a guardar, una clave secreta y un objeto de configuracion
            const token = jwt.sign({ id: savedUser._id }, JWT_SECRET, {
                expiresIn: 86400 //Esta en segundos = Expira en 24 horas
            })

            EmeilerConfig('Te damos la bienvenida ' + name + ' ya puedes entrar a http://localhost:3000/', email, name)
            return json({ token })
            
        } else return { msg: "This email is already in use" };

    } catch (e) {
        console.error(e);
        throw new Error("Error occurred. Doctor couldn't be registered.")
    }
};

const updateDoctor = async (req, res, next) => {
    try {
        const { id } = req.params
        const { name, email, password, status, specialtie, method, image, description, rating, country } = req.body

        const result = await cloudinary.uploader.upload(image, {
            //nombre del folder que se crea con las fotos, si no existe se crea automaticamente
            folder: 'doctorPhotos',
        })

        const updatedDoc = await doctorModel.findByIdAndUpdate(id, {
            name,
            email,
            password,
            status,
            specialtie,
            method,
            image: result.secure_url,
            description,
            rating,
            country
        }, { new: true }) // este ultimo parámetro hace que nos devuelva el doc actualizado
        .then(() => {
            console.log(updatedDoc)
            res.status(200).send("Doctor Successfully Updated")
        })
    } catch (error) { next(error) }
};

const deleteDoctor = async (req, res, next) => {
    try {
        const { id } = req.params

        await doctorModel.findByIdAndRemove(id)
            .then(() => {
                res.status(200).send("Doctor Successfully Deleted")
            })
    } catch (error) { next(error) }
};

module.exports = {
    getAllDoctors,
    getDoctorDetail,
    registerDoctor,
    updateDoctor,
    deleteDoctor
};