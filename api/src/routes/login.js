const express = require('express');
const router = express.Router();

const { loginFunction, compareToken } = require('../controllers/login');

router.post('/', async (req, res) => {
    try {
        const login = await loginFunction(req, res)
        return login;
    } catch (e) {
        console.error(e);
    }
});

router.put('/', compareToken)

module.exports = router
