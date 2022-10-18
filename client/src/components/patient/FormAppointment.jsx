import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux' 
import { dispDateByDoctor, dispHourByDoctor, requestAppointment } from '../../actions/index'

export default function FormAppointment(props) {
    const history = useNavigate()
    const dispatch = useDispatch()
    const [error, setError] = useState({})

    useEffect(() => {
        dispatch(dispDateByDoctor(props.doctorId))
        dispatch(dispHourByDoctor(props.doctorId))
    }, [dispatch]);

    const Dates = useSelector((state) => state.dates)
    const Hours = useSelector((state) => state.hours)

    const [appointment, setAppointment] = useState({
        doctor: props.doctorId,
        date: "",
        hour: "",
        patient: localStorage.getItem("id") || "Patient Test"
    })

    function validate(appointment) {
        let error = {}
        if(!appointment.date) {
            error.date = "Date is required"
        }
        if(!appointment.hour) {
            error.hour = "Hour is required"
        }
    }

    function handleDateChange(e) {
        setAppointment({
            ...appointment,
            date: e.target.value
        })
        setError(validate({
            ...appointment,
            date: e.target.value
        }))
        console.log(appointment)
    }

    function handleHourChange(e) {
        setAppointment({
            ...appointment,
            hour: e.target.value
        })

        setError(validate({
            ...appointment,
            hour: e.target.value
        }))
    }

    function handleSubmitAppointment(e) {
        e.preventDefault()
        console.log("envio appointment")
        const newAppointment = {
            date: appointment.date,
            hour: appointment.hour,
            patient: appointment.patient
        }
        dispatch(requestAppointment(newAppointment))
        setAppointment({
            date: "",
            hour: "",
            patient: ""
        })
        history.push(`/docDetail/${props.doctorId}`)
    }

    return (
        <div>
            <h2>New Appointment</h2>
            <form onSubmit={e => {handleSubmitAppointment(e)}}>
                <div>
                    <label>Available Dates:</label>
                    <select
                        defaultValue="None"
                        onChange={(e) => {handleDateChange(e)}}
                    >
                        <option value="None">
                            Select a date
                        </option>
                        {Dates?
                            Dates.map((d, index) => (
                                <option value={d.date} key={index}>
                                    {d.date}
                                </option>
                            ))
                            : null
                        }
                    </select>
                    {error.date && <p>{error.date}</p>}
                </div>
                <div>
                    <label>Available Hours:</label>
                    <select
                        defaultValue="None"
                        onChange={(e) => {handleHourChange(e)}}
                    >
                        <option value="None">
                            Select an Hour
                        </option>
                        {
                            Hours.map((d, index) => (
                                <option value={d.hour} key={index}>
                                    {d.hour}
                                </option>
                            ))
                        }
                    </select>
                    {error.hour && <p>{error.hour}</p>}
                </div>
                <div>
                    <button type='submit'>Request Appointment</button>
                </div>
            </form>
        </div>
    )
}