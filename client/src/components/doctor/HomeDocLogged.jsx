import React from "react";
import NavDoctorLogged from "../NavDoctorLogged";
import Footer from "../Footer";
import s from "./Home.module.css";
import doctor from "./image/Doctor.png";

export default function HomeDocLogged()
{


    return (
        <div>
            <div>
                <NavDoctorLogged />
                <div className={s.fondo}>
            
                <div className={s.float1}>
                  <h3 className={s.h3}>Welcome Doctor</h3>
                  <h1 className={s.title}>We always provide the best service</h1>
                  <p className={s.text}>Thank you for being one of over 50 specialists waiting to<br/> serve the needs of patients. Have a great day. </p>
                </div>
                <div className={s.float}>
                     <img className={s.image} src={doctor}/>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}