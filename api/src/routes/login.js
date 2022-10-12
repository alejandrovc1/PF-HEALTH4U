const express = require('express');
const router = express.Router();

const { loginFunction } = require('../controllers/login');

router.post('/', async (req, res) => {
    try {
        const login = await loginFunction(req, res)
        return login;
    } catch (e) {
        console.error(e);
    }
});

module.exports = router
