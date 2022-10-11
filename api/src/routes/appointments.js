const express = require('express');
const router = express.Router();
const { isPatient, verifySignUp } = require('../middlewares/index')

const { createAppointment, showAppointments, deleteAppointment, updateAppointment} = require('../controllers/appointmentsController');

router.get('/', [isPatient,],showAppointments);
router.post('/', createAppointment);
router.delete('/:id', deleteAppointment);
router.put('/:id', updateAppointment);

module.exports = router;