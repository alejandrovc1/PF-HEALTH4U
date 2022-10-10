const express = require('express');
const router = express.Router();

const { loginFunction } = require('../controllers/login');

router.post('/', async (req, res) => {
    try {
        await loginFunction(req, res)
    } catch (e) {
        console.error(e);
    }
});

module.exports = router
