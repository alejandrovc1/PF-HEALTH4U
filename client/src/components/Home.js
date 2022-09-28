import React from "react";
import Nav from "./Nav";
import style from "./Home.module.css";
import doctor from "./image/Doctor.png";
import pie from "./image/pieDePagina.png";
//import {useDispatch} from "react-redux";
//import { useState, useEffect } from "react";

export default function Home(){
    
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
        <div className={style.fnd}>
          <Nav/>
          <div className={style.fondo}>
            <div className={style.float}>
                <img className={style.image} src={doctor}/>
            </div>
                <div className={style.float1}>
                  <h3 className={style.h3}>Solution For Healtcare Needs</h3>
                  <h1>We Always Provide Best Service</h1>
                  <p>More than 50 specialist doctors waiting to assist you, makean appointment that fits your schedule</p>
                  <button className={style.boton}>Get started</button>
                </div>
            </div>
             <div>
                <img className={style.piepagina} src={pie}/>
             </div>
        </div>
    )
}