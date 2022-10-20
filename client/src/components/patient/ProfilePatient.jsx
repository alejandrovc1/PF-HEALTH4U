import React from "react";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import {getprofile} from '../../actions/index.js'
import {useParams} from "react-router-dom"
import ProfileDetail from "./ProfileDetailPatient.jsx";
import { useState } from "react";
import ProfileEdit from "./ProfileEditPatient.jsx";
export default function ProfilePatient({id}){
   
    const dispatch=useDispatch()
    let[edit,setEdit]=useState(false)
    let  detail=useSelector(f=>f.patientDetail)
    let props={
       

    }
    let functiionEdit=()=>{
        setEdit(edit?false:true)
    }

   
    detail?props={
        id:id,
       image:detail.image,
        name:detail.name,
       email:detail.email,
        genre:detail.genre,
        birthDate:detail.birthDate,
        address:detail.address,
        country:detail.country,
        tel:detail.tel,
        functiionEdit,
        status:detail.status
    }:console.log('algo esta pasando')
    useEffect(()=>{
        dispatch(getprofile(id))
    },[])

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
         
          
        
        
       