//RUTAS QUE SE MUESTRAN ANTES DE INICIAR SESION - RUTAS PUBLICAS
import React from "react";
import { Route } from "react-router-dom";
import {NotFoundComponent} from "../components/NotFoundComponent";
import { publicRoutes } from "../helpers/routes";
import Login from "../components/Login";
import Register  from "../components/Register";

//Aqui se recibe el estado del usuario 
//Modificar con redux
export const AuthRoutes = ({ stateUser, setStateUser }) => {
    return (
        <NotFoundComponent>
            <Route path={publicRoutes.LOGIN} element={<Login setStateUser={setStateUser} stateUser={stateUser} />} />
            <Route path={publicRoutes.REGISTER} element={<Register />} />
            {/* <Route path='*' element={<h2>Not found</h2>}/>*/}
        </NotFoundComponent>
    )
}