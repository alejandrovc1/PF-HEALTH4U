const { Router } = require('express');
const consultas = require ("./consultas")

const router = Router();

router.use('/consultas', consultas);

router.get("*", (req, res) => {
    res.status(400).send('What are you looking for?')
})

module.exports = router;