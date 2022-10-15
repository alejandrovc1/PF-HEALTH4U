import React from "react";
import s from "./Footer.module.css"
import f from "../../image/facebook.png"
import i from "../../image/instagram.png"
import t from "../../image/gorjeo.png"
import tk from "../../image/tik-tok.png"
import w from "../../image/whatsapp.png"

export default function Footer() {
    return (
        <footer>
            <div className={s.imgpie}>
                <div className={s.signup}>
                    <p><a>Sing up</a></p>
                    <p>For Patients</p>
                    <p>For Medical Staff</p>
                </div>
                <div className={s.signin}>
                    <p><a>Sing in</a></p>
                    <p>For Patients</p>
                    <p>For Medical Staff</p>
                </div>
                <div className={s.reds}>
                    <p className={s.contac}>Contact</p>
                    <img src={f} className={s.redes} />
                    <img src={i} className={s.redes} />
                    <img src={t} className={s.redes} />
                    <img src={tk} className={s.redes} />
                    <img src={w} className={s.redes} />
                </div>
                <div className={s.help}>
                    <p><a>Help?</a></p>
                </div>
                <div className={s.copy}>
                    <p>@Health4u All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}