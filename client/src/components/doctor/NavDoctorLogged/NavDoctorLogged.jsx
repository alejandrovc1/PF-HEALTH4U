import React from "react";
import style from "../../Nav/Nav.module.css";
import logo from "../../../image/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/authContext";

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
                <Link to='/'>
                <img className={style.img} src={logo} />
                </Link>
                <div>
                    <ul id={style.navul}>
                        <Link to='/myqueries'>
                        <li><a>My Queries</a></li>
                        </Link>
                        <Link to='/profile' >
                        <li><a>Account</a></li>
                        </Link>
                        <Link to='/aboutus'>
                        <li><a>About US</a></li>
                        </Link>
                        <button className={style.boton} onClick={handleLogOut}>SIGN OUT</button>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    )
}