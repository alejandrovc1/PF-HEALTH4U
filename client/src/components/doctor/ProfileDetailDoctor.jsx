import React from "react";
import s from './Profile.module.css'
export default function ProfileDetail(props){
const {image,name,email,birthDate,genre,address,country,tel,functiionEdit}=props

return(
        props?<div className={s.contein}>
            
             <img src={image} añt="image"/>
                 <h3>{name}</h3>
                 <h3>{email}</h3>
                  <h3>{birthDate}</h3> 
                 <h3>{genre}</h3>
                 <h3>{address}</h3>
                 <h3>{country}</h3>
               <h3>{tel}</h3>
             <input type="button" value="edit"  onClick={functiionEdit} /> 
             </div>
            :<h1>Cargando...</h1>         
            
    )
}