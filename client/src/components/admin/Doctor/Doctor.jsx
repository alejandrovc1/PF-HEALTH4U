import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getDetails, updateDoctorAdmin} from '../../../actions/index.js'
import st from './Doctor.module.css'
import DoctorEdit from './DoctorEdit.jsx'
import { PermIdentity, AlternateEmail, BusinessCenter, Grade, Public, Description,
TrendingUp, ManageAccounts, DriveFolderUpload } from '@mui/icons-material'


export default function Doctor() {

    const {doctorId} = useParams(); //usar el mismo nombre de variable que en la ruta principal
    const dispatch = useDispatch()
    let doctor = useSelector(state => state.doctorDetail);

    useEffect(() =>{
        dispatch(getDetails(doctorId));
    }, [getDetails]);

    let props = {};

    doctor ? props = {
        id: doctor.id,
        name: doctor.name,
        email: doctor.email,
        specialtie: doctor.specialtie,
        method: doctor.method,
        description: doctor.description,
        rating: doctor.rating,
        country: doctor.country,
        image: doctor.image,
        status: doctor.status
    } : console.log('Algo esta pasando') 


    return (
        <div className={st.Doctor}>
            
            <div className={st.doctorTitleContainer}>
                <h1 className={st.doctorTitle}>Edit User</h1>
                <Link to='/adminView/newDoctor'>
                    <button className={st.doctorAddButton}>Create</button>
                </Link>
            </div>

            <div className={st.doctorContainer}>
                <div className={st.doctorShow}>
                    <div className={st.doctorShowTop}>
                        <img src={props.image} alt="Profile Pict" className={st.doctorShowImg} />
                        <div className={st.doctorShowTopTitle}>
                            <span className={st.doctorShowUsername}>{props.name}</span>
                            <span className={st.doctorShowRole}>Doctor</span>
                        </div>
                    </div>

                    <div className={st.doctorShowBottom}>
                        <span className={st.doctorShowTitle}>Account Details</span>

                        <div className={st.doctorShowInfo}>
                            <PermIdentity className={st.doctorShowIcon}/>
                            <span className={st.doctorShowInfoTitle}>ID: {props.id}</span>
                        </div>
                        <div className={st.doctorShowInfo}>
                            <AlternateEmail className={st.doctorShowIcon}/>
                            <span className={st.doctorShowInfoTitle}>Email: {props.email}</span>
                        </div>
                        <div className={st.doctorShowInfo}>
                            <ManageAccounts className={st.doctorShowIcon}/>
                            <span className={st.doctorShowInfoTitle}>Status: {props.status}</span>
                        </div>

                        {/* <span className={st.doctorShowTitle}>Contact Details</span> */}

                        <div className={st.doctorShowInfo}>
                            <Grade className={st.doctorShowIcon}/>
                            <span className={st.doctorShowInfoTitle}>Specialtie: {props.specialtie}</span>
                        </div>
                        <div className={st.doctorShowInfo}>
                            <BusinessCenter className={st.doctorShowIcon}/>
                            <span className={st.doctorShowInfoTitle}>Method: {props.method}</span>
                        </div>
                        <div className={st.doctorShowInfo}>
                            <Description className={st.doctorShowIcon}/>
                            <span className={st.doctorShowInfoTitle}>Description: {props.description}</span>
                        </div>
                        <div className={st.doctorShowInfo}>
                            <TrendingUp className={st.doctorShowIcon}/>
                            <span className={st.doctorShowInfoTitle}>Rating: {props.rating}</span>
                        </div>
                        <div className={st.doctorShowInfo}>
                            <Public className={st.doctorShowIcon}/>
                            <span className={st.doctorShowInfoTitle}>Country: {props.country}</span>
                        </div>
                    </div>    
                </div>
                
                <div className={st.doctorUpdate}>
                    <DoctorEdit {...props}/>
                </div>
                
            </div>
        </div>
    )
};