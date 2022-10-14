const express = require('express');
const router = express.Router();

const { checkRole } = require('../controllers/checkRole');

router.get('/', async (req, res) => {
    try {
        const role = await checkRole(req, res)
        return role;
    } catch (e) {
        console.error(e);
    }
});

module.exports = router
