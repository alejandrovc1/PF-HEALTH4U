const { Router } = require('express')
//const multer = require("multer");
const { getAllSpecialties, addSpecialtie } = require('../controllers/specialtieController.js')

// const upload = multer({
//     dest: ''
// })

const router = Router();

router.get('/', async (req, res) => {
    try {
        const response = await getAllSpecialties()
        return res.status(200).send(response)

    } catch (e) {
        console.error(e);
        return res.status(400).send("An error occurred. Specialties couldn't be shown.")
    }
})

router.post('/add', async (req, res) => {
    try {
        const specialtieData = req.body
        if(specialtieData) {
            const response = await addSpecialtie(specialtieData)
            return res.status(201).json(response)
        }

    } catch (e) {
        console.error(e);
        return res.status(400).send("An error occurred. Specialtie couldn't be added.")
    }
})

module.exports = router