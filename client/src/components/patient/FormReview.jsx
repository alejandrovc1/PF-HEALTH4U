import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux' 
import { addReview } from '../../actions/index'
import style from './FormReview.module.css'

export default function FormReview(props) {
    const history = useNavigate()
    const dispatch = useDispatch()
    const [error, setError] = useState({})

    const [input, setInput] =React.useState({
        service: props.service,
        review: "",
        score: "",
        patient: localStorage.getItem("id") || "Patient Test",
        doctor: props.doctor
    })

    function validate(input) {
        let error = {}
        if(!input.review) {
            error.review = "Review is required"
        } else if ((!/^([a-zA-Z]+)(\s[a-zA-Z]+)*$/.test(input.review.trim()))) {
            error.review = "Input only accepts letters"
        }
        if(!input.score) {
            error.score = "Score is required"
        } else if ((!/[1-5]/.test(input.score.trim()))) {
            error.score = "Input only accepts Value between 1 and 5"
        }
        return error
    }

    function handleInputChange(e) {
        setInput((input) => ({
            ...input,
            [e.target.name]: e.target.value
        }));
        setError(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmitReview  (e) {
        e.preventDefault()
        console.log('Envio review')
        const newReview = {
            service: input.service,
            review: input.review,
            score: input.score,
            patient: input.patient,
            doctor: input.doctor
        }
        dispatch(addReview(newReview))
        setInput({
            service: "",
            review: "",
            score: "",
            patient: "",
            doctor: ""
        })
        window.location.reload(true)
    }

    return (
        <div className={style.formulary}>
            <h2>Add Review:</h2>
            <form onSubmit={handleSubmitReview}>
                <div className={style.inputData}>
                    <label>
                        Review:
                        <textarea type="text" name='review' onChange={handleInputChange} rows="5" placeholder="Write your review"/>
                    </label>
                    {error.review? <p>{error.review}</p>: null}
                </div>
                <div className={style.inputData}>
                    <label>Score:</label>
                    <input type="number" name='score' onChange={handleInputChange} placeholder="Write the score"/>
                    {error.score? <p>{error.score}</p> : null}
                </div>
                <div className={style.btnholder}>
                    <button className={style.btn} type='submit'>Add Review</button>
                </div>
            </form>
        </div>
    )
}