import React from 'react'
import st from './TopBar.module.css'
import logo from "../../image/logo.png";
import {NotificationsNone, Language, Settings} from '@mui/icons-material';

export default function TopBar(){
    return (
        
        <nav className={st.topbar}>
            <div className={st.topbarWrapper}>
                <div className={st.topLeft}> 
                    <img className={st.logo} src={logo} alt="Logo Health4U" />
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

                    <img src="https://cdn3d.iconscout.com/3d/premium/thumb/surgeon-5682858-4731206.png" alt="Foto de perfil" className={st.topAvatar}/>
                </div>
            </div>
        </nav>
    )
}