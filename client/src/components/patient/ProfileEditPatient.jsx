import React from "react";
import { useState } from "react";
import s from './Profile.module.css'
import Clou from "../ImageCloudinary/ImageCloudinary";
import { useDispatch } from "react-redux";
import { putprofile } from "../../actions";
import { useNavigate, useParams } from "react-router-dom";
export default function ProfileDetail(props) {
  const { image, name, email, birthDate, genre, address, country, tel, functiionEdit } = props

  let [editinput, seteditinput] = useState({
    ...props
  })
  if (editinput.birthDate) {
    editinput.birthDate = editinput.birthDate.substring(0, 10)
  }
  let [error, seterror] = useState('')
  const onChangeInput = (e) => {
    seterror(validationError({ ...editinput, [e.target.name]: e.target.value }))
    seteditinput({ ...editinput, [e.target.name]: e.target.value })
  }
  const validationInput = () => {
    if (editinput.name &&
      editinput.email &&
      editinput.birthDate &&
      editinput.genre &&
      editinput.address &&
      editinput.country &&
      editinput.tel &&
      !error.name &&
      !error.email &&
      !error.birthDate &&
      !error.genre &&
      !error.address &&
      !error.country &&
      !error.tel) { return true }

    return false
  }
  const navigate = useNavigate()
  const Update = () => {
    dispatch(putprofile(id, editinput))
    window.location.reload(true);
  }
  const validationError = (input) => {
    let err = {}
    if (!input.name) {
      err.name = "The name is required.";
    }
    if (input.name && input.name.length < 5) {
      err.name = 'Check the name'
    } if (input.name && input.name.length > 30) {
      err.name = 'Check the name'
    }
    if (!/^[a-zA-Z ]+$/.test(input.name)) {
      err.name = "Only letters and spaces.";
    }
    if (!/https?:\/\/(www.)?[-a-zA-Z0-9@:%.+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&//=]*)/.test(
      input.image
    )) {
      err.image = "The a valid image URL.";
    }
    if (!input.birthDate) {
      err.birthDate = 'The birthDate is required.'
    }
    if (!input.address) {
      err.address = 'The address is required.'
    }
    if (!input.country) {
      err.country = 'The country is required.'
    }
    if (input.genre !== 'Female') {
      if (input.genre !== 'Male') {
        err.genre = 'Field must be Female or Male'
      }
    }

    if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(input.email)) {
      err.email = 'Must be a valid email'
    }
    if (!input.tel) {
      err.tel = 'The phone is required.'
    }
    if (!parseInt(input.tel)) {
      err.tel = 'The phone is required.'
    }
    return err
  }
  const dispatch = useDispatch()
  const { id } = useParams()
  return (
    props ? <div className={s.contein}>
      <img src={editinput.image} alt='image' />
      {error.image ? <span>{error.image}</span> : null}
      <Clou
        seteditinput={seteditinput}
        editinput={editinput}
        seterror={seterror}
        validationError={validationError}
      />
      <input type="text" name="name" value={editinput.name} placeholder='name' onChange={onChangeInput} />
      {error.name ? <span>{error.name}</span> : null}
      <input type="text" name="email" value={editinput.email} placeholder='email' onChange={onChangeInput} />
      {error.email ? <span>{error.email}</span> : null}
      {/*"T00:00:00.000Z" agregar al momento de mandar put en birthDate*/}
      <input type="date" name="birthDate" value={editinput.birthDate} placeholder='birthDate' onChange={onChangeInput} />
      {error.birthDate ? <span>{error.birthDate}</span> : null}
      <input type="text" name="genre" value={editinput.genre} placeholder='genre' onChange={onChangeInput} />
      {error.genre ? <span>{error.genre}</span> : null}
      <input type="text" name="address" value={editinput.address} placeholder='address' onChange={onChangeInput} />
      {error.address ? <span>{error.address}</span> : null}
      <input type="text" name="country" value={editinput.country} placeholder='country' onChange={onChangeInput} />
      {error.country ? <span>{error.country}</span> : null}
      <input type="text" name="tel" value={editinput.tel} placeholder='phone' onChange={onChangeInput} />
      {error.tel ? <span>{error.tel}</span> : null}
      <input type="button" value="cancel" onClick={editinput.functiionEdit} />
      {validationInput() ? <input type="button" value="update" onClick={Update} /> : null}
    </div>
      : <h1>Cagando...</h1>
  )
}