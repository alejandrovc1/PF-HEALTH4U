import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubscribe } from "../../../actions";
import { Loading } from "../../Loading";
import MercadoPago from "../MercadoPago";

export default function Subscribe({id}){

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getSubscribe(id))
    },[dispatch])

    const sub = useSelector(f=>f.sub)
    console.log(sub.substado)
    //not subscribed
    return(
        <>
        {
        sub===''?
        <Loading/>:
        sub.substado==='not subscribed'||sub==={}?
        <>
        <h1>Subscribe</h1>
        <h3>get this amazing subscription plan at a great price</h3>
        <h3>subscribe only for $2700 monthly</h3>
        <MercadoPago id={id}/>    
        </>:
        <>
        <h1>Subscribe</h1>
        <h3>you are already subscribed</h3>
        <h3>and the status of your subscription is: {sub.substado}</h3>
        </>
        }
        </>
    )
};