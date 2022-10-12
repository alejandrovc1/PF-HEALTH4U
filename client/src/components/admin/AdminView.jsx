import React, { useState } from "react";
import st from "./AdminView.module.css";
import TopBar from "./MainComponents/TopBar";
import SideBar from "./MainComponents/SideBar";
import HomeAdmin from "./HomaPage/HomeAdmin";
import UserList from "./UserList/UserList";

export default function AdminView() {
  
  const [actualPage, setActualPage] = useState("userList")

  return (
    
    <React.Fragment>
      <TopBar/>
      <div className={st.container}>
        <SideBar actualizar={setActualPage}/>
        
        {actualPage === "home"? <HomeAdmin/> : actualPage === "userList"? <UserList/> : null }

        {/* {actualPage === "userList"? <UserList/> : null } */}
        
      </div>
    </React.Fragment>
  )
};
