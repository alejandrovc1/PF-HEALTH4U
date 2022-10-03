import React from "react"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import { useAuth } from "../context/authContext"
import { Link } from "react-router-dom"


export default function Login(){
   
    
     
    const history = useHistory()
 
    function validate(user){
        let error = {}
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
    return error
}
    
    const [user,setUser] = useState({
        email:"",
        password:""
    })
    const {login,loginWithGoogle} = useAuth()
    const [error,setError]=useState({})



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
   

     const handleGoogleSignIn = async () =>{
      await loginWithGoogle()
   
     }

    const handleSubmit =async(e)=>{
        e.preventDefault()
        setError("")
        try {
            if(user.email && user.password === "Lbitrn11"){ 
           await login(user.email,user.password)

           history.push('/adminview')
            }else{
                history.push('/appointment')
            }
        

           history.push('/appointment')

        } catch (error) {
            console.log(error.code)       
            setError(error.message)
    }
     }
    
    return (
        <div>
            <h1>SIGN IN</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input 
                type = "email"
                name= "email"
                placeholder="your email"
                onChange={handleInputChange}
                />
                {error.email && <p>{error.email}</p>}
                <label htmlFor="password">Password</label>
                <input
                type = "password"
                name = "password"
                id="password"
                placeholder="*******"
                onChange={handleInputChange}
                 />
                 {error.password &&<p>{error.password}</p>}
                 <button>Login</button>
                         
            </form>
            <button onClick={handleGoogleSignIn}>Login with Google</button>
            <Link to="/"><button>Go back</button></Link>
        </div>
    )
}