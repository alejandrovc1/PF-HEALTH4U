import React from "react";
import s from './Profile.module.css'
export default function ProfileDetailDoctor(props){
const {image,name,email,specialtie,method,description,country,rating,functiionEdit}=props

return(
        props?<div className={s.contein}>
            
             <img src={image} añt="image"/>
                 <h3>{name}</h3>
                 <h3>{email}</h3>
                  <h3>{specialtie}</h3> 
                 <h3>{method}</h3>
                 <h3>{description}</h3>
                 <h3>{country}</h3>
               <h3>{rating}</h3>
             <input type="button" value="edit"  onClick={functiionEdit} /> 
             </div>
            :<h1>Cargando...</h1>         
            
    )
}