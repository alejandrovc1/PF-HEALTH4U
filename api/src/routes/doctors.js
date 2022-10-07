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

router.post('/register', async (req, res) => {
    try {  
        const doctorData = req.body

        if(doctorData) {
            const registerResponse = await registerDoctor(doctorData)
            if(registerResponse) {
                return res.status(200).json(registerResponse)
            }
        }

    } catch (e) {
        console.error(e);
        return res.status(400).send("Error occurred. The new user couldn't be created.")
    }
})

router.put('/:id', updateDoctor);

router.delete('/:id', deleteDoctor);

module.exports = router