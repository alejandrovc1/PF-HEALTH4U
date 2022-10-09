import React from "react";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {getprofile} from '../actions/index.js'
import {useParams} from "react-router-dom"
import ProfileDetail from "./ProfileDetail.jsx";
import { useState } from "react";
import ProfileEdit from "./ProfileEdit.jsx";
export default function Profile(){
    const { id } = useParams();
    const dispatch=useDispatch()
    let[edit,setEdit]=useState(false)
    let  detail=useSelector(f=>f.profileDetail)
    console.log(detail)
    let props={
       
    }
    let functiionEdit=()=>{
        setEdit(edit?false:true)
    }
    detail?props={
       image:detail.image,
        name:detail.name,
       email:detail.email,
       birthDate:detail.birthDate,
        genre:detail.genre,
        address:detail.address,
        country:detail.country,
        tel:detail.tel,
        functiionEdit
    }:console.log('algo esta pasando')
    useEffect(()=>{
        console.log('entra')
        dispatch(getprofile(id))
    },[])
    return(     
        !edit?<ProfileDetail
            {...props}
            />: 
            <ProfileEdit
            {...props}
            />
          
                
            )
        }
         {/* <>
         <img src={imgedit} alt='image'/>
         <input type="file"  onChange={(e)=>{setimgedit(e.target.files[0])}}/>
         <input type="text" name="name" value={editinput?.name} />
         <input type="text" name="email"  value={editinput?.email}/>
         <input type="text" name="birthDate"  value={editinput?.birthDate}/>
         <input type="text" name="genre" value={editinput?.genre}/>
         <input type="text" name="address" value={editinput?.address} />
         <input type="text" name="country" value={editinput.country} />
         <input type="text" name="tel" value={editinput.tel}/>
           </> */}
          
        
        
       