//Router con la logica para mostrar las rutas privadas 
import React from "react";
import { Navigate } from "react-router-dom";
import { privateRoutes } from "../helpers/routes";

export const PublicRouter = ({ children, isLogged }) => {
    //Lo que esta en children es loq ue esta en authRoutes
    return isLogged ? <Navigate replace to={`/app/${privateRoutes.HOMEPATIENT}`} /> : children
}