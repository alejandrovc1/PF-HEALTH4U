import React from "react";
import { Link, Redirect, Route } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function ProtectedRoute({ hasRole: role, ...rest }) {
    const { users, hasRole } = useAuth()
    console.log(users)
    console.log(hasRole)

    if (role && !hasRole(role)) return <Redirect to="/" />


    if (!users) return <Redirect to="/login" />
    return <Route {...rest} />
}