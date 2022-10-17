import React from "react";
import style from "./Nav.module.css";
import logo from "../../image/logo.png";
import { Link, useHistory } from "react-router-dom";


function Nav() {

   return (
      <header>
         <nav className={style.navbar}>
            <div className={style.navi}>
               <Link to={'/home'}>
               <img className={style.img} src={logo} />
               </Link>
               <div>
                  <ul id={style.navul}>
                     <Link to='/aboutus'>
                     <li><a>About us</a></li>
                     </Link>

                     <li><a href="index.html">Get your membership</a></li>
                     <Link to='/register'>
                     <li><a>Sign up</a></li>
                     </Link>
                     <Link to='/login'>
                     <button className={style.boton}>Sign in</button>
                     </Link>
                  </ul>
               </div>
            </div>
         </nav>
      </header>
   )
}

export default Nav;

