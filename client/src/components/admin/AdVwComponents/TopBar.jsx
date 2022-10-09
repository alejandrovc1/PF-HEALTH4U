import React from 'react'
import st from './TopBar.module.css'
import logo from "../../image/logo.png";
import doctor from "../../image/Doctor.png";
import {NotificationsNone, Language, Settings} from '@mui/icons-material';

export default function TopBar(){
    return (
        
        <nav className={st.topbar}>
            <div className={st.topbarWrapper}>
                <div className={st.topLeft}> 
                    <img className={st.logo} src={logo} />
                </div>
                <div className={st.topRight}> 
                    <div className={st.topbarIconsContainer}>
                        <NotificationsNone/>
                    </div> 
            
                    <div className={st.topbarIconsContainer}>
                        <Language/>
                    </div> 
            
                    <div className={st.topbarIconsContainer}>
                        <Settings/>
                    </div> 

                    <img src= {doctor} alt="Profile Picture" className={st.topAvatar}/>
                </div>
            </div>
        </nav>
    )
}