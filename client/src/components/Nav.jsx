import React from "react";
import style from "./Nav.module.css";
import logo from "./image/logo.png";
import { Link, useHistory } from "react-router-dom";


export default function Nav() {

   return (
      <header>
         <nav className={style.navbar}>
            <div className={style.navi}>
               <img className={style.img} src={logo} />
               <div>
                  <ul id={style.navul}>
                     <li><a href="index.html">Specialties</a></li>
                     <li><a href="index.html">About us</a></li>
                     <li><a href="index.html">Cart</a></li>
                     <li><a href="/register">Sign up</a></li>
                     <a href="/login"><button className={style.boton}>Sign in</button></a>
                  </ul>
               </div>
            </div>
         </nav>
      </header>
   )
}

