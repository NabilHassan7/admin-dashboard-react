// importing from Material UI
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";

// importing the css file
import './dataTable.scss'

// importing from react router dom
import { Link } from "react-router-dom";

// TS props attributes
type Props ={
    columns: GridColDef[];
    rows: object[];
    slug: string;
}

// receiving data as props to display dynamically
const DataTable = (props: Props) => {
    // Delete CRUD function
    const handleDelete = (id: number) =>{
        //delete the item
        //axios.delete(`/api/${slug}/id`) -> example of 
        console.log(id + " has been deleted");
    }

    // column definitions
    const actionColumn: GridColDef = {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="action">
              <Link to={`/${props.slug}/${params.row.id}`}>
                <img src="/view.svg" alt="" />
              </Link>
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