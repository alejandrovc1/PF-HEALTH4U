import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth';

import { auth } from '../firebase'
// import roles from "../helpers/roles";

export const authContext = createContext()

export const useAuth = () => {
    const context = useContext(authContext)
    return context
}

export function AuthProvider({ children }) {

    const [users, setUsers] = useState(null)

    const signup = (email, password) =>
        createUserWithEmailAndPassword(auth, email, password)

    const login = (email, password) => signInWithEmailAndPassword(auth, email, password)
    const logout = () => signOut(auth)

    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }
    //const existTokenInLocal = localStorage.getItem("token")

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUsers(currentUser)
        })
        return () => unsubscribe()
    }, [])

    return (
        <div>
            <authContext.Provider value={{ signup, login, users, logout, loginWithGoogle}}>
                {children}
            </authContext.Provider>
        </div>
    )
}