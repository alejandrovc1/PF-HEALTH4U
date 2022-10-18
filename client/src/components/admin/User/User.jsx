import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getprofile, putprofileAdmin} from '../../../actions/index.js'
import st from './User.module.css'
import UserEdit from './UserEdit.jsx'
import { PermIdentity, AlternateEmail, CalendarMonth, Wc, Public, MyLocation, 
PhoneInTalk, ManageAccounts, DriveFolderUpload } from '@mui/icons-material'


export default function User( ) {

    const {userId} = useParams(); //usar el mismo nombre de variable que en la ruta principal
    const dispatch = useDispatch()
    let patient = useSelector(state => state.patientDetail);

    useEffect(() =>{
        dispatch(getprofile(userId));
    }, [getprofile]);

    let props = {};

    patient ? props = {
        id: patient.id,
        name: patient.name,
        email: patient.email,
        birthDate: patient.birthDate,
        address: patient.address,
        country: patient.country,
        tel: patient.tel,
        genre: patient.genre,
        image: patient.image,
        status: patient.status
    } : console.log('Algo esta pasando')
    

    return (
        <div className={st.Patient}>

            <div className={st.userTitleContainer}>
                <h1 className={st.userTitle}>Edit User</h1>
                <Link to='/adminView/newUser'>
                    <button className={st.useadAddButton}>Create</button>
                </Link>
            </div>
            
            <div className={st.userContainer}>
                <div className={st.userShow}>
                    <div className={st.userShowTop}>
                        <img src={props.image} alt="Profile Pict" className={st.userShowImg} />
                        <div className={st.userShowTopTitle}>
                            <span className={st.userShowUsername}>{props.name}</span>
                            <span className={st.userShowRole}>Patient</span>
                        </div>
                    </div>

                    <div className={st.userShowBottom}>
                        <span className={st.userShowTitle}>Account Details</span>

                        <div className={st.userShowInfo}>
                            <PermIdentity className={st.userShowIcon}/>
                            <span className={st.userShowInfoTitle}>ID: {props.id}</span>
                        </div>
                        <div className={st.userShowInfo}>
                            <AlternateEmail className={st.userShowIcon}/>
                            <span className={st.userShowInfoTitle}>Email: {props.email}</span>
                        </div>
                        <div className={st.userShowInfo}>
                            <ManageAccounts className={st.userShowIcon}/>
                            <span className={st.userShowInfoTitle}>Status: {props.status}</span>
                        </div>

                        <span className={st.userShowTitle}>Contact Details</span>

                        <div className={st.userShowInfo}>
                            <Wc className={st.userShowIcon}/>
                            <span className={st.userShowInfoTitle}>Genre: {props.genre}</span>
                        </div>
                        <div className={st.userShowInfo}>
                            <Public className={st.userShowIcon}/>
                            <span className={st.userShowInfoTitle}>Country: {props.country}</span>
                        </div>
                        <div className={st.userShowInfo}>
                            <MyLocation className={st.userShowIcon}/>
                            <span className={st.userShowInfoTitle}>Address: {props.address}</span>
                        </div>
                        <div className={st.userShowInfo}>
                            <PhoneInTalk className={st.userShowIcon}/>
                            <span className={st.userShowInfoTitle}>Tel: {props.tel}</span>
                        </div>
                        <div className={st.userShowInfo}>
                            <CalendarMonth className={st.userShowIcon}/>
                            <span className={st.userShowInfoTitle}>BirthDate: {props.birthDate}</span>
                        </div>
                    </div>    
                </div>

                <div className={st.userUpdate}>
                    <UserEdit {...props}/>
                </div>
            </div>
        </div>
    )
};
