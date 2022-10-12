//Router con la logica para mostrar las rutas privadas 
import React from "react";
import { Navigate } from "react-router-dom";
import { publicRoutes } from "../helpers/routes";

export const PrivateRouter = ({ children, isLogged }) => {
    //Lo que esta en children es loq ue esta en authRoutes
    console.log(isLogged)
    return isLogged ? children : null
}