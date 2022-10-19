import React from 'react'
import st from './TopBar.module.css'
import logo from "../../../image/logo.png"
import {Link} from 'react-router-dom'
import {NotificationsNone, Language, Settings} from '@mui/icons-material';

import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TopBar(){

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
        
        <nav className={st.topbar}>
            <div className={st.topbarWrapper}>
                <div className={st.topLeft}> 
                    <img className={st.logo} src={logo} alt="Logo Health4U" />
                </div>
                <div className={st.topRight}>
                    <Link to='/adminView/helpusmail' style={{"text-decoration": "none", "color": "#141616"}}>
                        <div className={st.topbarIconsContainer}>
                            <NotificationsNone/>
                        </div> 
                    </Link>
            
                    <div className={st.topbarIconsContainer}>
                        <Language/>
                    </div> 
            
                    <div className={st.topbarIconsContainer}>
                        <Settings/>
                    </div>

                    <Dropdown>
                        <Dropdown.Toggle variant='#D7FCF1' id="dropdown-basic">
                            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/surgeon-5682858-4731206.png" alt="Foto de perfil" className={st.topAvatar}/>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                        <Dropdown.Item onClick={handleLogOut}>Sing Out</Dropdown.Item>
                        <Dropdown.Item href="http://localhost:3000/">Home Page</Dropdown.Item>
                        <Dropdown.Item href="http://www.gmail.com">Gmail</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                </div>
            </div>
        </nav>
    )
};


