import React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import axios from "axios"
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
            const { data: res } = await axios.post(url, dataG)
    
        setUser({
           email: data.email,
           rol: data.rol
       })
       localStorage.setItem("id", res.id)
       localStorage.setItem("token", res.token)
       window.location.reload(true)})();
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
                 dispatch(GetError('something went wrong with the login check the fields or you may be blocked'))
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

            setUser({
                email: data.email,
                rol: data.rol
            })
            localStorage.setItem("id", res.id)
            localStorage.setItem("token", res.token)
            window.location.reload(true)
        } catch (error) {
            // if (
            //     error.response &&
            //     error.response.status >= 400 &&
            //     error.response.status <= 500
            // ) {
            //     setError(error.response.data.message);
            // }
            dispatch(GetError('something went wrong with the login check the fields or you may be blocked'))
        }
    }
    //<Notification message={error} />
    return (

        <div>
            <h1>LOG IN</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>

                <input
                    type="email"
                    name="email"
                    value={data.email} required
                    placeholder="your email"
                    onChange={handleInputChange}
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    value={data.password} required
                    name="password"
                    placeholder="Password"
                    onChange={handleInputChange}
                />

                <button type="submit">Login</button>

            </form>
            <button onClick={handleGoogleButton}>LOG IN WITH GOOGLE</button>
            <Link to="/"><button>Go back</button></Link>
        </div>
    )
}