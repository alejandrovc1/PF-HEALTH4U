const appointmentModel = require('../models/appointment')
const mongoose = require("mongoose");

const generarConsulta = async (req, res) => {
    let {service, price, date} = req.body

    //date = date.toLocaleString()

    if ( !service || !price || !date ) res.status(400).send('Falta enviar datos obligatorios');
    else if (typeof service !== 'string' || typeof price !== 'number') {
    res.status(400).send("Error, los tipos de datos son incorrectos")}

    try {
        let crearConsulta = await new appointmentModel({
            service: service,
            price: price,
            date: date
        });

        crearConsulta.save()
        .then( result => {
            console.log(result)
            // mongoose.connection.close() // es buena práctica cerrar las conexiones
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

const visualizarConsultas = async (req, res) => {
    try{
        const findConsulta = await appointmentModel.find({})
        .then( result => {
            res.json(result)
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