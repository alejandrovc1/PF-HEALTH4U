const express = require('express');
const router = express.Router();

const { generarConsulta, visualizarConsultas, eliminarConsulta, actualizarConsulta} = require('../controllers/appointmentsController');

router.get('/', visualizarConsultas);
router.post('/', generarConsulta);

module.exports = router;