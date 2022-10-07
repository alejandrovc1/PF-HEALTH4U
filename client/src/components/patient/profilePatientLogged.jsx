import React from "react"
import { postDoctors, postPatient } from "../actions"
import { useState, useEffect } from "react"
import { useAuth } from "../context/authContext"
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'

export default function profilePatientLogged() {
    const history = useHistory()
    const dispatch = useDispatch()
    const [error, setError] = useState({})

    function validate(user) {
        let error = {}
        if (!user.fullname) {
            error.fullname = "Fullname is required"
        } else if ((!/^([a-zA-Z]+)(\s[a-zA-Z]+)*$/.test(user.fullname.trim()))) {
            error.fullname = "Input only accepts letter"
        }
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
        if (!user.confirmPassword) {
            error.confirmPassword = "Please, confirm the password"
        } else if (user.password !== user.confirmPassword) {
            error.confirmPassword = "The passwords must be equals"
        }
        if (!user.dateOfBirth) {
            error.dateOfBirth = "Birth date is required"
        }
        if (!user.dni) {
            error.dni = "DNI is required"
        } else if (!/^[\d]{1,3}\.?[\d]{3,3}\.?[\d]{3,3}$/.test(user.dni.trim())) {
            error.dni = "DNI not valid"
        }
        return error
    }
    const [patient, setPatient] = useState({
        fullname: "",
        email: "",
        password: "",
        confirmPassword: "",
        dateOfBirth: "",
        typeGenre: "",
        country: "",
        tel: "",
        image: "",
        typeUser: ""
    })

    function handleInputChangePatient(e) {

        setPatient({
            ...patient,
            [e.target.name]: e.target.value
        })

        setError(validate({
            ...patient,
            [e.target.name]: e.target.value
        }))
    }


    function handleSelectedGenre(e) {
        if (e.target.value !== "select") {
            if (e.target.value === 'doctor') {
                setDoctor({
                    ...user,
                    typeGenre: [e.target.value],
                })
            }
            if (e.target.value === 'patient') {
                setPatient({
                    ...patient,
                    typeGenre: [e.target.value],
                })
            }
        }
    }
    useEffect(() => console.log(user), [user])

    const { signup } = useAuth()

    const handleSubmitPatient = async (e) => {
        e.preventDefault()
        if (true) {
            console.log('Pase por el submit de patient')
            await signup(patient.email, patient.password, patient.fullname, patient.confirmPassword, patient.dateOfBirth, patient.typeGenre, patient.typeUser)
            const patient = {
                name: patient.fullname,
                email: patient.email,
                password: patient.password,
                birthDate: patient.dateOfBirth,
                genre: patient.typeGenre,
                image: patient.image,
                role: patient.typeUser.toString()
                //'http://res.cloudinary.com/dzikj6tja/image/upload/v1664542753/doctor_test.jpg'
            }
            dispatch(postPatient(patient))
            setPatient({
                fullname: "",
                email: "",
                password: "",
                confirmPassword: "",
                dateOfBirth: "",
                typeGenre: "",
                typeUser: ""
            })
            history.push('/login')
        }
    }


    return (<form onSubmit={handleSubmitPatient}>
        <div>
            <label>FullName</label>
            <input
                type="text"
                placeholder="Write your fullname"
                name="fullname"
                value={patient.fullname}
                onChange={handleInputChangePatient}
            />
            {error.fullname && <p>{error.fullname}</p>}

            <label htmlFor="email">Email</label>
            <input
                type="email"
                name="email"
                value={patient.email}
                placeholder="your email"
                onChange={handleInputChangePatient}
            />
            {error.email && <p>{error.email}</p>}

            <label htmlFor="password">Password</label>
            <input
                type="password"
                name="password"
                id="password"
                placeholder="*******"
                value={user.password}
                onChange={handleInputChangePatient}
            />
            {error.password && <p>{error.password}</p>}

            <label>Confirm Password</label>
            <input
                type="password"
                placeholder="Re password"
                name="confirmPassword"
                value={patient.confirmPassword}
                onChange={handleInputChangePatient}
            />
            {error.confirmPassword && <p>{error.confirmPassword}</p>}

            <label>Date of birth</label>
            <input
                type="date"
                name="dateOfBirth"
                value={patient.dateOfBirth}
                onChange={handleInputChangePatient}
            />
            {error.dateOfBirth && <p>{error.dateOfBirth}</p>}

            <label>Genre:</label>
            <select onChange={handleSelectedGenre}>
                <option value="select">Select you genre</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>

            <label>Country:</label>
            <input
                type="input"
                name="country"
                value={patient.country}
                onChange={handleInputChangePatient}
            />

            <label>Tel</label>
            <input
                type="input"
                name="tel"
                value={patient.tel}
                onChange={handleInputChangePatient}
            />

            <label>Profile photo</label>
            <input
                type="text"
                placeholder="Insert your image"
                name="image"
                value={patient.image}
                onChange={handleInputChangeDoctor}
            />

            <button type="submit">Register</button>
        </div>
    </form>
    )
}