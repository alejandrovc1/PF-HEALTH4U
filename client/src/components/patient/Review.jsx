import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux' 
import { addReview } from '../../actions/index'

export default function Review(doctor) {
    const history = useNavigate()
    const dispatch = useDispatch()
    const [error, setError] = useState({})

    const [review, setReview] =useState({
        service: "",
        review: "",
        score: "",
        patient: sessionStorage.getItem("id") || "Patient Test",
        doctor: doctor
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
        const newReview = {
            service: review.service,
            review: review.review,
            score: review.score,
            patient: review.patient,
            doctor: review.doctor
        }
        dispatch(addReview(newReview))
        setReview({
            service: "",
            review: "",
            score: "",
            patient: "",
            doctor: ""
        })
        history.push(`/docDetail/${doctor}`)
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
                <button type='submit'>Add Review</button>
            </form>
        </div>
    )
}