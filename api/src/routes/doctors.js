const { Router } = require('express')
const {
    getAllDoctors,
    getDoctorDetail,
    registerDoctor,
    updateDoctor,
    updateDoctorAdmin,
    deleteDoctor
} = require('../controllers/doctorController')

const { verifyToken, checkRolesExisted,isDoctor,isAdmin,isPatient } = require('../middlewares/index')
const router = Router();

router.get('/', getAllDoctors);

router.get('/:id', getDoctorDetail);

router.post('/register', async (req, res) => {
    try {
        const doctorData = req.body

        if (doctorData) {
            const registerResponse = await registerDoctor(doctorData)
            if (registerResponse) {
                return res.status(200).json(registerResponse)
            }
        }

    } catch (e) {
        console.error(e);
        return res.status(400).send("Error occurred. The new user couldn't be created.")
    }
});

router.put('/:id',  updateDoctor);

router.put('/admin/:id', [verifyToken, isAdmin], updateDoctorAdmin);

router.delete('/:id', [verifyToken, isAdmin], deleteDoctor);

module.exports = router