import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getDetails, updateDoctorAdmin} from '../../../actions/index.js'
import { Link, useParams } from 'react-router-dom'
import Clou from "../../ImageCloudinary/ImageCloudinary";
import st from './Doctor.module.css'
import { PermIdentity, AlternateEmail, BusinessCenter, Grade, Public, Description,
TrendingUp, ManageAccounts, DriveFolderUpload } from '@mui/icons-material'


export default function Doctor() {

    const {doctorId} = useParams(); //usar el mismo nombre de variable que en la ruta principal
    const dispatch = useDispatch()
    let doctor = useSelector(state => state.doctorDetail);

    useEffect(() =>{
        dispatch(getDetails(doctorId));
    }, []);
    console.log('SOY EL DOCTOR: ', doctorId)

    const [input, setInput] = useState({
        name: doctor.name,
        email: doctor.email,
        status: doctor.status,
        specialtie: doctor.specialtie,
        method: doctor.method,
        description: doctor.description,
        rating: doctor.rating,
        country: doctor.country,
        image: doctor.image,
    })

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

    const handleChange = (e) => {
        e.preventDefault();
        setInput((prev) => ({ 
        ...prev, 
        [e.target.name]: e.target.value,
    }))}

    const handleUpdate = () => {
        dispatch(updateDoctorAdmin(doctorId, input))
        window.location.reload(true)
    }


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
                    <span className={st.doctorUpdateTitle}>Edit</span>
                    <form onSubmit={(e) => handleUpdate(e)} className={st.doctorUpdateForm}>
                        <div className={st.doctorUpdateLeft}>

                            <div className={st.doctorUpdateItem}>
                                <label>Name</label>
                                <input 
                                type="text"
                                name="name"
                                placeholder={input.name}
                                className={st.doctorUpdateInput} 
                                onChange={(e) => handleChange(e)}/>
                            </div>
                            <div className={st.doctorUpdateItem}>
                                <label>Email</label>
                                <input 
                                type="email"
                                name="email"
                                placeholder={input.email} 
                                className={st.doctorUpdateInput}
                                onChange={(e) => handleChange(e)}/>
                            </div>
                            <div className={st.doctorUpdateItem}>
                                <label>Password</label>
                                <input type="text" disabled={true} placeholder='xxxxxxxxx' className={st.doctorUpdateInput}/>
                            </div>
                            <div className={st.doctorUpdateItem}>
                                <label>Status</label>
                                <select name='status' placeholder={input.status} className={st.doctorUpdateInput} onChange={(e) => handleChange(e)}>
                                    <option name="active" value="active">Active</option>
                                    <option name="suspended" value="suspended">Suspended</option>
                                    <option name="bloqued" value="bloqued">Bloqued</option>
                                </select>
                            </div>
                            <div className={st.doctorUpdateItem}>
                                <label>Specialtie</label>
                                <input 
                                type="text"
                                name="specialtie" 
                                placeholder={input.specialtie} 
                                className={st.doctorUpdateInput}
                                onChange={(e) => handleChange(e)}/>
                            </div>
                            <div className={st.doctorUpdateItem}>
                                <label>Method</label>
                                <select name='method' placeholder={input.method} className={st.doctorUpdateInput} onChange={(e) => handleChange(e)}>
                                    <option name="Virtual" value="Virtual">Virtual</option>
                                    <option name="At home" value="At home">At home</option>
                                    <option name="Private office" value="Private office">Private office</option>
                                </select>
                            </div>
                            <div className={st.doctorUpdateItem}>
                                <label>Description</label>
                                <input 
                                type="text" 
                                name="description"
                                placeholder={input.description} 
                                className={st.doctorUpdateInput}
                                onChange={(e) => handleChange(e)}/>
                            </div>
                            <div className={st.doctorUpdateItem}>
                                <label>Rating</label>
                                <input 
                                type="float"
                                name="rating"
                                placeholder={input.rating} 
                                className={st.doctorUpdateInput}
                                onChange={(e) => handleChange(e)}/>
                            </div>
                            <div className={st.doctorUpdateItem}>
                                <label>Country</label>
                                <input 
                                type="text"
                                name="country"
                                placeholder={input.country} 
                                className={st.doctorUpdateInput}
                                onChange={(e) => handleChange(e)}/>
                            </div>

                        </div>
                        <div className={st.doctorUpdateRight}>
                            <div className={st.doctorUpdateUpload}>
                                <img className={st.doctorUpdateImg} src={input.image} alt="Profile Pic" />
                                <label htmlFor="file">
                                    <DriveFolderUpload className={st.doctorUpdateIcon}/> 
                                    {/* <Clou
                                        setInput={setInput}
                                    /> */}
                                </label>
                                <input name="image" type="file" id='file' style={{display: "none"}} onChange={(e) => handleChange(e)}/>
                            </div>
                            <button className={st.doctorUpdateBotton}>Update</button>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    )
};