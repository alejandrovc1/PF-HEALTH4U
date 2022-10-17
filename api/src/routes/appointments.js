const express = require('express');
const router = express.Router();
//const { isPatient, verifySignUp } = require('../middlewares/index')

const { 
    createAppointments, 
    getAppointments, 
    getAppointmentByDoctor,
    getAppointmentByPatient,
    updateAppointment, 
    cancelAppointment 
} = require('../controllers/appointmentsController');

router.get('/', async (req, res, next) => {
    try{
        const { doctor } = req.query
        const { patient } = req.query
        if(doctor) {
            const response = await getAppointmentByDoctor(doctor)
            return res.status(200).send(response)
        } else if(patient) {
            const response = await getAppointmentByPatient(patient)
            return res.status(200).send(response)
        } else {
            const response = await getAppointments()
            return res.status(200).send(response)
        }


    } catch (e) {
        console.error(e);
        return res.status(400).send("An Error Ocurred. There's no Appointments")
        next(e)
    }
});
router.post('/create', createAppointments);
router.put('/update', updateAppointment);
router.put('/cancel', cancelAppointment);

module.exports = router;