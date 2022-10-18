const express = require('express');
const router = express.Router();
const {adminModel} = require('../models/models.js')

router.get('/', async (req, res, next) => {
    try{
        const response = await adminModel.find({})
        const admins = response?.map( A => {
            const Adm = {
                id: A._id,
                name: A.name,
                email: A.email,
            }
            return Adm;
        })
        if(admins.length > 0){
            res.status(200).send(admins)
        }
        return { msg: "There aren't admins registered"}

    } catch (error){
        next(error)
    }
});

module.exports = router;