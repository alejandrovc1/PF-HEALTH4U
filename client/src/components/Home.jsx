import React from "react";
import Nav from "./Nav";
import s from "./Home.module.css";
import doctor from "./image/Doctor.png";
import pie from "./image/pieDePagina.png";
import SpecialtiesH from "./SpecialtiesH";
//import {useDispatch} from "react-redux";
//import { useState, useEffect } from "react"; 

export default function Home()
{

    /*
    const dispatch = useDispatch();
    const [orden, setOrden] = useState(""); //creo el estado de orden para poder renderizar en un orden
 
    useEffect(()=>{ //lo manda al store para hacer la logica  
        dispatch(getPatientes());
        dispatch(getDoctors()); 
    }, [dispatch])

    function handleRating(e){ //funcion para ordenar por rating de cada doctor
        e.preventDefault();
        setOrden(e.target.value)
    }

    function handleSpecialties(e){ //funcion para ordenar por especialidad
        e.preventDefault();
        setOrden(e.target.value);
    }
  
 function handleSort(e){ //funcion para filtrar por orden alfabetico
        e.preventDefault();//preveemos el orden por default
        setOrden(e.target.value) // seteamos  
    }
 */
    return (
        <div className={s.fnd}>
            <Nav />
            <div className={s.fondo}>

                <div className={s.float1}>
                    <h3 className={s.h3}>Solution For Healtcare Needs</h3>
                    <h1 className={s.title}>We Always Provide Best Service</h1>
                    <p className={s.text}>More than 50 specialist doctors waiting to assist you, makean appointment <br />that fits your schedule</p>
                    <button className={s.boton}>Get started</button>
                </div>
                <div className={s.float}>
                    <img className={s.image} src={doctor} />
                </div>
            </div>
            <div>
                <SpecialtiesH />
            </div>
            <div className={s.imgpie}>
                <img className={s.piepagina} src={pie} />
            </div>
        </div>
    )
}
