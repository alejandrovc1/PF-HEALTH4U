import React from "react";
import {Link} from 'react-router-dom'
import NavDoctorLogged from "../NavDoctorLogged/NavDoctorLogged";
import Footer from "../../Footer/Footer";
import s from "../../doctor/HomeDocLogged/HomeDocLogged.module.css";
import doctors from "../../../image/doctors.jpg";
import Appointments from "../Appointments"

export default function HomeDocLogged() {

    return (
        <div className={s.fnd}>
            <div className={s.fondo}>
                <div className={s.banner}>
                    <div className={s.float1}>
                        <h3 className={s.title}>Welcome Doctor 👨🏽‍⚕️👩🏽‍⚕️</h3>
                        <p className={s.text}>This site and what we stand for is only possible because of your effort and hard work. Our main mission is to help people and counting on you to make it possible is something that makes us extremely happy.</p>
                        <p className={s.text}>Thank you for being one of over 50 specialists waiting to serve the needs of our patients. ¡Have a great day!</p>
                        <Link to={'/myqueries'}>
                            <button className={s.boton}>Check your profile</button>
                        </Link>
                    </div>
                    <div className={s.float}>
                        <img className={s.image} src={doctors} />
                    </div>
                </div>
            </div>
            <Appointments/>
        </div>
        /*  <div className={s.fondo}>
                <div className={s.float1}>
                    <h3 className={s.h3}>Welcome Doctor</h3>
                    <h1 className={s.title}>We always provide the best service</h1>
                    <p className={s.text}>Thank you for being one of over 50 specialists waiting to<br /> serve the needs of patients. Have a great day. </p>
                </div>
                <div className={s.float}>
                    <img className={s.image} src={doctor} />
                </div>
            </div> */
    )
};