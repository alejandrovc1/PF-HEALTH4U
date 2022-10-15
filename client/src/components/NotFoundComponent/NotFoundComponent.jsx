import React from "react";
import { Route, Routes } from 'react-router-dom'

//Children representa todo lo que esta dentro del componente
export const NotFoundComponent = ({ children }) => {
    return (
        <Routes>
            {children}
            {/* Ruta para not found*/}
            <Route path='*' element={<h4>Not found</h4>} />
        </Routes>
    )
}