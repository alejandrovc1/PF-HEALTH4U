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
                    <p>Sign up</p>
                    <p><a href="https://health4u.vercel.app/register">For Patients</a></p>
                    <p><a href="https://health4u.vercel.app/register">For Medical Staff</a></p>
                </div>
                <div className={s.signin}>
                    <p>Sign in</p>
                    <p><a href="https://health4u.vercel.app/login">Patients</a></p>
                    <p><a href="https://health4u.vercel.app/login">Medical Staff</a></p>
                </div>
                <div className={s.reds}>
                    <p className={s.contac}>Contact</p>
                    <a href="https://wwww.facebook.com/"><img src={f} className={s.redes} /></a>
                    <a href="https://wwww.instagram.com/"><img src={i} className={s.redes} /></a>
                    <a href="https://twitter.com/"><img src={t} className={s.redes} /></a>
                    <a href="https://web.whatsapp.com/"><img src={w} className={s.redes} /></a>
                </div>
                <div className={s.help}>
                    <p><a href="https://health4u.vercel.app/helpusimprove">Help us improve</a></p>
                </div>
                <div className={s.copy}>
                    <p>@Health4u 2022 - All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}