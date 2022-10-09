const { patientModel } = require('../models/models');
const cloudinary = require('../cloudinary')
const nameFolder = 'patientPhotos'
const {EmeilerConfig}= require('../Emeiler.config.js')
const getAllPatients = async () => {
    try {
        const response = await patientModel.find({})
        const patients = response?.map(Pat => {
            const Patient = {
                id: Pat._id,
                name: Pat.name,
                email: Pat.email,
                birthDate: Pat.birthDate,
                genre: Pat.genre,
                address: Pat.address,
                country: Pat.country,
                tel: Pat.tel,
                image: Pat.image,
                role: Pat.role,
                status: Pat.status
            }
            return Patient
        })
        if (patients.length > 0) {
            return patients
        } else return { msg: "There's no patients in the DB" }

    } catch (e) {
        console.error(e);
        throw new Error("Error occurred. Patients couldn't be shown.")
    }
};

const getPatientByName = async (name) => {
    try {
        const response = await patientModel.find({
            name: name,
        })
        const patients = response?.map(P => {
            const Patient = {
                id: P._id,
                name: P.name,
                email: P.email,
                birthDate: P.birthDate,
                genre: P.genre,
                address: P.address,
                country: P.country,
                tel: P.tel,
                image: P.image,
                role: P.role,
                status: P.status
            }
            return Patient
        })
        if(patients.length > 0) {
            return patients
        } else return { msg: "There are no patients with that name"}

    } catch (e) {
        console.error(e);
        throw new Erorr("Error occurred. Patients not found")
    }
};

const getPatientDetail = async (id) => {
    try {
        const response = await patientModel.findById(id)
        const patient = {
            id: response._id,
            name: response.name,
            email: response.email,
            birthDate: response.birthDate,
            address: response.address,
            country: response.country,
            tel: response.tel,
            genre: response.genre,
            image: response.image,
            role: response.role,
            status: response.status
        }
        if(patient) {
            return patient
        } else return { msg: "There's no Patient with that id"}

    } catch (e) {
        console.error(e);
        throw new Erorr("Error occurred. Patient not found")
    }
};

const registerPatient = async (registerData) => {
    try {
        const { name, email, password, birthDate, genre, address, country, tel, image } = registerData
        const found = await patientModel.findOne({ email: email })

        if (!found) {
            // const result = await cloudinary.uploader.upload(image, {
            //     //nombre del folder que se crea con las fotos, si no existe se crea automaticamente
            //     folder: patientPhotos,
            // })
            const newPatient = await patientModel.create({
                name,
                email,
                password,
                // birthDate,
                // genre,
                // address,
                // country,
                // tel,
                // image: result.secure_url,
                role: "Patient",
                status: "active"
            })
            const register = {
                id: newPatient._id,
                name: newPatient.name,
                email: newPatient.email,
                // birthDate: newPatient.birthDate,
                // genre: newPatient.genre,
                // address: newPatient.address,
                // country: newPatient.country,
                // tel: newPatient.tel,
                // image: newPatient.image,
                role: newPatient.role,
                status: newPatient.status
            }
            EmeilerConfig('Te damos la bienvenida '+name+' ya puedes entrar a http://localhost:3000/' ,email,name)
            return register
        } else {
            return { msg: "This email is already in use" };
        }

    } catch (e) {
        console.error(e);
        throw new Error("Error occurred. Patient couldn't be registered.")
    }
};
const emeils = async (msj ) => {
    try {
        
      let mandado =  await transporter.sendMail({
           from: '"prueba email 👻" <helath.4U.web@gmail.com>', // sender address
           to: "smitesotra@gmail.com", // list of receivers
           subject: "Hello ✔", // Subject line
           text: msj, // plain text body
           //html: "<b>Hello world?</b>", // html body
         });
         
            return 'msj mandado'
         
        } catch (e) {
            console.error(e);
            throw new Error("Error occurred. Patient couldn't be registered.")
        }
}

const updatePatient = async (req, res, next ) => {
    try {
        
        const {id} = req.params
        const {name, email, password, birthDate, genre, address, country, tel, image, status} = req.body 

        // const result = await cloudinary.uploader.upload(image, {
        //     //     //nombre del folder que se crea con las fotos, si no existe se crea automaticamente
        //     //     folder: patientPhotos,
        //     // })
        
        const updatedPatient = await patientModel.findByIdAndUpdate(id, {
            name: name,
            email: email,
            password: password,
            birthDate: birthDate,
            genre: genre,
            address: address,
            country: country,
            tel: tel, 
            image: image,
            status: status
        }, { new : true}) // este ultimo parámetro hace que nos devuelva el doc actualizado

        .then( () => {
            console.log(updatedPatient)
            res.status(200).send("Patient Successfully Updated")
        })
    
    } catch (error) { 
        console.error('Failed to update patient');
        next(error)
    }

};

const deletePatient = async (req, res, next) => { 
    try {
        const {id} = req.params

        await patientModel.findByIdAndRemove(id)
        .then( () => {
            res.status(200).send("Patient Successfully Deleted")
        })
    } catch (error) { 
        console.error('Failed to remove patient');
        next(error)
    }
};


module.exports = {
    getAllPatients,
    getPatientByName,
    getPatientDetail,
    registerPatient,
    updatePatient,
    deletePatient,
    emeils
}