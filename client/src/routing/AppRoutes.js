//RUTAS QUE SE MUESTRAN CUANDO SE INICIE SESION - RUTAS PRIVADAS 
import React from "react";
import { Route } from "react-router-dom";
import NotFoundComponent from "../components/NotFoundComponent";
import { privateRoutes } from "../helpers/routes";
import HomeDocLogged from '../components/doctor/HomeDocLogged';
import AdminView from '../components/admin/AdminView';
import Appointment from "../components/patient/Appointment";

export const AppRoutes = () => {
    return (
        <notFoundComponent>
            <Route path={privateRoutes.HOMEPATIENT} element={<Appointment />} />
            <Route path={privateRoutes.HOMEDOCTOR} element={<HomeDocLogged />} />
            <Route path={privateRoutes.HOMEADMIN} element={< AdminView />} />
            {/* <Route path='*' element={<h2>Not found</h2>}/>*/}
        </notFoundComponent >
    )
}