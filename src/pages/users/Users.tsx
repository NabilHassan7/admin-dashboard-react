// importing from react
// import {useState} from 'react';

// importing the components
import DataTable from '../../components/dataTable/DataTable';
// import Add from '../../components/add/Add';

// importing from material UI
import { GridColDef } from "@mui/x-data-grid";

// importing the css
import './users.scss'

// USE WHEN NOT USING API
// importing the user data from local file
// import { userRows } from '../../data';

// USE WHEN USING API
// importing from react query
import { useQuery } from "react-query";

// importing from react router dom
import { Link } from 'react-router-dom';

// column defintions for the Material UI datagrid
const columns: GridColDef[] = [
  { 
      field: "id", 
      headerName: "ID", 
      width: 90 
  },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "clientId",
    type: "string",
    headerName: "Client ID",
    width: 150,
  },
  {
    field: "clientName",
    type: "string",
    headerName: "Client Name",
    width: 150,
  },
  {
    field: "clientCredentials",
    type: "string",
    headerName: "Credentials",
    width: 150,
  },
  {
    field: "brandId",
    type: "string",
    headerName: "Brand ID",
    width: 150,
  },
  {
    field: "brandName",
    type: "string",
    headerName: "Brand Name",
    width: 150,
  },
  {
    field: "address",
    type: "string",
    headerName: "Present Address",
    width: 150,
  },
  {
    field: "contactPerson",
    type: "string",
    headerName: "Contact Person",
    width: 150,
  },
  {
    field: "contactPhone",
    type: "string",
    headerName: "Phone",
    width: 150,
  },
  {
    field: "contactEmail",
    type: "string",
    headerName: "Contact Email",
    width: 150,
  },
  {
    field: "sales",
    type: "string",
    headerName: "Salesperson",
    width: 150,
  },
  {
    field: "customerService",
    type: "string",
    headerName: "Customer Service",
    width: 150,
  },
  {
    field: "creditLimit",
    type: "string",
    headerName: "Credit Limit",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 150,
  },
  {
    field: "password",
    type: "string",
    headerName: "Password",
    width: 150,
  },
  {
    field: "createdBy",
    type: "string",
    headerName: "Created By",
    width: 150,
  }
]

// column defintions for the Material UI datagrid
// const columns: GridColDef[] = [
//     { 
//         field: "id", 
//         headerName: "ID", 
//         width: 90 
//     },
//     {
//       field: "img",
//       headerName: "Avatar",
//       width: 100,
//       renderCell: (params) => {
//         return <img src={params.row.img || "/noavatar.png"} alt="" />;
//       },
//     },
//     {
//       field: "firstName",
//       type: "string",
//       headerName: "First name",
//       width: 150,
//     },
//     {
//       field: "lastName",
//       type: "string",
//       headerName: "Last name",
//       width: 150,
//     },
//     {
//       field: "email",
//       type: "string",
//       headerName: "Email",
//       width: 200,
//     },
//     {
//       field: "phone",
//       type: "string",
//       headerName: "Phone",
//       width: 200,
//     },
//     {
//       field: "createdAt",
//       headerName: "Created At",
//       width: 200,
//       type: "string",
//     },
//     {
//       field: "verified",
//       headerName: "Verified",
//       width: 150,
//       type: "boolean",
//     },
//   ]

// Data Grid Dummy Data
// const rows = [
//     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, status: true },
//     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, status: true },
//     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, status: true },
//     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, status: true },
//     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, status: true },
//     { id: 6, lastName: 'Melisandre', firstName: null, age: 150, status: true },
//     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, status: true },
//     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, status: true },
//     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, status: true },
// ];

const Users = () => {

    // useState for the add modal -> default value is false
    // const [open, setOpen] = useState(false)

    // IF USING API CALL 
    const { isLoading, data } = useQuery({
      queryKey: ["allusers"],
      queryFn: () =>
        fetch("http://localhost:5000/users").then(
          (res) => res.json()
        ),
    });

    return (
        <div className="users">
            <div className="info">
                <h1>Users</h1>
                {/* opens the add modal on click */}
                {/* <button onClick={()=>setOpen(true)}><Link to="/new/users">Add new user</Link></button> */}
                <button><Link to="/new/users">Add new user</Link></button>
            </div>
            {/* passing the data as props to display dynamically */}

            {/* WHEN NOT USING API */}
            {/* <DataTable slug="users" columns={columns} rows={userRows}></DataTable> */}

            {/* WHEN USING API */}
            {isLoading ? (
              "Loading..."
            ) : (
              <DataTable slug="users" columns={columns} rows={data} />
            )}

            {/* if open show add component */}
            {/* passing the values to child component */}
            {/* {open && <Add slug="user" columns={columns} setOpen={setOpen}></Add>} */}
        </div>
    );
};

export default Users;