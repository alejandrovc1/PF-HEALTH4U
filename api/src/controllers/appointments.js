const appointmentModel = require('../models/appointment')
const mongoose = require("mongoose");

const generarConsulta = async (req, res) => {
    const {servicio, precio, fecha} = req.body

    if ( !servicio || !precio || !fecha ) res.status(400).send('Falta enviar datos obligatorios');
    else if (typeof servicio !== 'string' || typeof precio !== 'number' || typeof fecha !== 'date') {
    res.status(400).send("Error, los tipos de datos son incorrectos")}

    try {
        let crearConsulta = await new appointmentModel({
            servicio: servicio,
            precio: precio,
            fecha: fecha.toLocaleString()
        });

        crearConsulta.save()
        .then( result => {
            console.log(result)
            mongoose.connection.close() // es buena práctica cerrar las conexiones
        })
        .catch(err => {
            console.error(err)
        })

        res.status(200).send('Consulta generada con éxito');
    } catch(e) {
        console.log(e);
        res.status(406).send('Error al generar la consulta')
    }
};

// let crearConsulta = new appointmentModel({
//     servicio: "General",
//     precio: 1000,
//     fecha: new Date()
// });

// crearConsulta.save()
// .then( result => {
//     console.log(result)
//     mongoose.connection.close() // es buena práctica cerrar las conexiones
// })
// .catch(err => {
//     console.error(err)
// })


const visualizarConsultas = async (req, res) => {
    try{
        const findConsulta = await appointmentModel.find({})
        .then( result => {
            console.log(result)
            mongoose.connection.close()
        })
        .catch(err => {
            console.error(err)
        })
        res.status(200).send(findConsulta)
    } catch (error) {
        console.log("Something went wrong, ", error)
    }
};

const eliminarConsulta = async (req, res) => {

};

const actualizarConsulta = async (req, res) => {

};

module.exports = {
    generarConsulta,
    visualizarConsultas,
    eliminarConsulta,
    actualizarConsulta
}