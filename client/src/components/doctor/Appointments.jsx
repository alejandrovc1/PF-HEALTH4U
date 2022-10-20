import React from "react";
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAppointmentsByDoctor } from "../../actions";
import Appointment from './Appointment';
import FormDisponibility from './FormDisponibility'
import style from './Appointments.module.css';

export default function Reviews() {
    const dispatch = useDispatch();
    const [addDisponibility, setDisponibility] = useState(false)

    useEffect(() => {
        dispatch(getAppointmentsByDoctor(localStorage.getItem("id")))
    }, [dispatch])

    const allDoctorAppointment = useSelector(state => state.appointments);

    function handleNewDisponibility() {
        setDisponibility(true)
    }

    return (
        <div className={style.container}>
            <h2 className={style.title}>Appointments:</h2>
            <button onClick={handleNewDisponibility}>New available date</button>
            {allDoctorAppointment.length > 0?
                allDoctorAppointment.map(appo => (
                    <Appointment
                        start={appo.start}
                        end={appo.end}
                        patient={appo.patient}
                    />
                ))
                : <p className={style.noRevs}>There's no Appointments right now</p>
            }
            {addDisponibility?
                <FormDisponibility/>
                : null
            }
        </div>
    )
}