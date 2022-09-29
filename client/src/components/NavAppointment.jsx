import React from "react";
import style from "./Nav.module.css";
import logo from "./image/logo.png";


export default function NavAppointment(){
 
    return (
      <header>
          <nav className={style.navbar}>
             <div className={style.navi}>
                <img className={style.img} src={logo}/>
                <div>
                   <ul id={style.navul}>
                      <li><a href="index.html">Specialties</a></li>
<<<<<<<< HEAD:client/src/components/Nav.jsx
                      <li><a href="index.html">Contact Us</a></li>
                      <li><a href="index.html">Profile</a></li>
                      <li><a href="/register">Sign Up</a></li>
                      
                      <button className={style.boton}>Sign in</button>
========
                      <li><a href="index.html">My Appointments</a></li>
                      <li><a href="/account">Account</a></li>
                      <li><a href="index.html">Cart</a></li>
                      <button className={style.boton}>Sign Out</button>
>>>>>>>> cfae12370c4f120d5741cbdcd223744b137c725b:client/src/components/NavAppointment.jsx
                    </ul>
                </div>
             </div>
            </nav>
         </header>
    )
}