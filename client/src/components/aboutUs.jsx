import React from "react";
import s from './aboutUs.module.css'
import img from './image/imgabout.png'
 
export default function AboutUs(){

    return(
        <div className={s.conten}>
            <div className={s.contenImg}>
                <img src={img} alt="img"/>
            </div>

            <div className={s.contenInfo}>
                <h1 className={s.tituloInfo}>Text text text</h1>
                
                <div className={s.contoenInfoMision}>
                    <h3 className={s.subtituloInfoMision}>Text text text la mision de la pagina</h3>
                    <p className={s.infoMision}>ts text text text texttexttext texttexttext
                    <br/>
                    ts text text text texttexttext texttexttext
                    <br/>
                    ts text text text texttexttext texttexttext</p>
                </div> 

                <div className={s.contoenInfoNosotros}>
                    <h3 className={s.subtituloInfoNosotros}>Text text quienes somos</h3>
                    <p className={s.infoNosotros}>ts text text text texttexttext texttexttext
                    <br/>
                    ts text text text texttexttext texttexttext
                    <br/>
                    ts text text text texttexttext texttexttext</p>
                </div> 

                <div className={s.contenButon}>
                    <button>GET AN  APPOINTMENT</button>
                </div>


            </div>
        </div>
    )
}
