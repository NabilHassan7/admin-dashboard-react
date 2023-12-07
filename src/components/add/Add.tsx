
// importing from the Matrial UI library
import { GridColDef } from "@mui/x-data-grid";

//importing the css file
import './add.scss'

// USE WHEN USING API
import { useMutation, useQueryClient } from "react-query";

type Props = {
    slug : string;
    columns : GridColDef[];
    setOpen : React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = (props : Props) => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: () => {
        return fetch(`http://localhost:5000/${props.slug}s`, {
            method: "post",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: 111,
                img: "",
                lastName: "Hello",
                firstName: "Test",
                email: "testme@gmail.com",
                phone: "123 456 789",
                createdAt: "01.02.2023",
                verified: true,
            }),
        });
        },
        onSuccess: () => {
            queryClient.invalidateQueries([`all${props.slug}s`]);
        },
    });


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        // prevents page refresh
        e.preventDefault();
    
        //add new item
        mutation.mutate();
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