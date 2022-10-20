import React from "react";
import s from './aboutUs.module.css'
import img from '../../image/imgabout.png'
import { NavLink } from "react-router-dom";
import imgaleV from '../../image/img-aleV.JPG'
import imgaleH from '../../image/img-aleH.jpeg'
import imgerick from '../../image/img-erick.jpeg'
import imgvictor from '../../image/img-victor.jpg'
export default function AboutUs({role}) {
let roles;
if(role==='patient') roles='/appointment'
if(role==='doctor') roles='/myqueries'
if(!role) roles='/register'

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

                <div className={s.boton} >
                    <button className={s.contenButon}><NavLink  to={roles} className={s.NavLink}>Get started</NavLink></button>
                </div>


            </div>
        </div>
        <div>
            <h1>Developers</h1>
            <hr/>
            <div className={s.contenD}>
                <div className={s.carimg}>
                    <h3>Alejandro Villegas</h3>
                    <hr/>
                    <img src={imgaleV} alt=''/>
                    <a href="https://www.linkedin.com/in/alejandro-villegas-correa-031a91221/">linkedin</a>
                </div>
                <div className={s.carimg}>
                    <h3>Alejandro Henao</h3>
                    <hr/>
                    <img src={imgaleH} alt=''/>
                    <a href="https://www.linkedin.com/in/alejandro-henao-lopera/">linkedin</a>
                </div>
                <div className={s.carimg}>
                    <h3>Ramírez Rodas</h3>
                    <hr/>
                    <img src={imgerick} alt=''/>
                    <a href="https://www.linkedin.com/in/erick-ramirez-rodas">linkedin</a>
                </div>
                <div className={s.carimg}>
                    <h3>Victor Cavallo</h3>
                    <hr/>
                    <img src={imgvictor} alt=''/>
                    <a href="https://www.linkedin.com/in/victor-cavallo-403326120/">linkedin</a>
                </div>
            </div>
        </div>
        </>
    )
}
