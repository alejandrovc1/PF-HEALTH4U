import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPatients, getquery } from "../../../actions";
import Loading from '../../Loading/Loading.jsx'



export default function Query({id,status,start,end,patient}){
    
    return(
        <>
                <h3>{status}</h3>
                <h3>{start}</h3>
                <h3>{end}</h3>
                <h3>{patient}</h3>
        </>
    )
}