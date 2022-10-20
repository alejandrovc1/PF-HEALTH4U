const { Router } = require('express')
const {
    getAllPatients,
    getPatientByName,
    getPatientDetail,
    registerPatient,
    updatePatient,
    updatePatientAdmin,
    deletePatient,
    getmercadopago,
    subpatien,
    getSubscribed
} = require('../controllers/patientController')

const router = Router();
router.get('/getsub/:id', async (req, res) => {
    try {
        const {id}=req.params
        const respueta= await subpatien(id)
        res.send(respueta)
    } catch (error) {
        console.log(error)
        res.json(error)
    }
});

router.get('/subcription/:id', async (req, res) => {
    try {
        const {id}=req.params
        const respueta= await getmercadopago(id)
        res.send(respueta)
    } catch (error) {
        console.log(error)
        res.json(error)
    }

});



router.get('/subscribed', getSubscribed);

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
        return res.status(400).send("Error occured. Patient(s) couldn't be shown.")
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const response = await getPatientDetail(id)
        return res.status(200).send(response)

    } catch (e) {
        console.error(e);
        return res.status(400).send("Error occured. Patient couldn't be shown.")
    }
});

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
        return res.status(400).send("Error occurred. The new user couldn't be created.")
    }
});

router.put('/:id', updatePatient);


router.put('/admin/:id', updatePatientAdmin);

router.delete('/:id', deletePatient);


module.exports = router