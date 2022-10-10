const express = require('express');
const router = express.Router();
const { authJwt, verifySignUp } = require('../middlewares/index')

const { createAppointment, showAppointments, deleteAppointment, updateAppointment} = require('../controllers/appointmentsController');

router.get('/', [authJwt.isPatient,],showAppointments);
router.post('/', createAppointment);
router.delete('/:id', deleteAppointment);
router.put('/:id', updateAppointment);

module.exports = router;