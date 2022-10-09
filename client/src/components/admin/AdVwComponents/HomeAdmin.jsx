import React from 'react';
import st from './HomeAdmin.module.css';
import FeaturedInfo from './FeaturedInfo';
import Chart from './Chart';
import {userData} from '../../../dummyData'

export default function HomeAdmin() {
  return (

    <div className={st.HomeAdmin}>
      
      <FeaturedInfo/>
      <Chart title="User Analytics" data={userData} dataKey='Active users' grid />
      <div className={st.homeWidgets}></div>
    </div>
  )
}
