import React from "react";
import style from "../../Nav/Nav.module.css";
import logo from "../../../image/logo.png";
import { useNavigate,Link } from "react-router-dom";
import { useAuth } from "../../../context/authContext";

export default function NavAppointment() {

    const navigate = useNavigate()

    // const { users, logout, loading } = useAuth()
    // console.log(users)


    const handleLogOut = async (e) => {
        e.preventDefault()
        try {
            localStorage.removeItem("id")
            localStorage.removeItem("token")
            window.location.reload(true)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <header>
            <nav className={style.navbar}>
                <div className={style.navi}>
                    <Link to='/home'>
                    <img className={style.img} src={logo} />
                    </Link>
                    <div>
                        <ul id={style.navul}>
                            <Link to='/appointment'>
                            <li><a>My Appointments</a></li>
                            </Link>
                            <Link to='/profile' >
                            <li><a>Account</a></li>
                            </Link>
                            <Link to='/specialties'>
                            <li><a>Specialties</a></li>
                            </Link> 
                            <Link to='/subscription'>
                            <li><a>Subscription</a></li>
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