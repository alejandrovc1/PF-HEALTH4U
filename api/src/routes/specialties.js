const { Router } = require('express')
const {
    getAllSpecialties,
    addSpecialtie,
} = require('../controllers/specialtieController')

const router = Router();

router.get('/', async (req, res) => {
    try {
        const response = await getAllSpecialties()
        return res.status(200).send(response)

    } catch (e) {
        console.error(e);
        return res.status(400).send("An error occured. Specialties can't be showed.")
    }
})

router.post('/add', async (req, res) => {
    try {
        const specialtieData = req.body
        if(specialtieData) {
            const response = await addSpecialtie(specialtieData)
            return res.status(400).json(response)
        }

    } catch (e) {
        console.error(e);
        return res.status(400).send("An error occured. Specialtie can't be added.")
    }
})

module.exports = router