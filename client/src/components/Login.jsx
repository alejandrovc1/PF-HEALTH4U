import React from "react"
import { useState } from "react"
import { useAuth } from "../context/authContext"
import { Link, Routes, Route } from "react-router-dom"
import { useDispatch } from "react-redux"
import axios from "axios"
import Appointment from './patient/Appointment';
import { loggedState } from "../actions"



export default function Login({ stateUser, setStateUser }) {

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

    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const { login, loginWithGoogle } = useAuth()
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

    const handleGoogleSignIn = async () => {
        await loginWithGoogle()
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        try {
            const url = "http://localhost:3001/login"
            const { data: res } = await axios.post(url, data)
            localStorage.setItem("token", res.data)
            sessionStorage.setItem("id", res.data.id)   // session solo guarda el id por el tiempo que esté activo el navegador
            dispatch(loggedState({ isLogged: true, isPatient: true }))
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
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
                {error.email && <p>{error.email}</p>}

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    value={data.password} required
                    name="password"
                    placeholder="Password"
                    onChange={handleInputChange}
                />
                {error.password && <p>{error.password}</p>}

                <button type="submit">Login</button>

            </form>
            <button onClick={handleGoogleSignIn}>Login with Google</button>
            <Link to="/"><button>Go back</button></Link>

        </div>
    )
}