const { Router } = require('express')
const {
    getAllMedicos,
    getMedicoDetail,
    registerMedico,
    loginMedico,
} = require('../controllers/')

const router = Router();

router.get('/', async (req, res) => {
    try {
        const response = await getAllMedicos()
        return res.status(200).send(response)

    } catch (e) {
        console.error(e);
        return res.status(400).send("Ocurrió un error. No se pueden mostrar los Médicos.")
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const response = await getMedicoDetail(id)
        return res.status(200).send(response)

    } catch (e) {
        console.error(e);
        return res.status(400).send("Ocurrió un error. No se pueden mostrar al Médico.")
    }
})

router.post('/register', async (req, res) => {
    try {  
        const medicoData = req.body
        if(medicoData) {
            const registerResponse = await registerMedico(medicoData)
            if(registerResponse) {
                return res.status(200).json(registerResponse)
            }
        }

    } catch (e) {
        console.error(e);
        return res.status(400).send("Ocurrió un error. No se puede registrar al nueo usuario.")
    }
})

router.post('/login', async (req, res) => {
    try {
        const loginData = req.body
        if(loginData) {
            const loginResponse = await loginMedico(loginData)
            if(loginResponse) {
                return res.status(200).json(loginResponse)
            }
        }

    } catch (e) {
        console.error(e);
        return res.status(400).send("Ocurrió un error. No se puede iniciar la sesión ahora.")
    }
})

module.exports = router