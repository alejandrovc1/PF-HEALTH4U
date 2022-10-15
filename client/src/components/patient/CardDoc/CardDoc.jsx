import React from 'react';
import { Link } from 'react-router-dom';
import style from './CardDoc.module.css';
import star from "../../../image/starRating.png";

export default function Card({ image, name, rating, specialtie, id }) {
    return (
        <Link to={`/docDetail/${id}`} className={style.link}>
            <div className={style.carta}>
                <div className={style.datos}>
                    <img className={style.image} src={image} alt="" />

                    <div className={style.text}>
                        <h3 className={style.name} >{name}</h3>
                        <h3 className={style.specialtie} >{specialtie}</h3>
                    </div>
                </div>

                <div className={style.ratButton}>
                    <div className={style.ratStar}>
                        <h3 className={style.rating} >{rating}/5 </h3>
                        <img className={style.star} src={star} alt="" />
                    </div>
                    <div>
                        <button className={style.Schedule}>Schedule</button>
                    </div>
                </div>
            </div>
        </Link>
    )

}