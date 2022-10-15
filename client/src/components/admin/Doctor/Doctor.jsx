import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getDetails, updateDoctor} from '../../../actions/index.js'
import { Link, useParams } from 'react-router-dom'
import st from './Doctor.module.css'
import { PermIdentity, AlternateEmail, CalendarMonth, Wc, Public, MyLocation,
PhoneInTalk, ManageAccounts, DriveFolderUpload } from '@mui/icons-material'


export default function Doctor() {

    const {doctorId} = useParams(); //usar el mismo nombre de variable que en la ruta principal
    const dispatch = useDispatch()
    let doctor = useSelector(state => state.doctorDetail);

    useEffect(() =>{
        dispatch(getDetails(doctorId));
    }, []);
    console.log('SOY EL DOCTOR: ', doctorId)

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


    const handleUpdate = (id, data) => {
        dispatch(updateDoctor(id))
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
                        <img src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png" alt="Profile Pict" className={st.doctorShowImg} />
                        <div className={st.doctorShowTopTitle}>
                            <span className={st.doctorShowUsername}>Santiago Castillo</span>
                            <span className={st.doctorShowRole}>Doctor</span>
                        </div>
                    </div>

                    <div className={st.doctorShowBottom}>
                        <span className={st.doctorShowTitle}>Account Details</span>

                        <div className={st.doctorShowInfo}>
                            <PermIdentity className={st.doctorShowIcon}/>
                            <span className={st.doctorShowInfoTitle}>ID: 123456</span>
                        </div>
                        <div className={st.doctorShowInfo}>
                            <AlternateEmail className={st.doctorShowIcon}/>
                            <span className={st.doctorShowInfoTitle}>Email: SantiCas@gmail.com</span>
                        </div>
                        <div className={st.doctorShowInfo}>
                            <ManageAccounts className={st.doctorShowIcon}/>
                            <span className={st.doctorShowInfoTitle}>Status: Active</span>
                        </div>

                        {/* <span className={st.doctorShowTitle}>Contact Details</span> */}

                        <div className={st.doctorShowInfo}>
                            <Wc className={st.doctorShowIcon}/>
                            <span className={st.doctorShowInfoTitle}>Specialtie: Cardiology</span>
                        </div>
                        <div className={st.doctorShowInfo}>
                            <Public className={st.doctorShowIcon}/>
                            <span className={st.doctorShowInfoTitle}>Method: Virtual</span>
                        </div>
                        <div className={st.doctorShowInfo}>
                            <MyLocation className={st.doctorShowIcon}/>
                            <span className={st.doctorShowInfoTitle}>Description: I'm a good doctor</span>
                        </div>
                        <div className={st.doctorShowInfo}>
                            <PhoneInTalk className={st.doctorShowIcon}/>
                            <span className={st.doctorShowInfoTitle}>Rating: 4</span>
                        </div>
                        <div className={st.doctorShowInfo}>
                            <CalendarMonth className={st.doctorShowIcon}/>
                            <span className={st.doctorShowInfoTitle}>Country: Argentina</span>
                        </div>
                    </div>    
                </div>

                <div className={st.doctorUpdate}>
                    <span className={st.doctorUpdateTitle}>Edit</span>
                    <form className={st.doctorUpdateForm}>
                        <div className={st.doctorUpdateLeft}>

                            <div className={st.doctorUpdateItem}>
                                <label>Name</label>
                                <input type="text" placeholder='Santiago Castillo' className={st.doctorUpdateInput}/>
                            </div>
                            <div className={st.doctorUpdateItem}>
                                <label>Email</label>
                                <input type="email" placeholder='SantiCas@gmail.com' className={st.doctorUpdateInput}/>
                            </div>
                            <div className={st.doctorUpdateItem}>
                                <label>Password</label>
                                <input type="text" placeholder='xxxxxxxxx' className={st.doctorUpdateInput}/>
                            </div>
                            <div className={st.doctorUpdateItem}>
                                <label>Status</label>
                                <input type="text" placeholder='Active' className={st.doctorUpdateInput}/>
                            </div>
                            <div className={st.doctorUpdateItem}>
                                <label>Specialtie</label>
                                <input type="text" placeholder='Cardiology' className={st.doctorUpdateInput}/>
                            </div>
                            <div className={st.doctorUpdateItem}>
                                <label>Method</label>
                                <input type="text" placeholder='Virtual' className={st.doctorUpdateInput}/>
                            </div>
                            <div className={st.doctorUpdateItem}>
                                <label>Description</label>
                                <input type="text" placeholder="I'm a good doctor" className={st.doctorUpdateInput}/>
                            </div>
                            <div className={st.doctorUpdateItem}>
                                <label>Rating</label>
                                <input type="float" placeholder='4' className={st.doctorUpdateInput}/>
                            </div>
                            <div className={st.doctorUpdateItem}>
                                <label>Country</label>
                                <input type="text" placeholder='Argentina' className={st.doctorUpdateInput}/>
                            </div>

                        </div>
                        <div className={st.doctorUpdateRight}>
                            <div className={st.doctorUpdateUpload}>
                                <img className={st.doctorUpdateImg} src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png" alt="Profile Pic" />
                                <label htmlFor="file">
                                    <DriveFolderUpload className={st.doctorUpdateIcon}/> 
                                </label>
                                <input type="file" id='file' style={{display: "none"}}/>
                            </div>
                            <button className={st.doctorUpdateBotton}>Update</button>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    )
};