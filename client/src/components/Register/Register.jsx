import React from "react"
import { postDoctors, postPatient } from "../../actions"
import { useState, useEffect } from "react"
import { useAuth } from "../../context/authContext"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import s from './Register.module.css'
import imggoogle from '../../image/logo-google.png'
import img from '../../image/img-registro.jpg'
import {
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth';
import { auth } from "../../firebase"

export default function Register() {
    const navigate = useNavigate()
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
        return error
    }
    //user = doctor
    const [user, setDoctor] = useState({
        fullname: "",
        email: "",
        password: "",
        confirmPassword: "",
        typeUser: ""
    })

    const [patient, setPatient] = useState({
        fullname: "",
        email: "",
        password: "",
        confirmPassword: "",
        typeUser: ""
    })

    // useEffect(() => console.log(user), [user])
    // useEffect(() => console.log(patient), [patient])

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

    function handleSelectedUser(e) {
        if (e.target.value !== "select") {
            console.log('Paso por aca', e.target.value)
            if (e.target.value === "doctor") {
                setDoctor({
                    ...user,
                    typeUser: [e.target.value]
                })
                setPatient({
                    ...patient,
                    typeUser: ''
                })
            }
            else {
                setPatient({
                    ...patient,
                    typeUser: [e.target.value]
                })
                setDoctor({
                    ...user,
                    typeUser: ''
                })
            }
        } else {
            setDoctor({
                ...user,
                typeUser: ''
            })
            setPatient({
                ...patient,
                typeUser: ''
            })
        }
    }

    // if(error.code === "auth/internal-error")
    const handleSubmitDoctor = async (e) => {
        e.preventDefault()
        if (true) {
            console.log('Pase por el submit de doctor')
            //await signup(user.email, user.password, user.fullname,)
            const doctor = {
                name: user.fullname,
                email: user.email,
                password: user.password,
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
            console.log(doctor);
            setDoctor({
                fullname: "",
                email: "",
                password: "",
                confirmPassword: "",
            })
            navigate("/login")
        }
    }

    const handleSubmitPatient = async (e) => {
        e.preventDefault()
        if (true) {
            console.log('Pase por el submit de patient')
            // await signup(patient.email, patient.password, patient.fullname, patient.confirmPassword)
            const patient2 = {
                name: patient.fullname,
                email: patient.email,
                password: patient.password,
            }
            dispatch(postPatient(patient2))
            console.log(patient2)
            setPatient({
                fullname: "",
                email: "",
                password: "",
                confirmPassword: "",
            })
            navigate("/login")
        }
    }

    const handleGoogleButton = async (e) => {
        e.preventDefault()
        const googleProvider = new GoogleAuthProvider()
        signInWithPopup(auth, googleProvider)
            .then(res => {
                console.log(res)
                const userWithGoogle = {
                    name: res.user.displayName,
                    email: res.user.email,
                    password: res.user.uid
                }
                if (user.typeUser == 'doctor') {
                    console.log(userWithGoogle)
                    dispatch(postDoctors(userWithGoogle))
                } else if (patient.typeUser == 'patient') {
                    console.log(userWithGoogle)
                    dispatch(postPatient(userWithGoogle))
                }
                navigate("/login")
            })
            .catch(e => console.log(e))
    }
    return (

        <div className={s.conten}>
            <div className={s.image}>
                <img src={img} alt='image'/>
            </div>
            <div className={s.contenForm}>
            <div className={s.form}>
            <h1>USUARY REGISTER</h1>
            <hr/>
            <form>
                <div>
                    <label>Select your user</label>
                    <select id="rol" onChange={handleSelectedUser}>
                        <option value="select">Select the user</option>
                        <option value="doctor">doctor</option>
                        <option value="patient">patient</option>
                    </select>
                </div>
            </form>
            {user.typeUser == 'doctor' &&
                <form>
                    <div>
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
                        </div>
                        <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={user.email}
                            placeholder="your email"
                            onChange={handleInputChangeDoctor}
                            />
                        {error.email && <p>{error.email}</p>}
                        </div>
                        <div>
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
                        </div>
                        <div>    
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Re password"
                            name="confirmPassword"
                            value={user.confirmPassword}
                            onChange={handleInputChangeDoctor}
                            />
                        {error.confirmPassword && <p>{error.confirmPassword}</p>}
                        </div> 
                        <div>
                        <div className={s.btngoogle} onClick={handleSubmitDoctor}>
                            <span>Register </span>
                        </div>
                        </div>
                        <hr/>
                        <div>
                        <div className={s.btngoogle} onClick={handleGoogleButton}>
                            <img src={imggoogle} alt="" />
                            <span>Register with google</span>
                        </div>
                        </div>
                    </div>
                </form>
            }
            {patient.typeUser == 'patient' &&
                <form onSubmit={handleSubmitPatient}>
                    <div>
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
                      </div>
                      <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={patient.email}
                            placeholder="your email"
                            onChange={handleInputChangePatient}
                            />
                        {error.email && <p>{error.email}</p>}
                       </div>
                       <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="*******"
                            value={patient.password}
                            onChange={handleInputChangePatient}
                            />
                        {error.password && <p>{error.password}</p>}
                        </div>
                        <div>
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Re password"
                            name="confirmPassword"
                            value={patient.confirmPassword}
                            onChange={handleInputChangePatient}
                            />
                        {error.confirmPassword && <p>{error.confirmPassword}</p>}
                       </div>
                       <div>
                       <div className={s.btngoogle} onClick={handleSubmitPatient}>
                            <span>Register </span>
                        </div>
                       </div>
                       <hr/>
                       <div>
                        <div className={s.btngoogle} onClick={handleGoogleButton}>
                            <img src={imggoogle} alt="" />
                            <span>Register with google</span>
                        </div>
                       </div>
                    </div>
                </form>
            }
            <hr/>
            <div>
             <p>
                Already have an account?
                <Link to='/login'>
                <a
                    >
                    LogIn
                </a>
                </Link>
             </p>
            </div>
            </div>
        </div>
        </div >
    )
}