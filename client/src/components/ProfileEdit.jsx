import React from "react";
import { useState } from "react";
import s from './Profile.module.css'
import Clou from "./ImageCloudinary";
export default function ProfileDetail(props){
const {image,name,email,birthDate,genre,address,country,tel,functiionEdit}=props
let [editinput,seteditinput]=useState({
   ...props 
})

return(
        props?<div className={s.contein}>
             <img src={editinput.image} alt='image'/>
            <Clou
            seteditinput={seteditinput}
            editinput={editinput}
            />
         <input type="text" name="name" value={editinput.name} />
         <input type="text" name="email"  value={editinput.email}/>
         <input type="text" name="birthDate"  value={editinput.birthDate}/>
         <input type="text" name="genre" value={editinput.genre}/>
         <input type="text" name="address" value={editinput.address} />
         <input type="text" name="country" value={editinput.country} />
         <input type="text" name="tel" value={editinput.tel}/>
         <input type="button" value="cancel"  onClick={editinput.functiionEdit} /> 
            </div>:<h1>Cagando...</h1>
    )
}