const express = require('express');
const router = express.Router();

const { loginFunction } = require('../controllers/login');

router.post('/', async (req, res) => {
    try {
        const loginData = req.body;
        const response = await loginFunction(loginData)
        return res.status(200).send(response)
    } catch (e) {
        console.error(e);
        return res.status(400).send("Error occured. Doctors can't be showed.")
    }});

module.exports = router
