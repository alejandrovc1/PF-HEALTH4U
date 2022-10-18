import React from 'react';
//import style from '';

export default function Review({ patient, review, date, score }) {
    return (
        <div>
            <div>
                <label>{patient}</label>
                <label>{`Score: ${score}`}</label>
            </div>
            <div>
                <p>{review}</p>
                <p>{date}</p>
            </div>
        </div>
    )
}