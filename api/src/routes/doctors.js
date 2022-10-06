const { Router } = require('express')
const {
    getAllDoctors,
    getDoctorDetail,
    registerDoctor,
    updateDoctor,
    deleteDoctor
} = require('../controllers/doctorController')

const router = Router();

router.get('/', getAllDoctors);

router.get('/:id', getDoctorDetail);

router.post('/register', registerDoctor);

router.put('/:id', updateDoctor);

router.delete('/:id', deleteDoctor);

module.exports = router