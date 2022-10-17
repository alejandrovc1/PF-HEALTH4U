import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux' 
import { addReview } from '../../actions/index'

export default function FormReview(doctor, service) {
    const history = useNavigate()
    const dispatch = useDispatch()
    const [error, setError] = useState({})

    const [reviewed, setReview] =useState({
        service: service,
        review: "",
        score: "",
        patient: sessionStorage.getItem("id") || "Patient Test",
        doctor: doctor
    })

    function validate(review) {
        let error = {}
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
        console.log('Cambio en input')
        setReview({
            ...reviewed,
            [e.target.service]: e.target.value
        })

        setError(validate({
            ...reviewed,
            [e.target.service]: e.target.value
        }))
    }

    function handleSubmitReview  (e) {
        e.preventDefault()
        console.log('Envio review')
        const newReview = {
            service: reviewed.service,
            review: reviewed.review,
            score: reviewed.score,
            patient: reviewed.patient,
            doctor: reviewed.doctor
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
                    <label>Review:</label>
                    <input
                        type="text"
                        placeholder="Write your review"
                        name="review"
                        value={reviewed.review}
                        onChange={handleInputChangeReview}
                    />
                    {error.review && <p>{error.review}</p>}
                </div>
                <div>
                    <label>Score:</label>
                    <input
                        type="number"
                        name="score"
                        value={reviewed.score}
                        onChange={handleInputChangeReview}
                    />
                    {error.score && <p>{error.score}</p>}
                </div>
                <button type='submit'>Add Review</button>
            </form>
        </div>
    )
}