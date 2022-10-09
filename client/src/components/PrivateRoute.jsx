import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function PrivateRoute({ hasRole: role, ...rest }) {
    const { users, hasRole } = useAuth()
    console.log(users)
    console.log(hasRole)

    if (role && !hasRole(role)) return <Navigate to="/" />

    if (!users) return <Navigate to="/login" />
    
    return (
        <Route {...rest} />
    )
}