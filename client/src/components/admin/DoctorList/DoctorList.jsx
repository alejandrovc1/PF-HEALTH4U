import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getDoctors, deleteDoctor } from "../../../actions/index";
import st from './DoctorList.module.css';
import {DataGrid} from '@material-ui/data-grid';
import {DeleteForever} from '@mui/icons-material';
import { doctorRows } from '../../../dummyData';
import { Link } from 'react-router-dom';

export default function DoctorList() {

  const dispatch = useDispatch();
  
  useEffect(() =>{
    dispatch(getDoctors());
  }, [dispatch])

  const allDoctors = useSelector(state => state.doctorsCopy);

  const handleDelete = (id) => {
    dispatch(deleteDoctor(id))
    alert("Doctor successfully deleted");
  }

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
    { field: 'idDoc', headerName: 'Doc ID', width: 130 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'specialtie', headerName: 'Specialtie', width: 140 },
    { field: 'method', headerName: 'Method', width: 125 },
    { field: 'country', headerName: 'Country', width: 135 },
    { field: 'rating', headerName: 'Rating', type: 'float', width: 100 },
    { field: 'status', headerName: 'Status', width: 120 },
    { field: 'actions', headerName: 'Actions', width: 125, renderCell: (params) =>{
      return (
        <>
          <Link to={'/adminView/doctor/'+ params.row.idDoc}>
            <button className={st.doctorListEdit}>Edit</button>
          </Link>
          <DeleteForever className={st.doctorListDelete} onClick={() => handleDelete(params.row.id)}/>
        </>
      )
    }}
  ];

  const doctorRows = allDoctors.map( (doc, index) => ({
    id: index + 1,
    idDoc: doc.id,
    name: doc.name, 
    email: doc.email,
    specialtie: doc.specialtie, 
    method: doc.method, 
    country: doc.country, 
    rating: doc.rating, 
    status: doc.status
  }));


  return (
    <div className={st.doctorList}>
        
      <DataGrid
      rows={doctorRows}
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[10]}
      checkboxSelection
      disableSelectionOnClick
      />

    </div>
  )
};