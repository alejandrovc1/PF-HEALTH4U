import React from "react";
import style from "../Nav.module.css";
import logo from "../image/logo.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

export default function NavDoctorLogged() {

    const history = useNavigate()

    const { users, logout, loading } = useAuth()
    console.log(users)


    const handleLogOut = async () => {
        await logout()
        history.push("/login")
    }


    return (
        <header>
            <nav className={style.navbar}>
                <div className={style.navi}>
                    <img className={style.img} src={logo} />
                    <div>
                        <ul id={style.navul}>
                            <li><a href="index.html">My Schedule</a></li>
                            <li><a href="/account">Account</a></li>
                            <li><a href="index.html">My Finances</a></li>
                            <li><a>Hello, Dr. </a></li>
                            <button className={style.boton} onClick={handleLogOut}>SIGN OUT</button>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}