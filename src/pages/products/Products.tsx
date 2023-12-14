//importing from react
// import { useState } from 'react';

// importing the css
import './products.scss'

// importing the components
import DataTable from '../../components/dataTable/DataTable';
// import Add from '../../components/add/Add';

// importing from Material UI
import { GridColDef } from "@mui/x-data-grid";

// importing the product data
import { products } from '../../data';

// importing from react router dom
import { Link } from 'react-router-dom';

// column definitions for product page
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
      field: "title",
      type: "string",
      headerName: "Title",
      width: 250,
    },
    {
      field: "color",
      type: "string",
      headerName: "Color",
      width: 150,
    },
    {
      field: "price",
      type: "string",
      headerName: "Price",
      width: 200,
    },
    {
      field: "producer",
      headerName: "Producer",
      type: "string",
      width: 200,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 200,
      type: "string",
    },
    {
      field: "inStock",
      headerName: "In Stock",
      width: 150,
      type: "boolean",
    },
];

const Products = () => {
    // useState for the add modal
    // const [open, setOpen] = useState(false);
  
    return (
      <div className="products">
        <div className="info">
          <h1>Products</h1>
          {/* <button onClick={() => setOpen(true)}>Add New Products</button> */}
          <button><Link to="/new/products">Add new product</Link></button>
        </div>
        {/* displays the product datatable using material UI */}
        <DataTable slug="products" columns={columns} rows={products} />
        {/* opens the dynamic add product modal */}
        {/* {open && <Add slug="product" columns={columns} setOpen={setOpen} />} */}
      </div>
    );
  };

export default Products;