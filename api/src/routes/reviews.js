const { Router } = require('express')
const {
    getAllReviews,
    getReviewByDoctor,
    getReviewByPatient,
    getReviewDetail,
    createReview,
} = require('../controllers/reviewsController')

const router = Router();

router.get('/', async (req, res) => {
    try {
        const { doctor } = req.query
        const { patient } = req.query
        if(doctor) {
            const response = await getReviewByDoctor(doctor)
            if(response.length > 0) {
                return res.status(200).send(response)
            }
        } else if(patient){
            const response = await getReviewByPatient(patient)
            if(response.length > 0) {
                return res.status(200).send(response)
            }
        } else {
            const response = await getAllReviews()
            return res.status(200).send(response)
        }

    } catch (e) {
        console.error(e);
        return res.status(400).send("Error Occured. Reviews can't be showed.")
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const response = await getReviewDetail(id)
        return res.status(200).send(response)

    } catch (e) {
        console.error(e) 
        return res.status(400).send("Error Occured. Review can't be showed.");
    }
})

router.post('/create', async (req, res) => {
    try {
        const reviewData = req.body
        if(reviewData) {
            const response = await createReview(reviewData)
            if(!response.msg) {
                return res.status(200).send(response)
            } else return res.status(400).send(response)
        }
    } catch (e) {
        console.error(e);
        return res.status(400).send("Error Ocurred. Review can't be created.")
    }
})

module.exports = router