const { patientModel } = require('../models/models');
const { roleModel } = require('../models/models');
const cloudinary = require('../cloudinary')
const axios = require('axios')
require("dotenv").config();
const jwt = require('jsonwebtoken')
const { json } = require('body-parser');
const JWT_SECRET = process.env.JWT_SECRET;
const mercadopago = require('mercadopago')

const nameFolder = 'patientPhotos'
const { EmeilerConfig } = require('../Emeiler.config.js')
mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN
})


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
        if (patients.length > 0) {
            return patients
        } else return { msg: "There are no patients with that name" }

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
        if (patient) {
            return patient
        } else return { msg: "There's no Patient with that id" }

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
            const newPatient = new patientModel({
                name,
                email,
                password: await patientModel.encryptPassword(password),
                // birthDate,
                // genre,
                // address,
                // country,
                // tel,
                // image: result.secure_url,
                role: "patient",
                status: "active"
            })

            const savedUser = await newPatient.save();
            console.log(savedUser)

            //Permite crear un token
            //Recibe que se va a guardar, una clave secreta y un objeto de configuracion
            const token = jwt.sign({ id: savedUser._id }, JWT_SECRET, {
                expiresIn: 86400 //Esta en segundos = Expira en 24 horas
            })

            EmeilerConfig('Te damos la bienvenida ' + name + ' ya puedes entrar a http://localhost:3000/', email, name)
            return json({ token })
            
        } else {
            return { msg: "This email is already in use" };
        }

    } catch (e) {
        console.error(e);
        throw new Error("Error occurred. Patient couldn't be registered.")
    }
};

const updatePatient = async (req, res, next) => {
    try {

        const { id } = req.params
        const { name, email, password, birthDate, genre, address, country, tel, image, status } = req.body


        // const result = await cloudinary.uploader.upload(image, {
        //     //     //nombre del folder que se crea con las fotos, si no existe se crea automaticamente
        //     //     folder: patientPhotos,
        //     // })

        await patientModel.findByIdAndUpdate(id, {
            name: name,
            email: email,
            // password: password,
            birthDate: birthDate,
            genre: genre,
            address: address,
            country: country,
            tel: tel,
            image: image,
            //status: status
        }, { new: true }) // este ultimo parámetro hace que nos devuelva el doc actualizado

        .then(() => {
            // console.log(updatedPatient)
            res.status(200).send("Patient Successfully Updated")
        })

    } catch (error) {
        console.error('Failed to update patient');
        console.log(error)
        next(error)
    }
};

const updatePatientAdmin = async (req, res, next) => {
    try {
        const { id } = req.params
        const { name, email, password, birthDate, genre, address, country, tel, image, status } = req.body

        // const result = await cloudinary.uploader.upload(image, {
        //     //     //nombre del folder que se crea con las fotos, si no existe se crea automaticamente
        //     //     folder: patientPhotos,
        //     // })

        await patientModel.findByIdAndUpdate(id, {
            name: name,
            email: email,
            // password: password,
            birthDate: birthDate,
            genre: genre,
            address: address,
            country: country,
            tel: tel,
            image: image,
            status: status
        }, { new: true }) // este ultimo parámetro hace que nos devuelva el doc actualizado

        .then(() => {
            // console.log(updatedPatient)
            res.status(200).send("Patient Successfully Updated")
        })

    } catch (error) {
        console.error('Failed to update patient');
        console.log(error)
        next(error)
    }
};

const deletePatient = async (req, res, next) => {
    try {
        const { id } = req.params

        await patientModel.findByIdAndRemove(id)
        .then(() => {
            res.status(200).send("Patient Successfully Deleted")
        })
    } catch (error) {
        console.error('Failed to remove patient');
        next(error)
    }
};

