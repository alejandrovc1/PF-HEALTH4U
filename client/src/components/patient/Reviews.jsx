import React from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getReviewByDoctor } from "../../actions";
import Review from './Review';

export default function Reviews(doctor) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getReviewByDoctor(doctor))
    }, [dispatch])

    const allDoctorReviews = useSelector(state => state.reviews);
    console.log(allDoctorReviews)

    return (
        <div>
            <label>Reviews:</label>
            {allDoctorReviews.length > 0?
                allDoctorReviews.map(review => (
                    <Review
                        patient={review.patient}
                        score={review.score}
                        review={review.review}
                        date={review.date}
                    />
                ))
                : <p>There's no Reiews for this Doctor</p>
            }
        </div>
    )
}