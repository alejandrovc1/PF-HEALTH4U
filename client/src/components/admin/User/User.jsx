import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, Navigate, useNavigate, useNavigation, useParams } from 'react-router-dom'
import { getprofile, putprofileAdmin} from '../../../actions/index.js'
import st from './User.module.css'
import Clou from "../../ImageCloudinary/ImageCloudinary";
import { PermIdentity, AlternateEmail, CalendarMonth, Wc, Public, MyLocation, 
PhoneInTalk, ManageAccounts, DriveFolderUpload } from '@mui/icons-material'


export default function User( ) {

    const {userId} = useParams(); //usar el mismo nombre de variable que en la ruta principal
    const dispatch = useDispatch()
    let patient = useSelector(state => state.patientDetail);

    useEffect(() =>{
        dispatch(getprofile(userId));
    }, [getprofile]);
    
    const [input, setInput] = useState({
        name: patient.name,
        email: patient.email,
        status: patient.status,
        genre: patient.genre,
        country: patient.country,
        address: patient.address,
        tel: patient.tel,
        birthDate: patient.birthDate,
        image: patient.image,
    })

    const [nav, setNav] = useState(false)

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
    
    const handleChange = (e) => {
        e.preventDefault();
        setInput((prev) => ({ 
        ...prev, 
        [e.target.name]: e.target.value,
    }))}

    const handleUpdate = (e) => {
        e.preventDefault()
        if (e.target.name === 'update'){
            dispatch(putprofileAdmin(userId, input))
            //window.location.reload(true)
            setNav(true)
        }
    };


    return (
        <div className={st.User}>
            
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
                    <span className={st.userUpdateTitle}>Edit</span>
                    <form onSubmit={handleUpdate} className={st.userUpdateForm}>
                        <div className={st.userUpdateLeft}>

                            <div className={st.userUpdateItem}>
                                <label>Name</label>
                                <input 
                                type="text" 
                                name="name"
                                placeholder={props.name} 
                                className={st.userUpdateInput}
                                onChange={(e) => handleChange(e)}/>
                            </div>
                            <div className={st.userUpdateItem}>
                                <label>Role</label>
                                <input type="text" disabled={true} placeholder='Patient' className={st.userUpdateInput}/>
                            </div>
                            <div className={st.userUpdateItem}>
                                <label>Email</label>
                                <input 
                                type="email"
                                name="email"
                                placeholder={props.email} 
                                className={st.userUpdateInput}
                                onChange={(e) => handleChange(e)}/>
                            </div>
                            <div className={st.userUpdateItem}>
                                <label>Status</label>
                                <select name="status" defaultValue="" className={st.userUpdateInput} onChange={(e) => handleChange(e)}>
                                    <option hidden value="">Select an status</option>
                                    <option name="active" value="active">Active</option>
                                    <option name="suspended" value="suspended">Suspended</option>
                                    <option name="bloqued" value="bloqued">Bloqued</option>
                                </select>
                            </div>
                            <div className={st.userUpdateItem}>
                                <label>Genre</label>
                                <input 
                                type="text"
                                name="genre" 
                                placeholder={props.genre} 
                                className={st.userUpdateInput}
                                onChange={(e) => handleChange(e)}/>
                            </div>
                            <div className={st.userUpdateItem}>
                                <label>Country</label>
                                <input 
                                type="text"
                                name="country"
                                placeholder={props.country} 
                                className={st.userUpdateInput}
                                onChange={(e) => handleChange(e)}/>
                            </div>
                            <div className={st.userUpdateItem}>
                                <label>Address</label>
                                <input 
                                type="text"
                                name="address"
                                placeholder={props.address} 
                                className={st.userUpdateInput}
                                onChange={(e) => handleChange(e)}/>
                            </div>
                            <div className={st.userUpdateItem}>
                                <label>Tel</label>
                                <input 
                                type="number"
                                name="tel" 
                                placeholder={props.tel} 
                                className={st.userUpdateInput}
                                onChange={(e) => handleChange(e)}/>
                            </div>
                            <div className={st.userUpdateItem}>
                                <label>BirthDate</label>
                                <input 
                                type="date"
                                name="birthDate"
                                className={st.userUpdateInput}
                                onChange={(e) => handleChange(e)}/>
                            </div>

                        </div>
                        <div className={st.userUpdateRight}>
                            <div className={st.userUpdateUpload}>
                                <img className={st.userUpdateImg} src={props.image} alt="Profile Pic" />
                                <label htmlFor="file">
                                    {/* <DriveFolderUpload className={st.userUpdateIcon}/> */}
                                    <Clou
                                        seteditinput={setInput}
                                        editinput={input}
                                    /> 
                                </label>
                                <input name="image" type="file" id='file' style={{display: "none"}} onChange={(e) => handleChange(e)}/>
                            </div>
                            <button name='update' onClick={handleUpdate} className={st.userUpdateBotton}>Update</button>
                        </div>
                    </form>
                </div>
            </div>
            { nav? <Navigate to={'/adminView/users'} /> : null}
        </div>
    )
};
