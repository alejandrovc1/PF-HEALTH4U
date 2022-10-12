import React from 'react'
import './UserList.css'
import {DataGrid} from '@material-ui/data-grid'

export default function UserList() {

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'pic', headerName: 'Pic', width: 100, renderCell: (params)=>{
      return (
        <div className="userListUser">
          <img classname="st.userListPic" src={params.row.pic} alt='Profile pic'/>
        </div>
      )
    }},
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'birthDate', headerName: 'BirthDate', type: 'date', width: 140 },
    { field: 'genre', headerName: 'Genre', width: 120 },
    { field: 'country', headerName: 'Country', width: 140 },
    { field: 'tel', headerName: 'Tel', type: 'number', width: 100 },
    { field: 'status', headerName: 'Status', width: 120 },
  ];
  
  const rows = [
    { id: 1, pic: "https://png.pngtree.com/png-vector/20200724/ourlarge/pngtree-men-smiling-illustration-png-image_2312657.jpg", name: 'Alex', email: 'Alex@gmail.com', birthDate: "10-10-2010", genre: "Male", country: "Arg", tel: 123456, status: "Active"},
    { id: 2, pic: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png", name: 'Martin', email: 'Martin@gmail.com', birthDate: "10-10-2010", genre: "Male", country: "Col", tel: 123456, status: "Active"},
    { id: 3, pic: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png", name: 'Juan', email: 'Juan@gmail.com', birthDate: "10-10-2010", genre: "Male", country: "Chi", tel: 123456, status: "Active"},
    { id: 4, pic: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png", name: 'Pedro', email: 'Pedro@gmail.com', birthDate: "10-10-2010", genre: "Male", country: "Col", tel: 123456, status: "Active"},
    { id: 5, pic: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png", name: 'Nancy', email: 'Nancy@gmail.com', birthDate: "10-10-2010", genre: "Female", country: "Arg", tel: 123456, status: "Active"},
    { id: 6, pic: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png", name: 'Erick', email: 'Erick@gmail.com', birthDate: "10-10-2010", genre: "Male", country: "Pan", tel: 123456, status: "Active"},
    { id: 7, pic: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png", name: 'Felipe', email: 'Felipe@gmail.com', birthDate: "10-10-2010", genre: "Male", country: "Per", tel: 123456, status: "Active"},
    { id: 8, pic: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png", name: 'Luis', email: 'Luis@gmail.com', birthDate: "10-10-2010", genre: "Male", country: "Ecu", tel: 123456, status: "Active"},
    { id: 9, pic: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png", name: 'Ana', email: 'Ana@gmail.com', birthDate: "10-10-2010", genre: "Female", country: "Arg", tel: 123456, status: "Active"},
    { id: 10, pic: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png", name: 'Karen', email: 'Karen@gmail.com', birthDate: "10-10-2010", genre: "Female", country: "Chi", tel: 123456, status: "Active"},
  ];

  return (
    <div className="userList">
        
      <DataGrid
      rows={rows}
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[10]}
      checkboxSelection
      />

    </div>
  )
}
