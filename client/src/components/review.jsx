import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux' 

export default function Review() {
    const history = useNavigate()
    const dispatch = useDispatch()
    const [error, setError] = useState({})

    const [review, setReview] =useState({
        service: "",
        review: "",
        score: "",
        patient: "",
        doctor: ""
    })

    function validate(review) {
        let error = {}
        if(!review.service) {
            error.service = "Service is required"
        } else if ((!/^([a-zA-Z]+)(\s[a-zA-Z]+)*$/.test(review.service.trim()))) {
            error.service = "Input only accepts letters"
        }
        if(!review.review) {
            error.review = "Review is required"
        } else if ((!/^([a-zA-Z]+)(\s[a-zA-Z]+)*$/.test(review.review.trim()))) {
            error.service = "Input only accepts letters"
        }
        if(!review.score) {
            error.score = "Score is required"
        } else if (([1-5].test(review.score.trim()))) {
            error.service = "Input only accepts Value between 1 and 5"
        }
        if(!review.patient) {
            error.patient = "Patient is required"
        }
        if(!review.doctor) {
            error.doctor = "Doctor is required"
        }
    }

    function handleInputChangeReview(e) {
        setReview({
            ...review,
            [e.target.service]: e.target.value
        })

        setError(validate({
            ...review,
            [e.target.service]: e.target.value
        }))
    }

    function handleSubmitReview  (e) {
        e.preventDefault()
        const review = {
            service: review.service,
            review: review.review,
            score: review.score,
            patient: review.patient,
            doctor: review.doctor
        }
        dispatch()
        setReview({
            service: "",
            review: "",
            score: "",
            patient: "",
            doctor: ""
        })
        history.push('/appointment')
    }

    return (
        <div>
            <h1>Add Review:</h1>
            <form onSubmit={handleSubmitReview}>
                <div>
                    <label>Service:</label>
                    <input
                        type="text"
                        placeholder="Write your type of Service"
                        name="service"
                        value={review.service}
                        onChange={handleInputChangeReview}
                    />
                    {error.service && <p>{error.service}</p>}
                </div>
                <div>
                    <label>Review:</label>
                    <input
                        type="text"
                        placeholder="Write your review"
                        name="review"
                        value={review.review}
                        onChange={handleInputChangeReview}
                    />
                    {error.review && <p>{error.review}</p>}
                </div>
                <div>
                    <label>Score:</label>
                    <input
                        type="number"
                        name="score"
                        value={review.score}
                        onChange={handleInputChangeReview}
                    />
                    {error.score && <p>{error.score}</p>}
                </div>
                <div>
                    <label>Patient:</label>
                    <input
                        type="text"
                        placeholder='Write your Patient id'
                        name="patient"
                        value={review.patient}
                        onChange={handleInputChangeReview}
                    />
                    {error.patient && <p>{error.patient}</p>}
                </div>
                <div>
                    <label>Doctor:</label>
                    <input
                        type="text"
                        placeholder='Write your Doctor id'
                        name="doctor"
                        value={review.doctor}
                        onChange={handleInputChangeReview}
                    />
                    {error.doctor && <p>{error.doctor}</p>}
                </div>
            </form>
        </div>
    )
}