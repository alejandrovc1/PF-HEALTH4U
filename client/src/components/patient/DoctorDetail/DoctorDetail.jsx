import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import style from './DoctorDetail.module.css'
import { getDetails, cleandetail } from '../../../actions/index';
import { Loading } from '../../Loading/index';
import FormReview from '../../patient/FormReview'
import Reviews from '../Reviews'
import FormAppointment from '../FormAppointment';


export default function DoctorDetail(props) {

    const dispatch = useDispatch();
    const detail = useSelector(state => state.doctorDetail);
    let cargado = useSelector(state => state.cargadoDetail);
    console.log(detail)
    const { id } = useParams();
    const [addRev, setAddRev] = useState(false)
    const [RequestAppo, setRequestAppo] = useState(false)

    useEffect(() => {
        dispatch(getDetails(id));
        return (() => { dispatch(cleandetail()) })
    }, [id]);

    function handleNewReview() {
        setAddRev(true)
    }

    function handleNewAppointment() {
        setRequestAppo(true)
    }

    return (
        <div >
            {cargado ?
                detail?
                <div className={style.all}>
                    <div>
                        <img className={style.image} src={detail.image} alt="" />
                    </div>

                    <div className={style.details}>
                        <div className={style.text}>
                            <h1 className={style.name}>{detail.name}</h1>
                            <h3 className={style.specialtie}>{detail.specialtie}</h3>
                            {/* <div><p>Description: {detail.description} </p></div> */}
                            <div><p>Method: {detail.method} </p></div>
                            <div><p>Rating: {detail.rating} </p></div>
                        </div>
                    </div>
                    {RequestAppo?
                        <FormAppointment doctorId={id}/>
                        : <button onClick={handleNewAppointment}>
                            Request Appointment </button>
                    }
                    {addRev?
                        <FormReview doctor={id} service={`${detail.specialtie}, ${detail.method}`}/>
                        : <button onClick={handleNewReview}>
                            Add Review </button>
                    }
                    <Reviews doctor={id}/>
                </div> :
                <div className={style.loading}>
                  <Loading />
                 </div>
                :
                <div className={style.loading}>
                    <Loading />
                </div>
            }
        </div>)
}