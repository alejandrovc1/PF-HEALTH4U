import React from "react";
import style from "./Specialties.module.css";
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
import { useDispatch,useSelector } from "react-redux";
import { getSpecialties } from "../../actions";
import { Loading } from "../Loading";

export default function Specialties() {
    const dispatch=useDispatch()
    React.useEffect(()=>{
        dispatch(getSpecialties())
    },[dispatch])
    const special=useSelector(f=>f.specialties)
    console.log(special)
    return (
        <div>
            <div className={style.title}>
                <h2> Specialties</h2>
            </div>
            <div className={style.gridContainer}>
                {special.length?special.map(p=>{
                    return(
                        <div key={p.id} className={style.box}>
                        <div><img className={style.image} src={p.image} alt=" " /></div>
                        <div><h3>{p.name}</h3></div>
                        <p>{p.description}</p>
                    </div>
                    )
                }):<Loading/>}
            </div>
        </div>
    )
}