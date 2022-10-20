import React from "react";
import style from "./Nav.module.css";
import logo from "../../image/logo.png";
import { Link, useHistory } from "react-router-dom";

export default function Nav() {

   return (
      <nav className={style.navbar}>
         <div className={style.navi}>
            <Link to={'/home'}>
               <img className={style.img} src={logo} />
            </Link>
            <div>
               <ul id={style.navul}>
                  <Link to='/aboutus' className={style.link}>
                     <li>About us</li>
                  </Link>
                  
                  <Link to='#' className={style.link}>
                     <li>Get your membership</li>
                  </Link>

                  <Link to='/helpusimprove' className={style.link}>
                     <li>Help Us to Improve</li>
                  </Link>

                  <Link to='/register' className={style.link}>
                     <li>Sign up</li>
                  </Link>

                  <Link to='/login'>
                     <button className={style.boton}>Sign in</button>
                  </Link>
               </ul>
            </div>
         </div>
      </nav>
   )
};

