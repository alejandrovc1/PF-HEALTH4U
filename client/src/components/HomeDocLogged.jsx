import React from "react";
import NavDoctorLogged from "./NavDoctorLogged";
import Footer from "./Footer";
import style from "./HomeDocLogged.module.css";
import doctor from "./image/Doctor.png";


export default function HomeDocLogged()
{


    return (
        <div>
            <div>
                <NavDoctorLogged />
            </div>
            <div>
                <p>HOLA</p>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}