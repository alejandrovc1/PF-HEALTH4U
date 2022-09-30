import React from "react";
import { Link, Redirect} from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function ProtectedRoute({ hasRole:role,...children}){
const {users,loading} = useAuth()

if (loading) return <h1>loading</h1>
if(!users) return <Redirect to = "/login" />
return <>{children}</>
}