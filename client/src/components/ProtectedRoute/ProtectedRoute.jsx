import React from "react"
import { Navigate, Outlet } from "react-router-dom"
//Outlet significa que dentro del componente protectedRoute van a haber muchas rutas hijo 

//Protected Route recibe un componente hijo(children) 
export const ProtectedRoute = ({ isAllowed, children, redirectTo = "/login", }) => {
    if (!isAllowed) {
        return <Navigate to={redirectTo} />
    }
    //Si hay un children(solo un componente protegido) que lo retorne, si hay muchos que retorne una de las rutas(outlet)
    return children ? children : <Outlet />
}