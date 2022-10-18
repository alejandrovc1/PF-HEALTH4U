import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAdmins } from "../../../actions/index";
import { DataGrid } from '@material-ui/data-grid';


export default function Admins() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAdmins());
  }, [dispatch, getAdmins])

  const allAdmins = useSelector( (state) => state.admins)

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    // { field: 'profilePic', headerName: 'Profile Pic', width: 100, renderCell: (params)=>{
    //   return (
    //     <div className={st.doctorListUser}>
    //       <img classname={st.doctorListPic} src={params.row.profilePic} alt='' />
    //       {params.row.name}
    //     </div>
    //   )
    // }},
    { field: 'idAdm', headerName: 'Admin ID', width: 150 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 180 },
  ];

  const adminRows = allAdmins.map( (Adm, index) => ({
    id: index + 1,
    idAdm: Adm.id,
    name: Adm.name, 
    email: Adm.email,
  }));


  return (
    <div style={{flex: 7}}>
        
      <DataGrid
      rows={adminRows}
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[10]}
      checkboxSelection
      disableSelectionOnClick
      />

    </div>
  )
}
