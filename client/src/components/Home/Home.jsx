import React from "react";
import { Nav } from "../Nav/index";
import s from "./Home.module.css";
import doctor from "../../image/Doctor.png";
import f from "../../image/facebook.png"
import i from "../../image/instagram.png"
import t from "../../image/gorjeo.png"
import tk from "../../image/tik-tok.png"
import w from "../../image/whatsapp.png"
import SpecialtiesHome from '../SpecialtiesHome/SpecialtiesHome';
import { Link } from "react-router-dom";

export default function Home({id}) {

    let adonde;
    id?adonde='/appointment':adonde='/register'

    return (
        <div className={s.fnd}>
            
            <div className={s.fondo}>

                <div className={s.float1}>
                    <h3 className={s.h3}>Solutions For Healtcare Needs</h3>
                    <h1 className={s.title}>We Always Provide The Best Service</h1>
                    <p className={s.text}>More than 50 specialist doctors waiting to assist you, schedule your appointment today that suits your schedule</p>
                    <Link to={adonde}>
                    <button className={s.boton}>Get started</button>
                    </Link>
                </div>
                <div className={s.float}>
                    <img className={s.image} src={doctor} />
                </div>
            </div>
            <div>
                <SpecialtiesHome />
            </div>
            {/* <div className={s.imgpie}>
                <div className={s.signup}>
                    <p><a href="/register">Sing up</a></p>
                    <p>For Patients</p>
                    <p>For Medical Staff</p>
                </div>
                <div className={s.signin}>
                    <p><a href="/register">Sing in</a></p>
                    <p>For Patients</p>
                    <p>For Medical Staff</p>
                </div>
                <div className={s.reds}>
                    <p className={s.contac}>Contact</p>
                    <img src={f} className={s.redes} />
                    <img src={i} className={s.redes} />
                    <img src={t} className={s.redes} />
                    <img src={tk} className={s.redes} />
                    <img src={w} className={s.redes} />
                </div>
                <div className={s.help}>
                    <p><a>Help?</a></p>
                </div>
                <div className={s.copy}>
                    <p>@Health4u All rights reserved</p>
                </div>
            </div> */}
        </div>
    )
};
