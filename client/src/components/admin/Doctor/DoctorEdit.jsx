import React, {useState} from 'react'
import { Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import Clou from "../../ImageCloudinary/ImageCloudinary";
import st from './DoctorEdit.module.css'
import { updateDoctorAdmin } from '../../../actions/index.js'

export default function DoctorEdit(props) {
    // console.log('HOLA SOY PROPS', props)
    const dispatch = useDispatch()

    const [input, setInput] = useState({
        name: props.name,
        email: props.email,
        status: props.status,
        specialtie: props.specialtie,
        method: props.method,
        description: props.description,
        rating: props.rating,
        country: props.country,
        image: props.image,
    })

    const handleChange = (e) => {
        e.preventDefault();
        setInput((prev) => ({ 
        ...prev, 
        [e.target.name]: e.target.value,
    }))}

    const handleUpdate = (e) => {
        e.preventDefault()
        // console.log(e.target.name)
        if (e.target.name === 'update'){
            dispatch(updateDoctorAdmin(props.id, input))
            //window.location.reload(true)
            setNav(true)
        }
    };

    const [nav, setNav] = useState(false)

    return (
    <div className={st.doctorUpdate}>
        <span className={st.doctorUpdateTitle}>Edit</span>
        <form onSubmit={handleUpdate} className={st.doctorUpdateForm}>
            <div className={st.doctorUpdateLeft}>

                <div className={st.doctorUpdateItem}>
                    <label>Name</label>
                    <input 
                    type="text"
                    name="name"
                    placeholder={props.name}
                    className={st.doctorUpdateInput} 
                    onChange={(e) => handleChange(e)}/>
                </div>
                <div className={st.doctorUpdateItem}>
                    <label>Email</label>
                    <input 
                    type="email"
                    name="email"
                    placeholder={props.email} 
                    className={st.doctorUpdateInput}
                    onChange={(e) => handleChange(e)}/>
                </div>
                <div className={st.doctorUpdateItem}>
                    <label>Password</label>
                    <input type="text" disabled={true} placeholder='xxxxxxxxx' className={st.doctorUpdateInput}/>
                </div>
                <div className={st.doctorUpdateItem}>
                    <label>Status</label>
                    <select name='status' defaultValue="" className={st.doctorUpdateInput} onChange={(e) => handleChange(e)}>
                        <option hidden value="">Select a status</option>
                        <option name="active" value="active">Active</option>
                        <option name="blocked" value="blocked">Blocked</option>
                    </select>
                </div>
                <div className={st.doctorUpdateItem}>
                    <label>Specialtie</label>
                    <input 
                    type="text"
                    name="specialtie" 
                    placeholder={props.specialtie} 
                    className={st.doctorUpdateInput}
                    onChange={(e) => handleChange(e)}/>
                </div>
                <div className={st.doctorUpdateItem}>
                    <label>Method</label>
                    <select name='method' defaultValue="" className={st.doctorUpdateInput} onChange={(e) => handleChange(e)}>
                        <option hidden value="">Select a method</option>
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
                    placeholder={props.description} 
                    className={st.doctorUpdateInput}
                    onChange={(e) => handleChange(e)}/>
                </div>
                <div className={st.doctorUpdateItem}>
                    <label>Rating</label>
                    <input 
                    type="float"
                    name="rating"
                    placeholder={props.rating} 
                    className={st.doctorUpdateInput}
                    onChange={(e) => handleChange(e)}/>
                </div>
                <div className={st.doctorUpdateItem}>
                    <label>Country</label>
                    <input 
                    type="text"
                    name="country"
                    placeholder={props.country} 
                    className={st.doctorUpdateInput}
                    onChange={(e) => handleChange(e)}/>
                </div>

            </div>
            <div className={st.doctorUpdateRight}>
                <div className={st.doctorUpdateUpload}>
                    <img className={st.doctorUpdateImg} src={props.image} alt="Profile Pic" />
                    <label htmlFor="file">
                        {/* <DriveFolderUpload className={st.doctorUpdateIcon}/>  */}
                        <Clou
                            seteditinput={setInput}
                            editinput={input}
                        />
                    </label>
                    <input name="image" type="file" id='file' style={{display: "none"}} onChange={(e) => handleChange(e)}/>
                </div>
                <button name='update' onClick={handleUpdate} className={st.doctorUpdateBotton}>Update</button>
            </div>
        </form>
        { nav? <Navigate to={'/adminView/doctors'} /> : null}
    </div>
    )
};
