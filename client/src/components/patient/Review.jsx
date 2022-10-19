import React from 'react';
import style from './Review.module.css';

export default function Review(props) {
    return (
        <div className={style.revCard}>
            <div className={style.revData}>
                <div className={style.name}>
                    <label>{props.patient}</label>
                </div>
                <div className={style.score}>
                    <label><b>{`Score: ${props.score}`}</b></label>
                </div>
            </div>
            <div className={style.revText}>
                <p><b>"</b>{props.review}<b>"</b>
                <br/>
                <b>{`${props.date.split("T")[1].slice(0,5)} - ${props.date.split("T")[0]}`}</b></p>
            </div>
        </div>
    )
}