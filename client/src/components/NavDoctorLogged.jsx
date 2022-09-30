import React from "react";
import style from "./Nav.module.css";
import logo from "./image/logo.png";


export default function Nav(name)
{

    return (
        <header>
            <nav className={style.navbar}>
                <div className={style.navi}>
                    <img className={style.img} src={logo} />
                    <div>
                        <ul id={style.navul}>
                            <li><a href="index.html">My Schedule</a></li>
                            <li><a href="index.html">Account</a></li>
                            <li><a href="index.html">My Finances</a></li>
                            <li><a>Hello, Dr.{name} </a></li>
                            <button className={style.boton}>SIGN OUT</button>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}