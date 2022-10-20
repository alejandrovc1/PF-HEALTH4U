import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPatients, getquery } from "../../../actions";
import Loading from '../../Loading/Loading.jsx'
import Query from "./Query";



export default function Querys({id}){
    const dispatch =useDispatch()
    const querys=useSelector(F=>F.query)
    const patient=useSelector(f=>f.patients)
    console.log(querys)
    useEffect(()=>{
        dispatch(getquery(id))
        dispatch(getPatients(id))
    },[])
    return(
        <>
        {querys?querys.map(p=>{
            return(
                <>
                <Query
                key={p.patientID}
                status={p.status}
                start={p.start}
                end={p.end}
                patient={patient.filter(f=>f.id===p.patientID)}
                />
                </>
            )
        }):null }
        </>
    )
}