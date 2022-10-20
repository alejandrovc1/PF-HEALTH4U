import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux' 
import { addDisponibility } from '../../actions/index'
import style from './FormDisponibility.module.css'

export default function FormDisponibility() {
    const dispatch = useDispatch()
    const [error, setError] = useState({})
    const history = useNavigate()

    const [disponibility, setDisponibility] = useState({
        doctor: localStorage.getItem("id"),
        date: [],
        hour: [],
    })

    function validate(disponibility) {
        let error = {}
        if(!disponibility.date.length) {
            error.date = "Date is required"
        }
        if(!disponibility.hour) {
            error.hour = "Hour is required"
        }
        return error
    }

    function handleInputDate(e) {
        if(!disponibility.date.includes(e.target.value) && e.target.value !== "") {
            setDisponibility({
                ...disponibility,
                date: [
                    ...disponibility.date, 
                    e.target.value
                ]
            })
            setError(validate({
                ...disponibility,
                date: [
                    ...disponibility.date, 
                    e.target.value
                ]
            }))
            console.log(disponibility)
        } else return disponibility
    }

    function handleInputHour(e) {
        if(!disponibility.hour.includes(e.target.value) && e.target.value !== "" && e.target.value !== "None") {
            setDisponibility({
                ...disponibility,
                hour: [
                    ...disponibility.hour,
                    e.target.value
                ]
            })
            setError(validate({
                ...disponibility,
                hour: [
                    ...disponibility.hour,
                    e.target.value
                ]
            }))
            e.target.value = 'None'
            console.log(disponibility)
        } else return disponibility
    }

    function handleDeleteDate(date) {
        setDisponibility({
            ...disponibility,
            date: disponibility.date.filter(d => d !== date),
        });
        console.log(disponibility)
    };

    function handleDeleteHour(hour) {
        setDisponibility({
            ...disponibility,
            hour: disponibility.hour.filter(h => h !== hour),
        });
        console.log(disponibility)
    }

    function handleSubmitAppointment(e) {
        e.preventDefault()
        console.log("envio appointment")
        const newDisponibility = {
            doctor: disponibility.doctor,
            date: disponibility.date,
            hour: disponibility.hour,
        }
        console.log("dispatch: ", newDisponibility)
        dispatch(addDisponibility(newDisponibility))
        setDisponibility({
            doctor: "",
            date: "",
            hour: "",
        })
        history(`/`)
    }

    return (
        <div className={style.formulary}>
            <h1>New Disponibility</h1>
            <form onSubmit={handleSubmitAppointment}>
                <div className={style.selector}>
                    { disponibility.date?
                        disponibility.date.map(d => {
                            return (
                                <div className={style.item}>
                                    <p>{d}</p>
                                    <button onClick={() => {handleDeleteDate(d)}}>x</button>
                                </div>
                            )
                        }) : null
                    }
                    <label>Available dates:</label>

                    <input
                        type="date"
                        name="date"
                        value={disponibility.date}
                        onChange={handleInputDate}
                    />
                    {error.date && <p>{error.date}</p>}
                </div>
                <div className={style.selector}>
                    { disponibility.hour?
                        disponibility.hour.map(h => {
                            return (
                                <div className={style.item}>
                                    <p>{h}</p>
                                    <button onClick={() => {handleDeleteHour(h)}}>x</button>
                                </div>
                            )
                        }) : null
                    }
                    <label>Available hours:</label>
                    <select
                        defaultValue="None"
                        onChange={handleInputHour}
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
                <div className={style.btnholder}>
                    <button className={style.btn} type='submit'>Add Disponibility</button>
                </div>
            </form>
        </div>
    )
}