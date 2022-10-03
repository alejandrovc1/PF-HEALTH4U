const { Router } = require('express')
const {
    getAllDoctors,
    getDoctorDetail,
    registerDoctor,
    loginDoctor,
} = require('../controllers/doctorController')

const router = Router();

router.get('/', async (req, res) => {
    try {
        const response = await getAllDoctors()
        return res.status(200).send(response)

    } catch (e) {
        console.error(e);
        return res.status(400).send("Error occured. Doctors can't be showed.")
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const response = await getDoctorDetail(id)
        return res.status(200).send(response)

    } catch (e) {
        console.error(e);
        return res.status(400).send("Error occured. Doctor can't be showed.")
    }
})

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
        return res.status(400).send("Error occured. New User can't be created.")
    }
})

// router.post('/login', async (req, res) => {
//     try {
//         const loginData = req.body
//         if(loginData) {
//             const loginResponse = await loginDoctor(loginData)
//             if(loginResponse) {
//                 return res.status(200).json(loginResponse)
//             }
//         }

//     } catch (e) {
//         console.error(e);
//         return res.status(400).send("Error occured. Can't access to your session.")
//     }
// })

module.exports = router