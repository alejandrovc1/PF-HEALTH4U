import React from 'react';
import st from './SideBar.module.css';
import {Home, Timeline, TrendingUp, MailOutline, MoveToInbox, MarkChatUnread, AdminPanelSettings, PersonOutline, Groups2, Storage, Insights, ReportGmailerrorred} from '@mui/icons-material';


export default function SideBar({actualizar}) {
  return (
    <div className={st.sidebar}>
      
      <div className={st.sidebarWrapper}>
        <div className={st.sidebarMenu}>
          <h3 className={st.sidebarTitle}>Dashboard</h3>
          <ul className={st.sidebarList}>
            <li onClick = {() => {actualizar("home")}} className={st.sidebarListItem}>
              <Home className={st.sidebarIcon}/>
              Home
            </li>
            <li className={st.sidebarListItem}>
              <Timeline className={st.sidebarIcon}/>
              Analytics
            </li>
            <li className={st.sidebarListItem}>
              <TrendingUp className={st.sidebarIcon}/>
              Sales
            </li>
          </ul>
        </div>

        <div className={st.sidebarMenu}>
          <h3 className={st.sidebarTitle}>Notifications</h3>
          <ul className={st.sidebarList}>
            <li className={st.sidebarListItem}>
              <MailOutline/>
              &nbsp; Mail
            </li>
            <li className={st.sidebarListItem}>
              <MoveToInbox/>
              &nbsp; Help us to improve
            </li>
            <li className={st.sidebarListItem}>
              <MarkChatUnread/>
              &nbsp; Messages
            </li>
          </ul>
        </div>

        <div className={st.sidebarMenu}>
          <h3 className={st.sidebarTitle}>Users</h3>
          <ul className={st.sidebarList}>
            <li className={st.sidebarListItem}>
              <AdminPanelSettings/>
              &nbsp; Admins
            </li>
            <li className={st.sidebarListItem}>
              <PersonOutline/>
              &nbsp; Doctors
            </li>
            <li onClick = {() => {actualizar("userList")}} className={st.sidebarListItem}>
              <Groups2/>
              &nbsp; Patiens
            </li>
          </ul>
        </div>

        <div className={st.sidebarMenu}>
          <h3 className={st.sidebarTitle}>Merberships</h3>
          <ul className={st.sidebarList}>
            <li className={st.sidebarListItem}>
              <Storage/>
              &nbsp; Manage
            </li>
            <li className={st.sidebarListItem}>
              <Insights/>
              &nbsp; Analytics
            </li>
            <li className={st.sidebarListItem}>
              <ReportGmailerrorred/>
              &nbsp; Reports
            </li>
          </ul>
        </div>
      </div>  
      
    </div>
  )
}
