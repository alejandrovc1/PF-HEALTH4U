import React from "react";
import style from "./Nav.module.css";
import logo from "./image/logo.png";
import { Route, Link } from "react-router-dom";


export default function NavDoctorLogged()
{

    return (
        <header>
            <nav className={style.navbar}>
                <div className={style.navi}>
                    <img className={style.img} src={logo} />
                    <div>
                        <ul id={style.navul}>
                            <li><a href="index.html">My Schedule</a></li>
                            <div>
                                <Link to="/account" className={style.account}>Account</Link>
                            </div>
                            <li><a href="index.html">My Finances</a></li>
                            <li><a>Hello, Dr. </a></li>
                            <button className={style.boton}>SIGN OUT</button>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}