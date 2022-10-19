import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import st from './HelpUsImp.module.css'
import {createMessage} from '../../actions/index'


export default function HelpUsImprove() {

    const dispatch = useDispatch()

    const [Message, setMessage] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        e.preventDefault();
        setMessage((prev) => ({ 
        ...prev,
        [e.target.name]: e.target.value,
    }))}

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('SOY EL MESAJE', Message)
        
        if (e.target.name === 'update'){
            dispatch(createMessage(Message))
            setMessage({ 
            name: '',
            email: '',
            message: '',
            })
        }
    };

    return (
        <div className={st.Form}>
            
            <span className={st.Title}>HelpUsImprove</span>

            <form onSubmit={handleSubmit} className={st.Form}>
                <div>
                    <label>Name</label>
                    <input type="text" value={Message.name} name="name" onChange={handleChange} />
                    <label>Email</label>
                    <input type="email" value={Message.email} name="email" onChange={handleChange}/>
                    <label>Message</label>
                    <input type="text" value={Message.message} name="message" onChange={handleChange}/>
                </div>
                <button name='update' onClick={handleSubmit}>Send</button>
            
            </form>
            
        </div>
    )
};
