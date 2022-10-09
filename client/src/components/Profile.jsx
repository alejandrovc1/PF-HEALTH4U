import React from "react";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {getprofile} from '../actions/index.js'
import {useParams} from "react-router-dom"
import ProfileDetail from "./ProfileDetail.jsx";
import { useState } from "react";
import ProfileEdit from "./ProfileEdit.jsx";
export default function Profile(){
    const { name } = useParams();
    console.log(name)
    const dispatch=useDispatch()
    let[edit,setEdit]=useState(false)
    let  detail=useSelector(f=>f.profileDetail)
    let props={
       
    }
    let functiionEdit=()=>{
        setEdit(edit?false:true)
    }
    detail.length?props={
       image:detail[0].image,
        name:detail[0].name,
       email:detail[0].email,
       birthDate:detail[0].birthDate,
        genre:detail[0].genre,
        address:detail[0].address,
        country:detail[0].country,
        tel:detail[0].tel,
        functiionEdit
    }:console.log('algo esta pasando')
    useEffect(()=>{
        console.log('entra')
        dispatch(getprofile('María Naranjo'))
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
          
        
        
       