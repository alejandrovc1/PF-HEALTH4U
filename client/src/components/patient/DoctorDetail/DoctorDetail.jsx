import React, { Fragment, useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import style from './DoctorDetail.module.css'
import { getDetails, cleandetail, resetReviews } from '../../../actions/index';
import { Loading } from '../../Loading/index';
import FormReview from '../../patient/FormReview'
import Reviews from '../Reviews'
import FormAppointment from '../FormAppointment';


export default function DoctorDetail(props) {

    const dispatch = useDispatch();
    const detail = useSelector(state => state.doctorDetail);
    let cargado = useSelector(state => state.cargadoDetail);
    const { id } = useParams();
    const [addRev, setAddRev] = useState(false)
    const [RequestAppo, setRequestAppo] = useState(false)

    useEffect(() => {
        dispatch(getDetails(id));
        dispatch(resetReviews())
        return (() => { dispatch(cleandetail()) })
    }, [id]);

    function handleNewReview() {
        setAddRev(true)
    }

    function handleNewAppointment() {
        setRequestAppo(true)
    }

    return (
        <div className={style.container}>
            {cargado ?
                <Fragment>
                    <div className={style.all}>
                        <div>
                            <img className={style.image} src={detail.image} alt="" />
                        </div>

                        <div className={style.details}>
                            <div className={style.text}>
                                <h1 className={style.name}>{detail.name}</h1>
                                <h3 className={style.specialtie}>{detail.specialtie}</h3>
                                {/* <div><p>Description: {detail.description} </p></div> */}
                                <div><p><b>Method:</b> {detail.method} </p></div>
                                <div><p><b>Rating:</b> {detail.rating} </p></div>
                            </div>
                            <button className={style.btn} onClick={handleNewAppointment}>Request Appointment </button>
                            <button className={style.btn} onClick={handleNewReview}>Add Review </button>
                        </div>
                        <Reviews doctor={id}/>
                    </div>
                    <div>
                        {RequestAppo?
                            <FormAppointment doctorId={id}/>
                            : null
                        }
                        {addRev?
                            <FormReview doctor={id} service={`${detail.specialtie}, ${detail.method}`}/>
                            : null
                        }
                    </div>
                </Fragment>
                :
                <div className={style.loading}>
                    <Loading />
                </div>
            }
        </div>)
}