//importing from react
// import { useState } from 'react';

// importing the css
import './products.scss'

// importing the components
import DataTable from '../../components/dataTable/DataTable';
// import Add from '../../components/add/Add';

// importing from Material UI
import { GridColDef } from "@mui/x-data-grid";

// WHEN NOT USING THE API
// importing the product data
// import { products } from '../../data';

// importing from react router dom
import { Link } from 'react-router-dom';

// USE WHEN USING API
// importing from react query
import { useQuery } from "react-query";

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
      field: "product",
      type: "string",
      headerName: "Product",
      width: 150,
    },
    {
      field: "brandID",
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
      field: "length",
      type: "string",
      headerName: "Length",
      width: 150,
    },
    {
      field: "width",
      type: "string",
      headerName: "Width",
      width: 150,
    },
    {
      field: "color",
      type: "string",
      headerName: "Color",
      width: 150,
    },
    {
      field: "sizes",
      type: "string",
      headerName: "Sizes",
      width: 150,
    },
    {
      field: "order",
      type: "string",
      headerName: "Order",
      width: 150,
    },
    {
      field: "price",
      type: "string",
      headerName: "Price",
      width: 150,
    },

    // {
    //   field: "title",
    //   type: "string",
    //   headerName: "Title",
    //   width: 250,
    // },
    // {
    //   field: "color",
    //   type: "string",
    //   headerName: "Color",
    //   width: 150,
    // },
    // {
    //   field: "price",
    //   type: "string",
    //   headerName: "Price",
    //   width: 200,
    // },
    // {
    //   field: "producer",
    //   headerName: "Producer",
    //   type: "string",
    //   width: 200,
    // },
    // {
    //   field: "createdAt",
    //   headerName: "Created At",
    //   width: 200,
    //   type: "string",
    // },
    // {
    //   field: "inStock",
    //   headerName: "In Stock",
    //   width: 150,
    //   type: "boolean",
    // },
];

const Products = () => {
    // useState for the add modal
    // const [open, setOpen] = useState(false);
    // IF USING API CALL 
    const { isLoading, data } = useQuery({
      queryKey: ["allProducts"],
      queryFn: () =>
        fetch("http://localhost:5000/products").then(
          (res) => res.json()
        ),
    });
  
    return (
      <div className="products">
        <div className="info">
          <h1>Products</h1>
          {/* <button onClick={() => setOpen(true)}>Add New Products</button> */}
          <button><Link to="/new/products">Add new product</Link></button>
        </div>
        {/* displays the product datatable using material UI */}
        {/* WHEN NOT USING API */}
        {/* <DataTable slug="products" columns={columns} rows={products} /> */}

        {/* WHEN USING API */}
        {isLoading ? (
              "Loading..."
            ) : (
              <DataTable slug="users" columns={columns} rows={data} />
            )}
        {/* opens the dynamic add product modal */}
        {/* {open && <Add slug="product" columns={columns} setOpen={setOpen} />} */}
      </div>
    );
  };

export default Products;