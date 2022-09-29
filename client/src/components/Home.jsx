import React from "react";
import Nav from "./Nav";
import s from "./Home.module.css";
import doctor from "./image/Doctor.png";
import pie from "./image/pieDePagina.png";


export default function Home(){
    

    return (
        <div className={s.fnd}>
          <Nav/>
          <div className={s.fondo}>
            
                <div className={s.float1}>
                  <h3 className={s.h3}>Solution For Healtcare Needs</h3>
                  <h1 className={s.title}>We Always Provide Best Service</h1>
                  <p className={s.text}>More than 50 specialist doctors waiting to assist you, makean appointment <br/>that fits your schedule</p>
                  <button className={s.boton}>Get started</button>
                </div>
                <div className={s.float}>
                     <img className={s.image} src={doctor}/>
                </div>
            </div>
             <div className={s.imgpie}>
             <img className={s.piepagina} src={pie}/>
             </div>
        </div>
    )
}
