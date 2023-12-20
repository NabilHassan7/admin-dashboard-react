// importing from Material UI
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";

// importing the css file
import './dataTable.scss'

// importing from react router dom
import { Link } from "react-router-dom";

// USE WHEN USING API
// importing from react query
import { useQueryClient, useMutation } from "react-query";

// TS props attributes
type Props ={
    columns: GridColDef[];
    rows: object[];
    slug: string;
}

// receiving data as props to display dynamically
const DataTable = (props: Props) => {

    // USE WHEN USING THE API
    // creating the query client
    const queryClient = useQueryClient();
    // mutation to delete users and products
    const mutation = useMutation({
        mutationFn: (id: number) => {
            return fetch(`http://localhost:5000/${props.slug}/${id}`, {
                method: "delete",
            });
        },
        onSuccess: ()=>{
            // refreshing the page
            // slug used to make the component generic
            queryClient.invalidateQueries([`all${props.slug}`]);
        }
    });
    // Delete CRUD function
    const handleDelete = (id: number) =>{
        //delete the item
        mutation.mutate(id)
    }

    // column definitions
    const actionColumn: GridColDef = {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="action">
                {/* conditional rendering */}
                {props.slug == "orders" ? (
                    <Link to="/order"></Link>
                ) : (
                    <Link to={`/${props.slug}/${params.row.id}`}>
                        <img src="/view.svg" alt="" />
                    </Link>
                )}
              {/* <Link to={`/${props.slug}/${params.row.id}`}>
                <img src="/view.svg" alt="" />
              </Link> */}
              <div className="delete" onClick={() => handleDelete(params.row.id)}>
                <img src="/delete.svg" alt="" />
              </div>
            </div>
          );
        },
    };


    return (
        <div className='dataTable'>
            <DataGrid
                className="dataGrid"
                rows={props.rows}
                // sending the props as well the action column
                columns={[...props.columns, actionColumn]}
                initialState={{
                    pagination: {
                        paginationModel: {
                            // per page data limit
                            pageSize: 10,
                        },
                    },
                }}
                // enables the toolbar
                slots={{toolbar:GridToolbar}}
                slotProps={{
                    toolbar:{
                        showQuickFilter: true,
                        quickFilterProps: {
                            // add time delay to search bar
                            debounceMs: 500
                        },
                    }
                }}
                // data displayed per page
                pageSizeOptions={[5]}
                // check box
                checkboxSelection
                disableRowSelectionOnClick
                // disableColumnFilter
                // disableDensitySelector
                // disableColumnSelector
            />
        </div>
    );
};

export default DataTable;