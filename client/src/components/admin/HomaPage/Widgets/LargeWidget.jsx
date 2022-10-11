import React from 'react'
import './LgWidget.css'

export default function LargeWidget() {
    
    const Button = ({type}) => {
        return <button className={`LgWidgetButton ${type}`}>{type}</button>
    }

    return (

    <div className="LgWidget">
        <h3 className="LgWidgetTitle">Latest Subscriptions</h3>
        <table className="LgWidgetTable">
            <tr className="LgWidgetTr">
                <th className="LgWidgetTh">Patient</th>
                <th className="LgWidgetTh">Date</th>
                <th className="LgWidgetTh">Country</th>
                <th className="LgWidgetTh">Status</th>
            </tr>
            <tr className="LgWidgetTr">
                <td className="LgWidgetUser">
                    <img src="https://cdn-images.livecareer.es/pages/foto_cv_lc_es_4.jpg" alt="Foto de perfil" className="LgWidgetImg" />
                    <span className="LgWidgetName">Erick Ramírez</span>
                </td>
                <td className="LgWidgetDate">2-Oct-2022</td>
                <td className="LgWidgetCountry">Mexico</td>
                <td className="LgWidgetStatus">
                    <Button type="Approved"/>
                </td>
            </tr>
            <tr className="LgWidgetTr">
                <td className="LgWidgetUser">
                    <img src="https://cdn-images.livecareer.es/pages/foto_cv_lc_es_4.jpg" alt="Foto de perfil" className="LgWidgetImg" />
                    <span className="LgWidgetName">Alejandro Henao</span>
                </td>
                <td className="LgWidgetDate">30-Sep-2022</td>
                <td className="LgWidgetCountry">Colombia</td>
                <td className="LgWidgetStatus">
                    <Button type="Declined"/>
                </td>
            </tr>
            <tr className="LgWidgetTr">
                <td className="LgWidgetUser">
                    <img src="https://cdn-images.livecareer.es/pages/foto_cv_lc_es_4.jpg" alt="Foto de perfil" className="LgWidgetImg" />
                    <span className="LgWidgetName">Felipe Tau</span>
                </td>
                <td className="LgWidgetDate">28-Sep-2022</td>
                <td className="LgWidgetCountry">Argentina</td>
                <td className="LgWidgetStatus">
                    <Button type="Pending"/>
                </td>
            </tr>
            <tr className="LgWidgetTr">
                <td className="LgWidgetUser">
                    <img src="https://cdn-images.livecareer.es/pages/foto_cv_lc_es_4.jpg" alt="Foto de perfil" className="LgWidgetImg" />
                    <span className="LgWidgetName">Samantha Hernandez</span>
                </td>
                <td className="LgWidgetDate">24-Sep-2022</td>
                <td className="LgWidgetCountry">Argentina</td>
                <td className="LgWidgetStatus">
                    <Button type="Approved"/>
                </td>
            </tr>
            <tr className="LgWidgetTr">
                <td className="LgWidgetUser">
                    <img src="https://cdn-images.livecareer.es/pages/foto_cv_lc_es_4.jpg" alt="Foto de perfil" className="LgWidgetImg" />
                    <span className="LgWidgetName">Angela Franco</span>
                </td>
                <td className="LgWidgetDate">18-Sep-2022</td>
                <td className="LgWidgetCountry">Chile</td>
                <td className="LgWidgetStatus">
                    <Button type="Pending"/>
                </td>
            </tr>
        </table>
    </div>
  )
}
