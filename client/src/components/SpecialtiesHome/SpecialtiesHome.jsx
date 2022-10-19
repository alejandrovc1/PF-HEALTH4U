import React from "react";
import style from "./SpecialtiesHome.module.css";
import cardio from "../../image/cardio.png";
import derm from "../../image/derm.png";
import endoc from "../../image/endoc.png";
import gast from "../../image/gast.png";
import geria from "../../image/geria.png";
import ginec from "../../image/ginec.png";
import inter from "../../image/inter.png";
import neumo from "../../image/neumo.png";
import neuro from "../../image/neuro.png";
import ofta from "../../image/ofta.png";
import otor from "../../image/otor.png";
import reum from "../../image/reum.png";
import psyc from "../../image/psyc.png";
import tra from "../../image/reum.png";
import uro from "../../image/uro.png";


export default function SpecialtiesHome() {

    return (
        <div>
            <div className={style.title}>
                <h2> Specialties</h2>
            </div>
            <div className={style.gridContainer}>
                <div className={style.box}>
                    <div><h3>Cardiology</h3></div>
                    <div><img className={style.image} src={cardio} alt="Cardiology Icon" /></div>
                </div>
                <div className={style.box}>
                    <div><h3>Dermatology</h3></div>
                    <div><img className={style.image} src={derm} alt="Dermatology Icon" /></div>
                </div>
                <div className={style.box}>
                    <div><h3>Endocrinology</h3></div>
                    <div><img className={style.image} src={endoc} alt="Endocrinology Icon" /></div>
                </div>
                <div className={style.box}>
                    <div><h3>Gastroenterology</h3></div>
                    <div><img className={style.image} src={gast} alt="Gastroenterology Icon" /></div>
                </div>
                <div className={style.box}>
                    <div><h3>Geriatrics</h3></div>
                    <div><img className={style.image} src={geria} alt="Geriatrics Icon" /></div>
                </div>
                <div className={style.box}>
                    <div><h3>Gynecology</h3></div>
                    <div><img className={style.image} src={ginec} alt="Gynecology Icon" /></div>
                </div>
                <div className={style.box}>
                    <div><h3>Internal Medicine</h3></div>
                    <div><img className={style.image} src={inter} alt="Internal Medicine Icon" /></div>
                </div>
                <div className={style.box}>
                    <div><h3>Neurology</h3></div>
                    <div><img className={style.image} src={neuro} alt="Neurology Icon" /></div>
                </div>
                <div className={style.box}>
                    <div><h3>Ophthalmology</h3></div>
                    <div><img className={style.image} src={ofta} alt="Ophthalmology Icon" /></div>
                </div>
                <div className={style.box}>
                    <div><h3>Otorhinolaryngology</h3></div>
                    <div><img className={style.image} src={otor} alt="Otorhinolaryngology Icon" /></div>
                </div>
                <div className={style.box}>
                    <div><h3>Pneumology</h3></div>
                    <div><img className={style.image} src={neumo} alt="Pneumology Icon" /></div>
                </div>
                <div className={style.box}>
                    <div><h3>Psychiatry</h3></div>
                    <div><img className={style.image} src={psyc} alt="Psychiatry Icon" /></div>
                </div>
                <div className={style.box}>
                    <div><h3>Rheumatology</h3></div>
                    <div><img className={style.image} src={reum} alt="Rheumatology Icon" /></div>
                </div>
                <div className={style.box}>
                    <div><h3>Traumatology</h3></div>
                    <div><img className={style.image} src={tra} alt="Traumatology Icon" /></div>
                </div>
                <div className={style.box}>
                    <div><h3>Urology</h3></div>
                    <div><img className={style.image} src={uro} alt="Urology Icon" /></div>
                </div>
            </div>
        </div>
    )
}