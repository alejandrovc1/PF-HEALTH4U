import React from "react";
import { NavAppointment } from "../NavAppointment";
import s from "./Appointment.module.css";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { 
    filterBySpecialties, 
    orderByRating, 
    orderByName, 
    filterByMethod, 
    getSpecialties, 
    filterByAvailable,
    reset, 
    getDoctorsExceptBlockeds 
} from "../../../actions";
import Footer from "../../Footer/Footer";
import CardDoc from '../CardDoc/CardDoc.jsx';
import Paginado from "../Paginado/Paginado.jsx";
import style from "../Paginado/Paginado.module.css"
import { Navigate } from "react-router-dom";

export default function Appointment() {
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(getPatientes());
        dispatch(getDoctorsExceptBlockeds());
        dispatch(getSpecialties());
    }, [dispatch])

    const allDoctors = useSelector(state => state.doctorsCopy);
    console.log("doctores: ", allDoctors)
    
    const allspecialties = useSelector(state => state.specialties)
    
    const [orden, setOrden] = useState("");
    
    const [filter, setFilter] = useState("");
    
    let [currentPage, setCurrentPage] = useState(1);
    
    const [doctorsPerPage, setDoctorsPerPage] = useState(8);
    
    const [checked, setChecked] = useState(false)
    
    let indexOfLastDoctors = currentPage * doctorsPerPage;
    if(allDoctors.length < 8) indexOfLastDoctors =  allDoctors.length;
    
    let indexOfFirstDoctors = indexOfLastDoctors - doctorsPerPage;
    if(indexOfFirstDoctors < 1) indexOfFirstDoctors = 0;
    
    const currentDoctors = allDoctors.slice(indexOfFirstDoctors, indexOfLastDoctors);
    console.log("Revision: ", currentDoctors)

    const indexPages = Math.ceil(allDoctors.length / doctorsPerPage)
    console.log("index: ", indexPages)
    
    
    
    // const paginado = (pageNumber) => {
    //     setCurrentPage(pageNumber)
    // }

    // function handlerPrev() {
    //     if (currentPage <= 1) return;
    //     paginado(currentPage - 1);
    // }

    // function handlerNext() {
    //     if (currentPage >= currentPage.length) return;
    //     paginado(currentPage + 1);
    // }

    function handleRating(e) {
        e.preventDefault();
        console.log("Selector: ", e.target.value)
        dispatch(orderByRating(e.target.value));
        setOrden(e.target.value)
    }

    function handleMethod(e) {
        e.preventDefault();
        if (filter !== "Specialties") {
            dispatch(reset())
            dispatch(filterByMethod(e.target.value))
            setFilter("Method")
        } else {
            dispatch(filterByMethod(e.target.value))
            setFilter("Method")
        }
    }

    function handleSort(e) {
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setOrden(e.target.value)
    }


    function handleSpecialties(e) {
        e.preventDefault();
        if (filter !== "Method") {
            dispatch(reset())
            dispatch(filterBySpecialties(e.target.value));
            setFilter("Specialties");
        } else {
            dispatch(filterBySpecialties(e.target.value));
            setFilter("Specialties");
        }
    }

    // function handleAvailableDate(e) {
    //     e.preventDefault();
    //     setChecked(!checked)
    //     if(checked) {
    //         console.log("Pase aca! -----")
    //         dispatch(filterByAvailable())
    //     }
    // }

    function handleReset(e) {
        e.preventDefault();
        dispatch(reset())
    }


    return (
        <div>
            <div className={s.tite}>
                <h1>Select your preferences to make an appointment!</h1>
            </div>
            <div className={s.conten}>
                <select className={s.filter} onChange={e => handleSort(e)}>
                    <option value="Any">Alphabetically</option>
                    <option value="AZ">Ascendant</option>
                    <option value="ZA">Descendant</option>
                </select>
                <select className={s.filter} onChange={e => handleSpecialties(e)}>
                    <option value="All">Specialties</option>
                    {allspecialties.map(data => (
                        <option value={data.name}>{data.name}</option>
                    ))}
                </select>
                <select className={s.filter} onChange={e => handleRating(e)}>
                    <option value="Any">Rating</option>
                    <option value="MinMax">Ascendant</option>
                    <option value="MaxMin">Descendant</option>
                </select>
                <select className={s.filter} onChange={e => handleMethod(e)}>
                    <option value="Any">Method</option>
                    <option value="At home">At Home</option>
                    <option value="Virtual">Virtual meeting</option>
                    <option value="Private office">Private office</option>
                </select>
                {/* <label>Available Doctor</label>
                <input type="checkbox" name="dispoCheck" value={checked} className={s.filter} onChange={e => handleAvailableDate(e)}/> */}
                <button onClick={e => handleReset(e)}>Clear</button>
            </div>


            <div className={style.paginado_container}>
                <div className={style.paginado1}>
                    <button className={style.paginado_orden} onClick={() => setCurrentPage(currentPage = 1)}>
                        {"<<"}
                    </button>
                    <button className={style.paginado_orden} onClick={() => currentPage === 1?
                        null
                        : setCurrentPage(--currentPage)}>
                        {"<"}
                    </button>
                    <p className={style.index}>
                        {currentPage} of {indexPages}
                    </p>
                    <button className={style.paginado_orden} onClick={() => currentPage === indexPages?
                        null 
                        : setCurrentPage(++currentPage)}>
                        {">"}
                    </button>
                    <button className={style.paginado_orden} onClick={() => setCurrentPage(indexPages)}>
                        {">>"}
                    </button>
                </div>
            </div>


            <div className={s.docs}>
                <div className={s.cardXdoc}>
                    {
                        currentDoctors.map(doctors => (
                            < CardDoc
                                id={doctors.id}
                                name={doctors.name}
                                image={doctors.image}
                                description={doctors.description}
                                rating={doctors.rating}
                                specialtie={doctors.specialtie}
                                commets={doctors.commets}
                            />

                        ))
                    }


                </div>

            </div>
        </div>
    )
}
