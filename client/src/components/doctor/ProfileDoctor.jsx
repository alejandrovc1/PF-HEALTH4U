import React from "react";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {getDetails} from '../../actions/index.js'
import {useParams} from "react-router-dom"
import ProfileDetail from "./ProfileDetailDoctor.jsx";
import { useState } from "react";
import ProfileEdit from "./ProfileEditDoctor.jsx";
export default function ProfileDoctor({id}){

    const dispatch=useDispatch()
    let[edit,setEdit]=useState(false)
    let  detail=useSelector(f=>f.doctorDetail)
    let props={
       
    }
    let functiionEdit=()=>{
        setEdit(edit?false:true)
    }
   
    detail?props={
       image:detail.image,
        name:detail.name,
       email:detail.email,
       specialtie:detail.specialtie,
       method:detail.method,
        country:detail.country,
        description:detail.description,
        rating:detail.rating,
        functiionEdit,
        status:detail.status
    }:console.log('algo esta pasando')
        dispatch(getDetails(id))
    console.log(id)
    return(     
        !edit?<ProfileDetail
            {...props}
            />: 
            <ProfileEdit
            {...props}
            />
          
                
            )
        }
         
          
        
        
       