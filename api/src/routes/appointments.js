const express = require('express');
const router = express.Router();

const { createAppointment, showAppointments, deleteAppointment, updateAppointment} = require('../controllers/appointmentsController');

router.get('/', showAppointments);
router.post('/', createAppointment);
router.delete('/:id', deleteAppointment);
router.put('/:id', updateAppointment);

module.exports = router;