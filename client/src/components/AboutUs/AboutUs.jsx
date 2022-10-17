import React from "react";
import s from './aboutUs.module.css'
import img from '../../image/imgabout.png'
import { NavLink } from "react-router-dom";
import { Nav } from "../Nav";

export default function AboutUs() {

    return (
        <>
        <div className={s.conten}>
            <div className={s.contenImg}>
                <img src={img} alt="img" />
            </div>

            <div className={s.contenInfo}>
                <h1 className={s.tituloInfo}>you want to know about us</h1>

                <div className={s.contoenInfoMision}>
                    <h3 className={s.subtituloInfoMision}>Are you looking for medical attention?</h3>
                    <p className={s.infoMision}>HEALTH 4U is a digital platform where you wil
                        <br />
                        l be able to find everything you are looking for
                        <br />
                        with a wide variety of doctors at your disposal</p>
                </div>

                <div className={s.contoenInfoNosotros}>
                    <h3 className={s.subtituloInfoNosotros}>about HEALTH 4U</h3>
                    <p className={s.infoNosotros}>We are a young but ambitious company that seeks
                        <br />
                        to leave its mark on the world of medicine and in
                        <br />
                        the digital with the new technologies that we implement</p>
                </div>

                <div className={s.contenButon}>
                    <button><NavLink to='/appointment' className={s.NavLink}>GET AN  APPOINTMENT</NavLink></button>
                </div>


            </div>
        </div>
        </>
    )
}
