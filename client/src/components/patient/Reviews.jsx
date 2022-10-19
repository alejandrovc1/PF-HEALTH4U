import React from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getReviewByDoctor } from "../../actions";
import Review from './Review';
import style from './Reviews.module.css'

export default function Reviews(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getReviewByDoctor(props.doctor))
    }, [dispatch])

    const allDoctorReviews = useSelector(state => state.reviews);

    return (
        <div className={style.container}>
            <h2 className={style.title}>Reviews:</h2>
            {allDoctorReviews.length > 0?
                allDoctorReviews.map(review => (
                    <Review key={review.id}
                        patient={review.patient}
                        score={review.score}
                        review={review.review}
                        date={review.date}
                    />
                ))
                : <p className={style.noRevs}>There's no Reviews for this Doctor</p>
            }
        </div>
    )
}