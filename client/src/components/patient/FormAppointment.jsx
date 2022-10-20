import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux' 
import { dispDateByDoctor, dispHourByDoctor, requestAppointment } from '../../actions/index'
import style from './FormAppointment.module.css'

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
        return error
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
        const newAppointment = {
            doctorId:props.doctorId,
            date: appointment.date,
            hour: appointment.hour,
            patient: appointment.patient,
            doctor: appointment.doctor
        }
        console.log("envio appointment: ", newAppointment)
        dispatch(requestAppointment(newAppointment))
        setAppointment({
            doctor:'',
            date: "",
            hour: "",
            patient: "",
            doctor: ""
        })
        window.location.reload(true)
    }

    return (
        <div className={style.formulary}>
            <h2>New Appointment</h2>
            <form onSubmit={handleSubmitAppointment}>
                <div className={style.selector}>
                    <label>Available Dates:</label>
                    <select
                        defaultValue="None"
                        onChange={handleDateChange}
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
                <div className={style.selector}>
                    <label>Available Hours:</label>
                    <select
                        defaultValue="None"
                        onChange={handleHourChange}
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
                <div className={style.btnholder}>
                    <button className={style.btn} type='submit'>Request Appointment</button>
                </div>
            </form>
        </div>
    )
}