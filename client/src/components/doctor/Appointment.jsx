import React from 'react';
import style from './Appointment.module.css';


export default function Appointment(props) {
    return (
        <div className={style.appoCard}>
            <div className={style.appoData}>
                <div className={style.date}>
                    <h3>{`Date: ${props.start.split("T")[0]}`}</h3>
                </div>
                <div className={style.hour}>
                    <label><b>{`Hour: ${props.start.split("T")[1].slice(0,5)} - ${props.end.split("T")[1].slice(0,5)}`}</b></label>
                </div>
            </div>
            <div className={style.AppoText}>
                <p>{props.patient}
                <br/>{props.status}</p>
            </div>
        </div>
    )
}