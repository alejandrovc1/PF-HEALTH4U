const express = require('express');
const router = express.Router();
const {messagesModel} = require('../models/models.js')

router.get('/', async (req, res, next) => {
    try{
        const response = await messagesModel.find({})
        const Messages = response?.map( m => {
            const mess = {
                id: m._id,
                name: m.name,
                email: m.email,
                message: m.message
            }
            return mess;
        })
        if(Messages.length > 0){
            res.status(200).send(Messages)
        }
        return { msg: "There're no messages yet"}

    } catch (error){
        next(error)
    }
});

router.post('/send', async (req, res) => {
    try{
        const {name, email, message} = req.body

        if(message){

            await messagesModel.create({name, email, message})
            res.status(201).send('Mensaje guardado en la db')

        } else res.status(406).send('No hay mensaje para guardar')

    } catch (error) {
        console.log('Error al enviar el mensaje');
        next(error)
    }
});

module.exports = router;