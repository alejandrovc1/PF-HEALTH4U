import React from "react";
import { useState } from "react";
import s from './Profile.module.css'
import Clou from "../ImageCloudinary/ImageCloudinary.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getSpecialties, putprofile, updateDoctor } from "../../actions";
import { useParams } from "react-router-dom";

export default function ProfileEditlDoctor(props){
const {image,name,email,birthDate,genre,address,country,tel,functiionEdit}=props


let [editinput,seteditinput]=useState({
    ...props 
})

let [error,seterror]=useState('')
console.log(editinput)
const onChangeInput=(e)=>{
  console.log(e.target.name)
   seterror(validationError({...editinput,[e.target.name]:e.target.value}))
    seteditinput({...editinput,[e.target.name]:e.target.value})
}
const validationInput=()=>{
   if(editinput.name&&
    editinput.email&&
    editinput.description&&
    editinput.method&&
    editinput.country&&
    editinput.specialtie&&
    editinput.image&&
    !error.name&&
    !error.email&&
    !error.description&&
    !error.method&&
    !error.country&&
    !error.image&&
    !error.specialtie){return true}
    
    return false
}
const Update=()=>{
  dispatch(updateDoctor(props.id,editinput))
  window.location.reload(true);
}
const validationError=(input)=>{
    let err={}
    if (!input.name) {
        err.name = "The name is required.";
      }
    if(input.name&&input.name.length<5){
        err.name='Check the name'
    } if(input.name&&input.name.length>30){
        err.name='Check the name'
    }
    if (input.name[0]===' ') {
        err.name = "Only letters and spaces.";
      }
      if ( !/https?:\/\/(www.)?[-a-zA-Z0-9@:%.+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&//=]*)/.test(
      input.image
      )){
        err.image = "The a valid image URL.";
      }
      if(!input.method){
        err.method='The Method is required.'
      }
      if(input.method==='select'){
        err.method='The Method is required.'
      }
      if(!input.country){
        err.country='The country is required.'
      }
      if(!input.specialtie){
        err.specialtie='The Specialtie is required.'
      }
      if(input.specialtie==='select'){
        err.specialtie='The specialtie is required.'
      }
      if(!input.country){
        err.country='The country is required.'
      }
      if (!input.description) {
        err.description = "The description is required.";
      }
    if(input.description&&input.description.length<5){
        err.description='Check the description'
    } if(input.description&&input.description.length>50){
        err.description='Check the description'
    }
     
      if(!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(input.email)){
        err.email='Must be a valid email'
      }
  
    return err
}
const dispatch=useDispatch()
React.useEffect(()=>{
  dispatch(getSpecialties())
},[])
const specialties=useSelector(f=>f.specialties)
console.log(specialties)
console.log(validationInput(), error)
return(
        props?<div className={s.contein}>
             <img src={editinput.image} alt='image'/>
             {error.image?<span>{error.image}</span>:null }
            <Clou
            seteditinput={seteditinput}
            editinput={editinput}
            seterror={seterror}
            validationError={validationError}
            />
         <input type="text" name="name" value={editinput.name} placeholder='name' onChange={onChangeInput}/>
         {error.name?<span>{error.name}</span>:null }
         <input type="text" name="email"  value={editinput.email}placeholder='email' onChange={onChangeInput}/>
         {error.email?<span>{error.email}</span>:null }
         {/*"T00:00:00.000Z" agregar al momento de mandar put en birthDate*/}
         <h3>{editinput.method}</h3>
         <select name="method" onChange={onChangeInput} >
         <option value='select'>Select</option>
         <option value="At home">At home</option>
         <option value="Virtual">Virtual</option>
         <option value="Private Office">Private Office</option>
         </select>
         {error.method?<span>{error.method}</span>:null }
         <input type="text" name="country" value={editinput.country}placeholder='country' onChange={onChangeInput} />
         {error.country?<span>{error.country}</span>:null }
         <textarea type="text" name="description" value={editinput.description}placeholder='description' onChange={onChangeInput} />
         {error.description?<span>{error.description}</span>:null }
         <h3>{editinput.specialtie}</h3>
         {error.specialtie?<span>{error.specialtie}</span>:null }
         <select  onChange={onChangeInput} name='specialtie'>
         <option value='select'>Select</option>
         {specialties?specialties.map(s=>{
           return(
             <option name='specialtie' key={s.name} value={s.name} >{s.name}</option>
             )
            }):null}
          </select>
         <input type="button" value="cancel"  onClick={editinput.functiionEdit} /> 
            {validationInput()?<input type="button" value="update" onClick={Update}/>:null }
            </div>
            :<h1>Cagando...</h1>
    )
}