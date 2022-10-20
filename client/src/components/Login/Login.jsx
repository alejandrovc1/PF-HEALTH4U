import React from "react"
import { useState, useEffect } from "react"
import { Link, NavLink } from "react-router-dom"
import { useDispatch } from "react-redux"
import axios from "axios"
import s from './Login.module.css'
import imggoogle from '../../image/logo-google.png'
import {
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth';
import { auth } from "../../firebase"
import { GetError } from "../../actions"
import { async } from "@firebase/util"

export default function Login() {
    const[googleL,setgoogleL]=useState(false)
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const [dataG, setDataG] = useState({
        email: "",
        password: ""
    });
    useEffect(()=>{
        if(googleL){
            (async ()=>{ const url = "/login"
                    try {
                        const { data: res } = await axios.post(url, dataG)
            
    
                        setUser({
                            email: data.email,
                            rol: data.rol
                         })
                         localStorage.setItem("id", res.id)
                         localStorage.setItem("token", res.token)
                         window.location.reload(true)
                    } catch (err) {
                        dispatch(GetError(err.response.data.msg))
                    }
                })();
        }
    },[googleL])
   
     function  handleGoogleButton ()  {
        const googleProvider = new GoogleAuthProvider()
        signInWithPopup(auth, googleProvider)
            .then(  (res) => {
                console.log(res)
                setDataG({
                    email: res.user.email,
                    password: res.user.uid
                })
                setgoogleL(true)
                
            })
            .catch(e =>{
                 console.log(e)
                 dispatch(GetError(e.response.data.msg))
                })
    }
  
    const [user, setUser] = useState(null);
    const dispatch = useDispatch();

    function validate(user) {
        let error = {}
        if (!user.email) {
            error.email = "Email is required"
        } else if ((!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(user.email.trim()))) {
            error.email = "Input only accepts valids emails"
        }
        if (!user.password) {
            error.password = "Password is required"
        } else if ((!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(user.password.trim()))) {
            error.password = "The password must be between 8 and 16 characters long, with at least one digit, at least one lowercase letter, and at least one uppercase letter"
        }
        return error
    }

    const [error, setError] = useState("")

    function handleInputChange(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
        setError(validate({
            ...data,
            [e.target.name]: e.target.value
        }))
    }

    const [logeado, setlogeado] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        try {
            const url = "/login"
            const { data: res } = await axios.post(url, data)
           
            // res.msg? dispatch(GetError('User blocked')):
           

               setUser({
                   email: data.email,
                   rol: data.rol
                })
                localStorage.setItem("id", res.id)
                localStorage.setItem("token", res.token)
                window.location.reload(true)
            
    
        } catch (err) {
            // if (
            //     error.response &&
            //     error.response.status >= 400 &&
            //     error.response.status <= 500
            // ) {
                
            // }
            console.log(err)
            dispatch(GetError(err.response.data.msg))
        }
    }
    //<Notification message={error} />
    return (

        <div className={s.conte}>
            <h1>LOG IN</h1>
            <form className={s.contenform} onSubmit={handleSubmit}>
                
                <label htmlFor="email">   Email: </label>
                <input
                    type="email"
                    name="email"
                    value={data.email} required
                    placeholder="your email"
                    onChange={handleInputChange}
                    />
                
                <label htmlFor="password">Password: </label>
                <input
                    type="password"
                    value={data.password} required
                    name="password"
                    placeholder="Password"
                    onChange={handleInputChange}
                    />
                

                <hr/>
            <div className={s.btngoogle} onClick={handleSubmit}>
                            <span>Login </span>
                        </div>

            </form>
            <hr/>
            <div className={s.btngoogle} onClick={handleGoogleButton}>
                            <img src={imggoogle} alt="" />
                            <span>Login with google</span>
                        </div>
                        <hr/>
            
            <div className={s.btngoogle} onClick={handleSubmit}>
            <NavLink to="/" className={s.NavLink}>
                            <span>Go back Home </span>
            </NavLink>
                        </div>
        </div>
    )
}