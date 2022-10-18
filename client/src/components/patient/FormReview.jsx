import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux' 
import { addReview } from '../../actions/index'

export default function FormReview({doctor, service}) {
    const history = useNavigate()
    const dispatch = useDispatch()
    const [error, setError] = useState({})

    const [reviewed, setReview] =useState({
        service: service,
        review: "",
        score: 0,
        patient: sessionStorage.getItem("id") || "Patient Test",
        doctor: doctor
    })

    function validate(review) {
        let error = {}
        if(!review.review) {
            error.review = "Review is required"
        } 
        if ((!/^([a-zA-Z]+)(\s[a-zA-Z]+)*$/.test(review.review.trim()))) {
            error.review = "Input only accepts letters"
        }
        if(!review.score) {
            error.score = "Score is required"
        }
         if (review.score<1) {
            error.score = "Input only accepts Value between 1 and 5"
        }
        if(review.score>5) {
           error.score = "Input only accepts Value between 1 and 5"
       }
        return error
    }

    const  handleInputChangeReview=(e)=> {
        console.log('Cambio en input',error)
        setReview({
            ...reviewed,
            [e.target.name]: e.target.value
        })

        setError(validate({
            ...reviewed,
            [e.target.name]: e.target.value
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
                        onChange={handleInputChangeReview}
                    />
                    {error.review && <p>{error.review}</p>}
                </div>
                <div>
                    <label>Score:</label>
                    <input
                        type="number"
                        name="score"
                        onChange={handleInputChangeReview}
                    />
                    {error.score && <p>{error.score}</p>}
                </div>
                <button type='submit'>Add Review</button>
            </form>
        </div>
    )
}