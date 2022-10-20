import React, {useState} from 'react'
import { Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import Clou from "../../ImageCloudinary/ImageCloudinary";
import st from './UserEdit.module.css'
import { putprofileAdmin} from '../../../actions/index.js'

export default function UserEdit(props) {
    // console.log('HOLA SOY PROPS', props)
    const dispatch = useDispatch()

    const [input, setInput] = useState({
        id: props.id,
        name: props.name,
        email: props.email,
        status: props.status,
        genre: props.genre,
        country: props.country,
        address: props.address,
        tel: props.tel,
        birthDate: props.birthDate,
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
            dispatch(putprofileAdmin(props.id, input))
            //window.location.reload(true)
            setNav(true)
        }
    };

    const [nav, setNav] = useState(false)

    return (

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
                        <option hidden value="">Select a status</option>
                        <option name="active" value="active">Active</option>
                        <option name="blocked" value="blocked">Blocked</option>
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
                    // value={input.birthDate}
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
        { nav? <Navigate to={'/adminView/users'} /> : null}
    </div>
    )
};
