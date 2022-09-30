import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getDoctors } from '../actions/index.js';
import styles from './CardsDoctor.module.css'
import CardDoc from './CardDoc.jsx';


export default function Cards()
{
    let allDoctors = useSelector(state => state.Doctors);



    const dispatch = useDispatch();

    useEffect(() => //componentDidMount
    {
        dispatch(getDoctors());
    }, []);


    // if (cargado === false)
    // {
    // return (
    // <h1 className={stylesC.loading}>Loading...</h1>
    // )
    // }

    return (
        <div className={styles.docs}>
            <div className={styles.cardXdoc}>
                {
                    allDoctors.map(doctors => (
                        < CardDoc
                            id={doctors.id}
                            name={doctors.name}
                            image={doctors.image}
                            description={doctors.description}
                            rating={doctors.rating}
                            specialtie={doctors.specialtie}
                            commets={doctors.commets}
                        />
                    ))
                }
            </div>
        </div>
    )
} 