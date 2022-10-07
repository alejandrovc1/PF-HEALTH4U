import React from "react"
import { postDoctors, postPatient } from "../actions"
import { useState, useEffect } from "react"
import { useAuth } from "../context/authContext"
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'

export default function profileDocLogged() {
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

    //user = doctor
    const [user, setDoctor] = useState({
        fullname: "",
        email: "",
        password: "",
        confirmPassword: "",
        specialtie: "",
        method: "",
        image: "",
        typeUser: ""
    })

    useEffect(() => console.log(user), [user])

    const { signup } = useAuth()

    function handleInputChangeDoctor(e) {

        setDoctor({
            ...user,
            [e.target.name]: e.target.value
        })

        setError(validate({
            ...user,
            [e.target.name]: e.target.value
        }))
    }

    function handleSelectedSpecialtie(e) {
        if (e.target.value !== "select") {
            setDoctor({
                ...user,
                specialtie: [e.target.value],
            })
        }
    }

    function handleSelectedMethod(e) {
        if (e.target.value !== "select") {
            setDoctor({
                ...user,
                method: [e.target.value],
            })
        }
    }

    function handleInputImageDoctor(e) {
        setDoctor({
            ...user,
            image: [e.target.value],
        })
    }

    // if(error.code === "auth/internal-error")
    const handleSubmitDoctor = async (e) => {
        e.preventDefault()
        if (true) {
            console.log('Pase por el submit de doctor')
            await signup(user.email, user.password, user.fullname, user.confirmPassword, user.specialtie, user.method, user.image, user.dateOfBirth, user.typeGenre)
            const doctor = {
                name: user.fullname,
                email: user.email,
                password: user.password,
                // specialtie: user.specialtie.toString(),
                // method: user.method.toString(),
                // image: user.image,
                //'http://res.cloudinary.com/dzikj6tja/image/upload/v1664542753/doctor_test.jpg'
            }
            // const doctor = {
            //     name: 'prueba',
            //     email: 'prueba@hotmail,com',
            //     password: 'Prueba12',
            //     specialtie: 'user.specialtie',
            //     method: 'user.method',
            //     image: 'http://res.cloudinary.com/dzikj6tja/image/upload/v1664542753/doctor_test.jpg',
            //     role: 'Doctor'
            //     //'http://res.cloudinary.com/dzikj6tja/image/upload/v1664542753/doctor_test.jpg'
            // }
            dispatch(postDoctors(doctor))
            // if (user.typeUser === 'Doctor') dispatch(postDoctors(doctor))
            // if (user.typeUser === 'Patient') dispatch(postDoctors(doctor, 'patients/register'))
            setDoctor({
                fullname: "",
                email: "",
                password: "",
                confirmPassword: "",
                specialtie: "",
                method: "",
                image: "",
                typeUser: "",
            })
            history.push('/login')
        }
    }

    return (<form onSubmit={handleSubmitDoctor}>
        <div>
            <label>FullName</label>
            <input
                type="text"
                placeholder="Write your fullname"
                name="fullname"
                value={user.fullname}
                onChange={handleInputChangeDoctor}
            />
            {error.fullname && <p>{error.fullname}</p>}

            <label htmlFor="email">Email</label>
            <input
                type="email"
                name="email"
                value={user.email}
                placeholder="your email"
                onChange={handleInputChangeDoctor}
            />
            {error.email && <p>{error.email}</p>}

            <label htmlFor="password">Password</label>
            <input
                type="password"
                name="password"
                id="password"
                placeholder="*******"
                value={user.password}
                onChange={handleInputChangeDoctor}
            />
            {error.password && <p>{error.password}</p>}

            <label>Confirm Password</label>
            <input
                type="password"
                placeholder="Re password"
                name="confirmPassword"
                value={user.confirmPassword}
                onChange={handleInputChangeDoctor}
            />
            {error.confirmPassword && <p>{error.confirmPassword}</p>}

            <label>Specialtie:</label>
            <select onChange={handleSelectedSpecialtie}>
                <option value="select">Select you specialtie</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Dermatology">Dermatology</option>
                <option value="Endocrinology">Endocrinology</option>
                <option value="Gastroenterology">Gastroenterology</option>
                <option value="Geriatrics">Geriatrics</option>
                <option value="Gynecology">Gynecology</option>
                <option value="Internal Medicine">Internal Medicine</option>
                <option value="Neurology">Neurology</option>
                <option value="Ophthalmology">Ophthalmology</option>
                <option value="Otorhinolaryngology">Otorhinolaryngology</option>
                <option value="Pneumology">Pneumology</option>
                <option value="Psychiatry">Psychiatry</option>
                <option value="Rheumatology">Rheumatology</option>
                <option value="Traumatology">Traumatology</option>
                <option value="Urology">Urology</option>
            </select>

            <label>Method:</label>
            <select onChange={handleSelectedMethod}>
                <option value="select">Select you genre</option>
                <option value="At home">At home</option>
                <option value="Virtual">Virtual</option>
                <option value="Private office">Private office</option>
            </select>

            <label>Profile photo</label>
            <input
                type="text"
                placeholder="Insert your image"
                name="image"
                value={user.image}
                onChange={handleInputChange}
            />


            <button type="submit">Register</button>
        </div></form>)
}