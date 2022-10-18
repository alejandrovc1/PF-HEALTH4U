const { reviewModel, doctorModel, patientModel } = require('../models/models');

const getAllReviews = async () => {
    try {
        const response = await reviewModel.find({})
        const reviews = response?.map(r => {
            const re = {
                id: r._id,
                service: r.service,
                score: r.score,
                patient: r.patient,
                doctor: r.doctor
            }
            return re
        })
        if(reviews.length > 0) {
            return reviews
        } else {
            return { msg: "There's no Reviews in the DB"}
        }

    } catch (e) {
        console.error(e);
        throw new Error("Error. Reviews can't be showed")
    }
}

const getReviewByDoctor = async (doctor) => {
    try {
        console.log(doctor)
        const response = await reviewModel.find({ 
            doctor: doctor, 
        }).populate({ path: 'patient' })
        const reviews = response?.map(r => {
            const re = {
                id: r._id,
                service: r.service,
                score: r.score,
                review: r.review,
                patient: r.patient.name,
                doctor: r.doctor
            }
            return re
        })
        if(reviews.length > 0) {
            return reviews
        } else {
            return { msg: "There's no Reviews in the DB with that doctor id"}
        }

    } catch (e) {
        console.error(e);
        throw new Error("Error. Reviews can't be showed")
    }
}

const getReviewByPatient = async (patient) => {
    try {
        const response = await reviewModel.find({ 
            patient: patient, 
        })
        const reviews = response?.map(r => {
            const re = {
                id: r._id,
                service: r.service,
                score: r.score,
                patient: r.patient,
                doctor: r.doctor
            }
            return re
        })
        if(reviews.length > 0) {
            return reviews
        } else {
            return { msg: "There's no Reviews in the DB with that patient id"}
        }

    } catch (e) {
        console.error(e);
        throw new Error("Error. Reviews can't be showed")
    }
}

const getReviewDetail = async (id) => {
    try {
        const response = await reviewModel.findById(id)
        const review = {
            id: response._id,
            service: response.service,
            date: response.date,
            review: response.review,
            score: response.score,
            patient: response.patient,
            doctor: response.doctor
        }
        if(review) {
            return review
        } else return { msg: "There's no review with that id"}

    } catch (e) {
        console.error(e);
        throw new Error("Error. Review can't be showed")
    }
}


const createReview = async (reviewData) => {
    try {
        const { service, review, score, patient, doctor } = reviewData
        const newReview = await reviewModel.create({
            service,
            date: new Date(),
            review, 
            score,
            patient,
            doctor
        })
        const doctorReviews = await reviewModel.find({
            doctor: doctor
        })
        const scores = doctorReviews?.map(dr => dr.score)
        const total = scores.reduce((acc, val) => {
            return acc = acc + val
        })
        const rating = total/scores.length
        const putRating = await doctorModel.findByIdAndUpdate(doctor, {
            rating: rating
        }, { new : true})
        console.log(putRating)
        console.log("total: ", total, ", rating: ", rating)

        if(newReview) {
            return newReview
        } else return { msg: "The new review can't be created"}

    } catch (e) {
        console.error(e);
        throw new Error("Error. Review can't be created")
    }
}


module.exports = {
    getAllReviews,
    getReviewByDoctor,
    getReviewByPatient,
    getReviewDetail,
    createReview,
}