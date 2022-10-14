import React from "react";
import { NavAppointment } from "../NavAppointment";
import s from "./Appointment.module.css";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getDoctors, filterBySpecialties, orderByRating, orderByName, filterByMethod, getSpecialties, reset } from "../../../actions";
import Footer from "../../Footer/Footer";
import CardDoc from '../CardDoc/CardDoc.jsx';
import Paginado from "../Paginado/Paginado.jsx";
import style from "../Paginado/Paginado.module.css"
import { Navigate } from "react-router-dom";

export default function Appointment({ user }) {
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(getPatientes());
        dispatch(getDoctors());
        dispatch(getSpecialties());
    }, [dispatch])

    const allDoctors = useSelector(state => state.doctorsCopy);

    const allspecialties = useSelector(state => state.specialties)

    const [orden, setOrden] = useState("");

    const [filter, setFilter] = useState("");

    const [currentPage, setCurrentPage] = useState(1);

    const [doctorsPerPage, setDoctorsPerPage] = useState(8);

    const indexOfLastDoctors = currentPage * doctorsPerPage;

    const indexOfFirstDoctors = indexOfLastDoctors - doctorsPerPage;

    const currentDoctors = allDoctors.slice(indexOfFirstDoctors, indexOfLastDoctors);



    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    function handlerPrev() {
        if (currentPage <= 1) return;
        paginado(currentPage - 1);
    }

    function handlerNext() {
        if (currentPage >= currentPage.length) return;
        paginado(currentPage + 1);
    }

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

    function handleReset(e) {
        e.preventDefault();
        dispatch(reset())
    }

    if (!user) {
        return <Navigate to="/login" />
    } else {
        return (
            <div>
                <NavAppointment />
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
                    <select className={s.filter}>
                        <option>Day Available</option>
                    </select>
                    <select className={s.filter}>
                        <option>Hour Available</option>
                    </select>
                    <button onClick={e => handleReset(e)}>Clear</button>
                </div>


                <div className={style.paginado_container}>
                    <div className={style.paginado1}>
                        {
                            currentPage === 1 ? <div></div> :
                                <button onClick={() => handlerPrev()} className={style.paginado_orden}>{"<"}</button>
                        }
                        <Paginado doctorsPerPage={doctorsPerPage}
                            allDoctors={allDoctors.length}
                            paginado={paginado}
                        />
                        {
                            currentPage === 2 ? <div></div> :
                                <button onClick={() => handlerNext()} className={style.paginado_orden}>{">"}</button>
                        }
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
                <Footer />
            </div>
        )
    }
}