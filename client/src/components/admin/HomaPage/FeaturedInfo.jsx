import React from 'react';
import st from './featuredInfo.module.css';
import {ArrowDownward, ArrowUpward} from '@mui/icons-material'

export default function featuredInfo() {

  return (
    <div className={st.featured}>

      <div className={st.featuredItem}>
        <span className={st.featuredTitle}> Actual Month Revenue </span>
        <div className={st.featuredMoneyCont}>
          <span className={st.featuredMoney}> USD 852 </span>
          <span className={st.featuredMoneyRate}>
            -45.0 <ArrowDownward className={st.featuredIcon_negative}/>
          </span>
        </div>
        <span className={st.featuredSub}>Compared to last month</span>
      </div> 

      <div className={st.featuredItem}>
        <span className={st.featuredTitle}> Total Sales </span>
        <div className={st.featuredMoneyCont}>
          <span className={st.featuredMoney}> USD 1.485 </span>
          <span className={st.featuredMoneyRate}>
            + 52.2 <ArrowUpward className={st.featuredIcon}/>
          </span>
        </div>
        <span className={st.featuredSub}>Compared to last month</span>
      </div>

      <div className={st.featuredItem}>
        <span className={st.featuredTitle}> Cost </span>
        <div className={st.featuredMoneyCont}>
          <span className={st.featuredMoney}> USD 167 </span>
          <span className={st.featuredMoneyRate}>
            -11.0 <ArrowDownward className={st.featuredIcon_negative}/>
          </span>
        </div>
        <span className={st.featuredSub}>Compared to last month</span>
      </div>  

    </div>
  )
}
