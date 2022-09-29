import { createContext, useContext, useEffect,useState } from "react";
import {createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        onAuthStateChanged,
        signOut,
        GoogleAuthProvider,
        signInWithPopup
  } 
  from 'firebase/auth';

import {auth} from '../firebase'

 export const authContext = createContext()

   export const useAuth = () =>{
   const context = useContext(authContext)
   return context
 }

export  function AuthProvider({children}){
      
       const [users,setUsers] = useState(null)
       const [loading,setLoading] = useState(true)

    const signup = (email,password)=>
        createUserWithEmailAndPassword(auth,email,password)
    const login = (email,password) => signInWithEmailAndPassword(auth,email,password)
    const logout = () => signOut(auth)

    const loginWithGoogle = () =>{
      const googleProvider = new GoogleAuthProvider()
     return signInWithPopup(auth,googleProvider)
    }
    
    useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth,currentUser=>{
            setUsers(currentUser)
            setLoading(false)
        })
        return () => unsubscribe()
    },[])

    return (
        <div>
            <authContext.Provider value = {{signup,login,users,logout,loading,loginWithGoogle}}>
               {children}
            </authContext.Provider>
        </div>
    )
}