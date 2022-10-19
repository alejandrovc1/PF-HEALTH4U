import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux' 
import { addDisponibility } from '../../actions/index'

export default function FormDisponibility() {
    const dispatch = useDispatch()
    const [error, setError] = useState({})

    const [disponibility, setDisponibility] = useState({
        doctor: sessionStorage.getItem("id"),
        date: "",
        hour: "",
    })

    function validate(disponibility) {
        let error = {}
        if(!disponibility.date) {
            error.date = "Date is required"
        }
        if(!disponibility.hour) {
            error.hour = "Hour is required"
        }
        return error
    }

    function handleInputChange(e) {
        setDisponibility({
            ...appointment,
            [e.target.date]: e.target.value
        })

        setError(validate({
            ...appointment,
            [e.target.hour]: e.target.value
        }))
    }

    function handleSubmitAppointment(e) {
        e.preventDefault()
        console.log("envio appointment")
        const newDisponibility = {
            doctor: disponibility.doctor,
            date: disponibility.date,
            hour: disponibility.hour,
        }
        dispatch(addDisponibility(newDisponibility))
        setAppointment({
            doctor: "",
            date: "",
            hour: "",
        })
        history.push(`/`)
    }

    return (
        <div>
            <h1>New Disponibility</h1>
            <form onSubmit={handleSubmitAppointment}>
                <div>
                    <label>Date:</label>
                    <input
                        type="date"
                        name="date"
                        value={disponibility.date}
                        onChange={handleInputChange}
                    />
                    {error.date && <p>{error.date}</p>}
                </div>
                <div>
                    <label>Hour:</label>
                    <select
                        defaultValue="None"
                        onChange={handleInputChange}
                    >
                        <option value="None">Select an Hour</option>
                        <option value="All Day">All Day</option>
                        <option value="09:00 - 10:00">09:00 - 10:00</option>
                        <option value="10:00 - 11:00">10:00 - 11:00</option>
                        <option value="11:00 - 12:00">11:00 - 12:00</option>
                        <option value="12:00 - 13:00">12:00 - 13:00</option>
                        <option value="13:00 - 14:00">13:00 - 14:00</option>
                        <option value="14:00 - 15:00">14:00 - 15:00</option>
                        <option value="15:00 - 16:00">15:00 - 16:00</option>
                        <option value="16:00 - 17:00">16:00 - 17:00</option>
                    </select>
                    {error.hour && <p>{error.hour}</p>}
                </div>
                <div>
                    <button type='submit'>Add Disponibility</button>
                </div>
            </form>
        </div>
    )
}