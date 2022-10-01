const { Router } = require('express')
const {
    getAllPatients,
    getPatientByName,
    getPatientDetail,
    registerPatient,
    loginPatient,
} = require('../controllers/patientController')

const router = Router();

router.get('/', async (req, res) => {
    try {
        const { name } = req.query
        if(!name) {
            const response = await getAllPatients()
            return res.status(200).send(response)
        } else {
            const response = await getPatientByName(name)
            return res.status(200).send(response)
        }

    } catch (e) {
        console.error(e);
        return res.status(400).send("Error occured. Patient(s) can't be showed.")
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const response = await getPatientDetail(id)
        return res.status(200).send(response)

    } catch (e) {
        console.error(e);
        return res.status(400).send("Error occured. Patient can't be showed.")
    }
})

router.post('/register', async (req, res) => {
    try {  
        const patientData = req.body

        if(patientData) {
            const registerResponse = await registerPatient(patientData)
            if(registerResponse) {
                return res.status(200).json(registerResponse)
            }
        }

    } catch (e) {
        console.error(e);
        return res.status(400).send("Error occured. New User can't be created.")
    }
})

router.post('/login', async (req, res) => {
    try {
        const loginData = req.body
        if(loginData) {
            const loginResponse = await loginPatient(loginData)
            if(loginResponse) {
                return res.status(200).json(loginResponse)
            }
        }

    } catch (e) {
        console.error(e);
        return res.status(400).send("Error occured. Can't access to your session.")
    }
})

module.exports = router