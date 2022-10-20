import React from "react";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {getDetails} from '../../actions/index.js'
import {useParams} from "react-router-dom"
import ProfileDetailDoctor from "./ProfileDetailDoctor.jsx";
import { useState } from "react";
import ProfileEditlDoctor from "./ProfileEditDoctor.jsx";
export default function ProfileDoctor({id}){

    const dispatch=useDispatch()
    let[edit,setEdit]=useState(false)
    let  detail=useSelector(f=>f.doctorDetail)
    let props={
       
    }
    let functiionEdit=()=>{
        setEdit(edit?false:true)
    }
    let rating='';
   if(detail.rating)rating=detail.rating.toString().slice(0,3)
    detail?props={
        id:id,
       image:detail.image,
        name:detail.name,
       email:detail.email,
       specialtie:detail.specialtie,
       method:detail.method,
        country:detail.country,
        description:detail.description,
        rating:rating,
        functiionEdit,
        status:detail.status
    }:console.log('algo esta pasando')
    React.useEffect(()=>{
        dispatch(getDetails(id))
    },[dispatch])
    return(     
        !edit?<ProfileDetailDoctor
            {...props}
            />: 
            <ProfileEditlDoctor
            {...props}
            />
          
                
            )
        }
         
          
        
        
       