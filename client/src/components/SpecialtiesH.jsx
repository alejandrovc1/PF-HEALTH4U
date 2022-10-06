import React from "react";
import style from "./SpecialtiesH.module.css";
import cardio from "./image/cardio.png";
import derm from "./image/derm.png";
import endoc from "./image/endoc.png";
import gast from "./image/gast.png";
import geria from "./image/geria.png";
import ginec from "./image/ginec.png";
import inter from "./image/inter.png";
import neumo from "./image/neumo.png";
import neuro from "./image/neuro.png";
import ofta from "./image/ofta.png";
import otor from "./image/otor.png";
import reum from "./image/reum.png";
import sphy from "./image/sphy.png";
import tra from "./image/reum.png";
import uro from "./image/uro.png";

export default function SpecialtiesH()
{

    return (
        <div>
            <div className={style.title}>
                <h2> Specialties</h2>
            </div>
            <div className={style.gridContainer}>
                <div className={style.box}>
                    <div><h3>Cardiology</h3></div>
                    <div><img className={style.image} src={cardio} alt=" " /></div>
                </div>
                <div className={style.box}>
                    <div><h3>Dermatology</h3></div>
                    <div><img className={style.image} src={derm} alt=" " /></div>
                </div>
                <div className={style.box}>
                    <div><h3>Endocrinology</h3></div>
                    <div><img className={style.image} src={endoc} alt=" " /></div>
                </div>
                <div className={style.box}>
                    <div><h3>Gastroenterology</h3></div>
                    <div><img className={style.image} src={gast} alt=" " /></div>
                </div>
                <div className={style.box}>
                    <div><h3>Geriatrics</h3></div>
                    <div><img className={style.image} src={geria} alt=" " /></div>
                </div>
                <div className={style.box}>
                    <div><h3>Gynecology</h3></div>
                    <div><img className={style.image} src={ginec} alt=" " /></div>
                </div>
                <div className={style.box}>
                    <div><h3>Internal Medicine</h3></div>
                    <div><img className={style.image} src={inter} alt=" " /></div>
                </div>
                <div className={style.box}>
                    <div><h3>Neurology</h3></div>
                    <div><img className={style.image} src={neuro} alt=" " /></div>
                </div>
                <div className={style.box}>
                    <div><h3>Ophthalmology</h3></div>
                    <div><img className={style.image} src={ofta} alt=" " /></div>
                </div>
                <div className={style.box}>
                    <div><h3>Otorhinolaryngology</h3></div>
                    <div><img className={style.image} src={otor} alt=" " /></div>
                </div>
                <div className={style.box}>
                    <div><h3>Pneumology</h3></div>
                    <div><img className={style.image} src={neumo} alt=" " /></div>
                </div>
                <div className={style.box}>
                    <div><h3>Psychiatry</h3></div>
                    <div><img className={style.image} src={sphy} alt=" " /></div>
                </div>
                <div className={style.box}>
                    <div><h3>Rheumatology</h3></div>
                    <div><img className={style.image} src={reum} alt=" " /></div>
                </div>
                <div className={style.box}>
                    <div><h3>Traumatology</h3></div>
                    <div><img className={style.image} src={tra} alt=" " /></div>
                </div>
                <div className={style.box}>
                    <div><h3>Urology</h3></div>
                    <div><img className={style.image} src={uro} alt=" " /></div>
                </div>
            </div>

        </div>
    )
}