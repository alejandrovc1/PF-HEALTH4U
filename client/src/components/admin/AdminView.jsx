import React from "react";
import st from "./AdminView.module.css"
import TopBar from "./AdVwComponents/TopBar"
import SideBar from "./AdVwComponents/SideBar"
import HomeAdmin from "./AdVwComponents/HomeAdmin";

export default function AdminView() {

  return (
    <div>
        <TopBar/>
        <div className={st.container}>
            <SideBar/>
            <HomeAdmin/>
        </div>
    </div>
  )
}
