import React from "react";
import NavAppointment from "./NavAppointment";
import s from "./Appointment.module.css"
//import {useDispatch} from "react-redux";
//import { useState, useEffect } from "react";

export default function Appointment(){

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

    return(
        <div>
            <NavAppointment/>
        <div className={s.tite}>
            <h1>Select your preferences to make an appointment!</h1>
        </div>
        <div className={s.conten}>
            <select className={s.filter}>
                <option>Alphabetically</option>
                <option>Asc</option>
                <option>Desc</option>
            </select>
            <select className={s.filter}>
                <option>Specialties</option>
            </select>
            <select className={s.filter}>
                <option>Rating</option>
                <option>Asc</option>
                <option>Desc</option>
            </select>
            <select className={s.filter}>
                <option>Method</option>
                <option>PayPal</option>
                <option>Tarjeta</option>
            </select>
            <select className={s.filter}>
                <option>Day Available</option>
            </select>
            <select className={s.filter}>
                <option>Hour Available</option>
            </select>
        </div>
        <div>
            <h1>Aqui va la card xd</h1>
        </div>
        </div>
    )
}