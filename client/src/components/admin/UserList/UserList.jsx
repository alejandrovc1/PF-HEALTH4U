import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getPatients, deletePatient } from "../../../actions/index";
import st from './UserList.module.css';
import {DataGrid} from '@material-ui/data-grid';
import {DeleteForever} from '@mui/icons-material';
import { userRows } from '../../../dummyData';
import { Link } from 'react-router-dom';

export default function UserList() {

  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(getPatients());
  }, [dispatch, getPatients])

  const allPatients = useSelector(state => state.patientsCopy);
  
  const handleDelete = (idPat) => {
    dispatch(deletePatient(idPat))
    alert("Patient successfully deleted");
    window.location.reload(true)
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    // { field: 'pic', headerName: 'Pic', width: 100, renderCell: (params)=>{
    //   return (
    //     <div className={st.userListUser}>
    //       <img classname={st.userListPic} src={params.row.pic} alt='' />
    //       {params.row.name}
    //     </div>
    //   )
    // }},
    { field: 'idPat', headerName: 'Patient ID', width: 130 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'birthDate', headerName: 'BirthDate', type: 'date', width: 140 },
    { field: 'genre', headerName: 'Genre', width: 120 },
    { field: 'country', headerName: 'Country', width: 135 },
    { field: 'tel', headerName: 'Tel', type: 'number', width: 100 },
    { field: 'status', headerName: 'Status', width: 120 },
    { field: 'actions', headerName: 'Actions', width: 130, renderCell: (params) =>{
      return (
        <>
          <Link to={'/adminView/user/'+ params.row.idPat}>
            <button className={st.userListEdit}>Edit</button>
          </Link>
            <DeleteForever className={st.userListDelete} onClick={() => handleDelete(params.row.idPat)} />
        </>
      )
    }}
  ];

  const userRows = allPatients.map( (pat, index) => ({
    id: index + 1,
    idPat: pat.id,
    name: pat.name, 
    email: pat.email,
    birthDate: pat.birthDate, 
    genre: pat.genre, 
    country: pat.country, 
    tel: pat.tel, 
    status: pat.status
  }));


  return (
    <div className={st.userList}>
      
      <DataGrid
      rows={userRows}
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[10]}
      checkboxSelection
      disableSelectionOnClick
      />

    </div>
  )
};
