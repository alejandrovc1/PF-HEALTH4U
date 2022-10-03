import React from "react"
import { useState,useEffect } from "react"
import { useAuth } from "../context/authContext"
import { useHistory } from "react-router-dom"
import roles from '../helpers/roles'




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
        if(!user.dni){
            error.dni = "DNI is required"
        }else if(!/^[\d]{1,3}\.?[\d]{3,3}\.?[\d]{3,3}$/.test(user.dni.trim())){
          error.dni = "DNI not valid"
    }
    return error
}

    const [user,setUser] = useState({
        fullname:"",
        email:"",
        password:"",
        confirmPassword:"",
        dateOfBirth:"",
        dni:"",
        typeGenre:[],
        typeUser:[]
    })

    useEffect(() => console.log(user), [user])
   

    const {signup} = useAuth()
    
    function handleInputChange(e){

        setUser({
            ...user,
            [e.target.name]:e.target.value
        })   
    setError(validate({
        ...user,
        [e.target.name]:e.target.value
}))
 }

 function handleSelectedGenre(e){
    if(e.target.value !== "select"){
    setUser({
        ...user,
    typeGenre:[e.target.value],
    
})
 }
}
function handleSelectedUser(e){
if(e.target.value !== "select"){
    setUser({
        ...user,
    typeUser:[e.target.value]
})
}
}
 
   // if(error.code === "auth/internal-error")
    const handleSubmit =async(e)=>{

e.preventDefault()
if(Object.entries(error).length === 0){
    await signup(user.email,user.password,user.fullname,user.confirmPassword,user.dateOfBirth,user.typeGenre,user.typeUser)
           setUser({
            fullname:"",
            email:"",
            password:"",
            confirmPassword:"",
            dateOfBirth:"",
            typeGenre:[],
            typeUser:[]
            })
           history.push('/login')

     }
    }
    
    return (
        
        <div>
            
            <h1>USUARY REGISTER</h1>
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
                <label>Identification</label>
                <input
                type = "number"
                name = "dni"
                value = {user.dni}
                onChange={handleInputChange}
                 />
                {error.dni && <p>{error.dni}</p>}
                <label>Genre:</label>
                <select onChange={handleSelectedGenre}>
               <option value ="select">Select you genre</option>
                <option value ="male">Male</option>
                <option value = "female">Female</option>
                </select>
                <label>User</label>
                <select id = "rol" onChange={handleSelectedUser}>
                <option value ="select">Select the user</option>
                <option value = "admin">Administrator</option>
                <option value = "doctor">Doctor</option>
                <option value= "patient">Patient</option>
                <label>User</label>
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