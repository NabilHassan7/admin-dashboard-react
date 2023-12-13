// importing from react
// import { useState } from 'react';

// importing the css file
import './orders.scss'

// importing the components
import DataTable from '../../components/dataTable/DataTable';
// import Add from '../../components/add/Add';

// importing from Material UI
import { GridColDef } from '@mui/x-data-grid';

// importing the order data
import { orders } from '../../data';

// column definitions for order page
const columns: GridColDef[] = [
    { 
        field: "id", 
        headerName: "ID", 
        width: 90 
    },
    {
      field: "img",
      headerName: "Image",
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.img || "/noavatar.png"} alt="" />;
      },
    },
    {
      field: "orderNum",
      type: "string",
      headerName: "Order No.",
      width: 150,
    },
    {
      field: "client",
      type: "string",
      headerName: "Client",
      width: 150,
    },
    {
      field: "clientID",
      type: "string",
      headerName: "Client ID",
      width: 90,
    },
    {
      field: "brand",
      headerName: "Brand",
      type: "string",
      width: 150,
    },
    {
      field: "brandID",
      headerName: "Brand ID",
      width: 90,
      type: "string",
    },
    {
        field: "total",
        headerName: "Amount",
        width: 150,
        type: "string",
    },
    
    {
        field: "orderDate",
        headerName: "Order Date",
        width: 150,
        type: "string",
    },
    {
        field: "dueDate",
        headerName: "Delivery Date",
        width: 150,
        type: "string",
    },
    {
        field: "status",
        headerName: "Status",
        width: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            )
        }
    },
];

const Orders = () => {

    // useState for the add modal
    // const [open, setOpen] = useState(false);

    return (
        <div className="orders">
            <div className="info">
                <h1 className='title'>Orders</h1>
                {/* <button onClick={() => setOpen(true)}>View All Current Orders</button> */}
            </div>
            {/* displays the order datatable using material UI */}
            <DataTable slug="orders" columns={columns} rows={orders} />
            {/* opens the dynamic add product modal */}
            {/* {open && <Add slug="product" columns={columns} setOpen={setOpen} />} */}
        </div>
    );
};

export default Orders;