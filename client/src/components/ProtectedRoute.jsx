import React from "react";
import { Link} from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function ProtectedRoute({children}){
const {users,loading} = useAuth()
if (loading) return <h1>loading</h1>
if(!users) return <Link to= "/login"></Link>
return <>{children}</>
}