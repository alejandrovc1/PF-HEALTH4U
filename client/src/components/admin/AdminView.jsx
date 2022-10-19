import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import st from "./AdminView.module.css";
import TopBar from "./MainComponents/TopBar";
import SideBar from "./MainComponents/SideBar";
import HomeAdmin from "./HomaPage/HomeAdmin";
import HelpUsMail from "./HelpUsMail/HelpUsMail";
import Admins from './AdminList/AdminList';
import UserList from "./UserList/UserList";
import User from "./User/User";
import DoctorList from "./DoctorList/DoctorList"
import Doctor from "./Doctor/Doctor"
import Memberships from "./Memberships/Memberships"
import AppointmenstAdmin from "./AppointmensAdmin/AppointmenstAdmin"

export default function AdminView() {
  
  // const [actualPage, setActualPage] = useState("home")
  // {actualPage === "home"? <HomeAdmin/> : actualPage === "userList"? <UserList/> : actualPage === "User"? <User /> : null}

  return (
    
    <React.Fragment>
      <TopBar/>
      <div className={st.container}>
        <SideBar/>

        <Routes>
          <Route exact path='/' element={<HomeAdmin />} />
          <Route path='/helpusmail' element={<HelpUsMail />} />
          <Route path='/admins' element={<Admins />} />
          <Route path='/doctors' element={<DoctorList />} />
          <Route path='/doctor/:doctorId' element={<Doctor />} />
          <Route path='/users' element={<UserList />} />
          <Route path='/user/:userId' element={<User />} />
          <Route path='/memberships' element={<Memberships />} />
          <Route path='/appointments' element={<AppointmenstAdmin />} />
          <Route path='*' element={<HomeAdmin />} />
        </Routes>
          
      </div>
    </React.Fragment>
  )
};
