import React from 'react';
import st from './SmWidget.module.css'
import {Visibility} from '@mui/icons-material'

export default function SmallWidget() {
  return (
    
    <div className={st.SmWidget}>
      <span className={st.SmWidgetTitle}>New Joining Members</span>
        <ul className={st.SmWidgetList}>

          <li className={st.SmWidgetListItem}> 
            <img src="https://cdn-images.livecareer.es/pages/foto_cv_lc_es_4.jpg" alt="Foto de perfil" className={st.SmWidgetImg} />
            <div className={st.SmWidgetUser}>
              <span className={st.SmWidgetUsername}>Alejandro Zuluaga H</span>
              <span className={st.SmWidgetUserRole}>Doctor</span>  
              <span className={st.SmWidgetUserCountry}>Colombia</span>
            </div>
            <button className={st.SmWidgetButton}>
              <Visibility className={st.SmWidgetIcon}/>
              Profile
            </button>
          </li>

          
          <li className={st.SmWidgetListItem}> 
            <img src="https://cdn-images.livecareer.es/pages/foto_cv_lc_es_4.jpg" alt="Foto de perfil" className={st.SmWidgetImg} />
            <div className={st.SmWidgetUser}>
              <span className={st.SmWidgetUsername}>Eliza Castaño Rosas</span>
              <span className={st.SmWidgetUserRole}>Patient</span> 
              <span className={st.SmWidgetUserCountry}>Mexico</span>
            </div>
            <button className={st.SmWidgetButton}>
              <Visibility className={st.SmWidgetIcon}/>
              Profile
            </button>
          </li>

          <li className={st.SmWidgetListItem}> 
            <img src="https://cdn-images.livecareer.es/pages/foto_cv_lc_es_4.jpg" alt="Foto de perfil" className={st.SmWidgetImg} />
            <div className={st.SmWidgetUser}>
              <span className={st.SmWidgetUsername}>Juan Sebastian Rodríguez</span>  
              <span className={st.SmWidgetUserRole}>Patient</span>  
              <span className={st.SmWidgetUserCountry}>Colombia</span>
            </div>
            <button className={st.SmWidgetButton}>
              <Visibility className={st.SmWidgetIcon}/>
              Profile
            </button>
          </li>
          
          <li className={st.SmWidgetListItem}> 
            <img src="https://cdn-images.livecareer.es/pages/foto_cv_lc_es_4.jpg" alt="Foto de perfil" className={st.SmWidgetImg} />
            <div className={st.SmWidgetUser}>
              <span className={st.SmWidgetUsername}>Victor Antonio Cuartas</span>
              <span className={st.SmWidgetUserRole}>Doctor</span> 
              <span className={st.SmWidgetUserCountry}>Argentina</span>
            </div>
            <button className={st.SmWidgetButton}>
              <Visibility className={st.SmWidgetIcon}/>
              Profile
            </button>
          </li>
          
          <li className={st.SmWidgetListItem}> 
            <img src="https://cdn-images.livecareer.es/pages/foto_cv_lc_es_4.jpg" alt="Foto de perfil" className={st.SmWidgetImg} />
            <div className={st.SmWidgetUser}>
              <span className={st.SmWidgetUsername}>Sara Castro R.</span>
              <span className={st.SmWidgetUserRole}>Patient</span> 
              <span className={st.SmWidgetUserCountry}>Argentina</span>
            </div>
            <button className={st.SmWidgetButton}>
              <Visibility className={st.SmWidgetIcon}/>
              Profile
            </button>
          </li>

        </ul>
    </div>
  )
}