const getmercadopago = async () => {
    const urlplan = 'https://api.mercadopago.com/preapproval_plan'
    const plan = {

        "reason": "Plan por mes de Heath 4U",
        "auto_recurring": {
            "frequency": 1,
            "frequency_type": "months",
            "repetitions": 12,
            "billing_day": 1,
            "billing_day_proportional": true,
            "transaction_amount": 2700,
            "currency_id": "ARS"
        },
        "payment_methods": {
            "excluded_payment_methods": [
                {
                    "id": "master"
                }
            ],
            "excluded_payment_types": [
                {
                    "id": "ticket"
                }
            ],
            "installments": 12
        },
        "back_url": "https://google.com"
    }
    const subscription = await axios.post(urlplan, plan, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
        }
    });
    console.log(subscription.data)
    return subscription.data.init_point
    /* const sub = {
        "preapproval_plan_id": subscription.data.id,
        "reason": "Yoga classes",
        "external_reference": "YG-1234",
        "payer_email": "test_user@testuser.com",
        "card_token_id": "e3ed6f098462036dd2cbabe314b9de2a",
        "auto_recurring": {
            "frequency": 1,
            "frequency_type": "months",
            // "start_date": "2020-06-02T13:07:14.260Z",
            //"end_date": "2022-07-20T15:59:52.581Z",
            "transaction_amount": 10,
            "currency_id": "ARS"
        },
        "back_url": "https://www.mercadopago.com.ar",
        "status": "authorized"
        }
    */
    //   const url='https://api.mercadopago.com/preapproval'
    //   const subscriptionfinal = await axios.post(url, sub, {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
    //     }
    //   });
    //   console.log(subscriptionfinal)
    //   const body = {
    //     "items": [
    //         {
    //             "id": "Heath 4U",
    //             "title": "Heath 4U ",
    //             "currency_id": "ARS",
    //             "picture_url": "https://www.mercadopago.com/org-img/MP3/home/logomp3.gif",
    //             "description": "this is the payment to be able to use the Heath 4U service",
    //             "category_id": "art",
    //             "quantity": 1,
    //             "unit_price": 1200
    //         }
    //     ],
    //     "payer": {
    //         "name": name,
    //         "surname": "",
    //         "email": email,
    //         "phone": {
    //             "area_code": "11",
    //             "number": tel
    //         },
    //         "identification": {
    //             "type": "DNI",
    //             "number": DNI
    //         },
    //         "address": {
    //             "street_name": adrress,
    //             "street_number": 123,
    //             "zip_code": "5700"
    //         }
    //     },
    //     "back_urls": {
    //         "success": "https://www.success.com",
    //         "failure": "http://www.failure.com",
    //         "pending": "http://www.pending.com"
    //     },
    //     "auto_return": "approved",
    //     "payment_methods": {
    //         "excluded_payment_methods": [
    //             {
    //                 "id": "master"
    //             }
    //         ],
    //         "excluded_payment_types": [
    //             {
    //                 "id": "ticket"
    //             }
    //         ],
    //         "installments": 12
    //     },
    //     "notification_url": "https://www.your-site.com/ipn",
    //     "statement_descriptor": "MINEGOCIO",
    //     "external_reference": "Reference_1234",
    //     "expires": true,
    //    //"expiration_date_from": "2016-02-01T12:00:00.000-04:00",
    //    //"expiration_date_to": "2016-02-28T12:00:00.000-04:00"
    //  }

    //   try {
    //     const url='https://api.mercadopago.com/preapproval'
    //     const resp= await axios( {
    //     method: 'post',
    //     url: url,
    //     headers: { 
    //       'Authorization' : `Bearer ${process.env.ACCESS_TOKEN}`,
    //       'Content-Type': 'application/json'
    //     },
    //     data : preferencias
    //   })
    //   console.log(resp)
    //   } catch (error) {
    //     console.log(error)
    //   }
    //   mercadopago.preapproval.create(preferencias)
    //   .then(res=>console.log(res.body))
    //   .catch(err=>console.log(err))
};

module.exports = {
    getAllPatients,
    getPatientByName,
    getPatientDetail,
    registerPatient,
    updatePatient,
    updatePatientAdmin,
    deletePatient,
    getmercadopago
};