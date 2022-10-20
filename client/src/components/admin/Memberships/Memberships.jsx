import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllSubscribers } from "../../../actions/index";
import st from './Memberships.module.css';
import {DataGrid} from '@material-ui/data-grid';
import {DeleteForever} from '@mui/icons-material';
import { Link } from 'react-router-dom';


export default function Memberships() {

  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(getAllSubscribers());
  }, [dispatch, getAllSubscribers])

  const allSubscribers = useSelector(state => state.Subs);
  // console.log(allSubscribers)

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'idPat', headerName: 'Patient ID', width: 220 },
    { field: 'pic', headerName: 'Pic', width: 100, renderCell: (params)=>{
      return (
        <div className={st.userListUser}>
          <img classname={st.userListPic} src={params.row.pic} alt='Profile Pic' />
        </div>
      )
    }},
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 180 },
    { field: 'country', headerName: 'Country', width: 135 },
    { field: 'status', headerName: 'Status', width: 120 },
    { field: 'subscription', headerName: 'Subscription ID', width: 190 },
    
  ];

  const userRows = allSubscribers.map( (pat, index) => ({
    id: index + 1,
    idPat: pat._id,
    pic: pat.image,
    name: pat.name, 
    email: pat.email,
    country: pat.country,
    status: pat.status,
    subscription: pat.subscription
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
