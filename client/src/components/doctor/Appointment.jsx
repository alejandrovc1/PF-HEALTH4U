import React from 'react';
import style from './Appointment.module.css';

export default function Review(props) {
    return (
        <div className={style.revCard}>
            <div className={style.revData}>
                <div className={style.name}>
                    <h3>{`Date: ${props.start.split("T")[0]}`}</h3>
                </div>
                <div className={style.score}>
                    <label><b>{`Hour: ${props.start.split("T")[1].slice(0,5)} - ${props.end.split("T")[1].slice(0,5)}`}</b></label>
                </div>
            </div>
            <div className={style.revText}>
                <p>{props.patient}</p>
            </div>
        </div>
    )
}