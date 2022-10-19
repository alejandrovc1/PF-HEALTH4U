import React from 'react';
import st from './SideBar.module.css';
import {Home, Timeline, TrendingUp, MailOutline, MoveToInbox, MarkChatUnread, AdminPanelSettings, PersonOutline, Groups2, Storage, Insights, EventAvailable} from '@mui/icons-material';
import { Link } from 'react-router-dom';


export default function SideBar() {
  return (
    <div className={st.sidebar}>
      
      <div className={st.sidebarWrapper}>
        <div className={st.sidebarMenu}>
          <h3 className={st.sidebarTitle}>Dashboard</h3>
          <ul className={st.sidebarList}>
            <li className={st.sidebarListItem}>
              <Link to='/adminView' className={st.link}>
                <Home className={st.sidebarIcon}/>
                Home
              </Link>
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
              <a href="http://www.gmail.com" className={st.link}>
                <MailOutline className={st.sidebarIcon}/>
                Mail
              </a>
            </li>
            <li className={st.sidebarListItem}>
              <Link to='/adminView/helpusmail' className={st.link}>
                <MoveToInbox className={st.sidebarIcon}/>
                Help us to improve
              </Link>
            </li>
            <li className={st.sidebarListItem}>
              <MarkChatUnread className={st.sidebarIcon}/>
              Messages
            </li>
          </ul>
        </div>

        <div className={st.sidebarMenu}>
          <h3 className={st.sidebarTitle}>Users</h3>
          <ul className={st.sidebarList}>
            <li className={st.sidebarListItem}>
              <Link to='/adminView/admins' className={st.link}>
                <AdminPanelSettings className={st.sidebarIcon}/>
                Admins
              </Link>
            </li>
            <li className={st.sidebarListItem}>
              <Link to='/adminView/doctors' className={st.link}>
                <PersonOutline className={st.sidebarIcon}/>
                Doctors
              </Link>
            </li>
            <li className={st.sidebarListItem}>
              <Link to='/adminView/users' className={st.link}>
                <Groups2 className={st.sidebarIcon}/>
                Patiens
              </Link>
            </li>
          </ul>
        </div>

        <div className={st.sidebarMenu}>
          <h3 className={st.sidebarTitle}>Merberships</h3>
          <ul className={st.sidebarList}>
            <li className={st.sidebarListItem}>
              <Link to='/adminView/memberships' className={st.link}>
                <Storage className={st.sidebarIcon}/>
                Memberships
              </Link>
            </li>
            <li className={st.sidebarListItem}>
              <Insights className={st.sidebarIcon}/>
              Analytics
            </li>
            <li className={st.sidebarListItem}>
              <Link to='/adminView/appointments' className={st.link}>
                <EventAvailable className={st.sidebarIcon}/>
                Appointments
              </Link>
            </li>
          </ul>
        </div>
      </div>  
      
    </div>
  )
};
