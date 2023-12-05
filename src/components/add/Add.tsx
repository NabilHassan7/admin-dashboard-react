
// importing from the Matrial UI library
import { GridColDef } from "@mui/x-data-grid";

//importing the css file
import './add.scss'

type Props = {
    slug : string;
    columns : GridColDef[];
    setOpen : React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = (props : Props) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        // prevents page refresh
        e.preventDefault();
    
        //add new item
        // axios.post(`/api/${slug}s`), {data}) -> example API call
        // mutation.mutate();
        props.setOpen(false)
    };

    return (
        <div className='add'>
            <div className="modal">
                {/* close button with state change */}
                {/* onClick closes the modal as well */}
                <span className="close" onClick={() => props.setOpen(false)}>
                    X
                </span>
                {/* dynamically change modal title */}
                <h1>Add new {props.slug}</h1>
                {/* form function */}
                <form onSubmit={handleSubmit}>
                    {props.columns
                        // id and img types are filtered out
                        .filter((item) => item.field !== "id" && item.field !== "img")
                        .map((column) => (
                        <div className="item">
                            <label>{column.headerName}</label>
                            {/* placeholder used incase of missing type */}
                            <input type={column.type} placeholder={column.field} />
                        </div>
                        ))}
                    <button className="send">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Add;