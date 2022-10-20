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
import mision from '../../image/Mission.jpg'
import vision from '../../image/Vision.jpg'
import values from '../../image/Values.jpg'
import { Link } from "react-router-dom";

export default function Home({id}) {

    let adonde;
    id?adonde='/appointment':adonde='/register'

    return (
        <div className={s.fnd}>
            
            <div className={s.fondo}>
                <div className={s.banner}>
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
            </div>
            
            <div className={s.specialties}>
                <SpecialtiesHome/>
            </div>

            <section className={s.infoAboutUs}>

                <div className={s.mission}>
                    <div className={s.missionText}>
                        <h3>Our Mission:</h3>
                        <p>Our purpose is to connect health care talent from the different regions of Latin America with the rest of the world. Always providing a professional, human and innovative service that anyone who wishes can access from the comfort of their home or receiving a visit from a professional.</p>
                    </div>
                    <img src={mision} className={s.imgMision} alt="Mission img" />
                </div>

                <div className={s.vision}>
                    <div className={s.visionText}>
                        <h3>Our Vision:</h3>
                        <p>We hope to become one of the preferred options for people when entrusting their health care, connecting more and more patients with suitable professionals specialized in the different areas of medicine.</p>
                    </div>
                    <img src={vision} className={s.imgVision} alt="Vision img" />
                </div>

                <div className={s.values}>
                    <div className={s.valuesDiv}>
                        <h3>Our Main Values:</h3>
                        <ul>
                            <li className={s.listItem}>Professionalism and suitability</li>
                            <li className={s.listItem}>Commitment and vocation</li>
                            <li className={s.listItem}>Continuous innovation</li>
                            <li className={s.listItem}>Personalized care with human sense</li>
                        </ul>
                    </div>
                    <img src={values} className={s.imgValues} alt="Values img" />
                </div>

            </section>

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
