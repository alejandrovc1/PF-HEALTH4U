import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import style from './DoctorDetail.module.css'
import { getDetail } from '../../actions/index.js';
import { cleandetail } from '../../actions/index.js';
import Loading from '../Loading';


export default function DoctorDetail(props)
{

    const dispatch = useDispatch();
    const detail = useSelector(state => state.detail);
    let cargado = useSelector(state => state.cargadoDetail);
    const { id } = useParams();

    useEffect(() =>
    {
        dispatch(getDetail(id));
        return (() => { dispatch(cleandetail()) })
    }, [id]);


    return (
        <div >
            {cargado ?
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
                </div> :
                <div className={style.loading}>
                    <Loading />
                </div>
            }
        </div>)
}