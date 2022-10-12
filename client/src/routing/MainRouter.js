import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFoundComponent } from "../components/NotFoundComponent";
import { Appointment } from '../components/patient/Appointment';
import { AppRoutes } from './AppRoutes'
import { AuthRoutes } from './AuthRoutes'
import { PublicRouter } from './PublicRouter'
import { useState } from "react";
import Home from "../components/Home";
import { PrivateRouter } from "./PrivateRouter";
import App from './../App';
import { useSelector } from "react-redux";

export const MainRouter = () => {
    // const [stateUser, setStateUser] = useState({
    //     isLogged: false,
    //     isVerified: true,
    //     isAdmin: false,
    //     isPatient: false,
    //     isDoctor: false,
    // })
    const isLogged = useSelector(f => f.isLogged)
    // const { isLogged } = stateUser

    // console.log('Estado: ', stateUser)
    return (
        <BrowserRouter>
            <Routes>

                {/* Ruta que podemos acceder estemos logeados o no*/}
                <Route path='/' element={<Home />} />
                {/* Router publico, las rutas publicas empezaran con auth, auth/register y auth/login */}
                <Route path='/auth/*'
                    element={
                        <PublicRouter isLogged={isLogged}>
                            <AuthRoutes isLogged={isLogged} />
                        </PublicRouter>}
                />
                {/* Router privado, las rutas privadas empezaran con app*/}
                <Route path='/app/*'
                    element={
                        <PrivateRouter isLogged={isLogged}>
                            <AppRoutes isLogged={isLogged} />
                        </PrivateRouter>} />

            </Routes>
        </BrowserRouter>
    )
}