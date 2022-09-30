import React from "react"
import { useState } from "react"
import { useAuth } from "../context/authContext"
import { useHistory } from "react-router-dom"




export default function Register(){
    const history = useHistory()

    const [error,setError]=useState({})

    function validate(user){
        let error = {}
        if(!user.fullname){
            error.fullname = "Fullname is required"
        }else if((!/^([a-zA-Z]+)(\s[a-zA-Z]+)*$/.test(user.fullname.trim()))){
            error.fullname= "Input only accepts letter"
        }
        if(!user.email){
            error.email = "Email is required"
        }else if((!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(user.email.trim()))){
            error.email = "Input only accepts valids emails"
        }
        if(!user.password){
            error.password = "Password is required"
        }else if((!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(user.password.trim()))){
         error.password = "The password must be between 8 and 16 characters long, with at least one digit, at least one lowercase letter, and at least one uppercase letter"
        }
        if(!user.confirmPassword){
            error.confirmPassword = "Please, confirm the password"
        }else if(user.password !== user.confirmPassword){
            error.confirmPassword = "The passwords must be equals"
        }
        if(!user.dateOfBirth){
            error.dateOfBirth = "Birth date is required"
        }
        return error
    }

    const [user,setUser] = useState({
        fullname:"",
        email:"",
        password:"",
        confirmPassword:"",
        dateOfBirth:"",
        typeGenre:[]
    })

    const {signup} = useAuth()
    
    function handleInputChange(e){
        console.log(user)
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })   
    setError(validate({
        ...user,
        [e.target.name]:e.target.value
}))
 }

 function handleSelected(e){
    if(!user.typeGenre.includes(e.target.value))
    setUser({
        ...user,
    typeGenre:[...user.typeGenre,e.target.value]})
 }
 
   // if(error.code === "auth/internal-error")
    const handleSubmit =async(e)=>{
        e.preventDefault()
        try {
           await signup(user.email,user.password,)
           setUser({
            fullname:"",
            email:"",
            password:"",
            confirmPassword:"",
            dateOfBirth:"",
            typeGenre:[]
            })
           history.push('/home')
        } catch (error) {
            console.log(error.code)       
            setError(error.message)
    }
     }
    return (
        <div>
            <h1>DOCTOR REGISTER</h1>
              <form onSubmit={handleSubmit}>
                <div>
                 <label>FullName</label>
                 <input 
                type= "text"
                placeholder="Write your fullname"
                name = "fullname"
                value = {user.fullname}
                onChange={handleInputChange}
                />
                {error.fullname&&<p>{error.fullname}</p>}
                </div>
                <label htmlFor="email">Email</label>
                <input 
                type = "email"
                name= "email"
                value = {user.email}
                placeholder="your email"
                onChange={handleInputChange}
                />
                {error.email&&<p>{error.email}</p>}
                <label htmlFor="password">Password</label>
                <input
                type = "password"
                name = "password"
                id="password"
                placeholder="*******"
                value = {user.password}
                onChange={handleInputChange}
                 />
                 {error.password &&<p>{error.password}</p>}
                <label>Confirm Password</label>
                <input
                type = "password"
                placeholder="Re password"
                name = "confirmPassword"
                value = {user.confirmPassword}
                onChange={handleInputChange}
                />
                {error.confirmPassword && <p>{error.confirmPassword}</p>}
                <label>Date of birth</label>
                <input
                type = "date"
                name = "dateOfBirth"
                value = {user.dateOfBirth}
                onChange={handleInputChange}
                 />
                 {error.dateOfBirth && <p>{error.dateOfBirth}</p>}
                <label>Genre:</label>
                <select onChange={handleSelected}>
                <option selected>Select your genre</option>
                <option value ="male">Male</option>
                <option value = "female">Female</option>
                </select>
                <button type = "submit">Register</button>
               </form>
             <p>
             Already have an account?
            <a
             href="/login"
             >
               LogIn
               </a>
              </p>
            </div>
    )
}