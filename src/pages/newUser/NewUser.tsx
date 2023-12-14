// import the css file
import "./newUser.scss"

// import DriveFolderUploadOutlinedIcon from "@mui/material";
import { useContext, useState } from "react";

// importing from react-hook-form
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

// @ts-ignore
const NewUser = ({ inputs, title }) => {
    const [file, setFile] = useState("");

    // importing for form validation
    const {
        register,
        handleSubmit,
        // watch,
        // formState: { errors },
    } = useForm();

    // @ts-ignore
    const {createUser} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/users";

    // handling the created user
    const onSubmit = (data : any) => {
      // console.log(data);
      createUser(data.email, data.password)
      .then( (result : any) => {
          const loggedUser = result.user;
          console.log(loggedUser);
          navigate(from, {replace: true});
      })
    }
  
    return (
      <div className="newUser">
        
        <div className="newContainer">
          
          <div className="top">
            <h1>{title}</h1>
          </div>
          <div className="bottom">
            <div className="left">
              <img
                src={
                  file
                    // @ts-ignore
                    ? URL.createObjectURL(file)
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                alt=""
              />
            </div>
            <div className="right">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="formInput">
                  <label htmlFor="file">
                    {/* Image: <DriveFolderUploadOutlinedIcon className="icon" /> */}
                    {/* Image: <img src="../../../public/app.svg" alt="" /> */}
                    Image: <img className="fileUpload" src="/file-upload-icon.svg" alt="" />
                  </label>
                  <input
                    type="file"
                    id="file"
                    onChange={(e : any) => setFile(e?.target?.files[0])}
                    style={{ display: "none" }}
                  />
                </div>
  
                {inputs.map((input : any) => (
                  <div className="formInput" key={input.id}>
                    <label>{input.label}</label>
                    <input {...register(`${input.name}` , { required: true })} name={input?.name} type={input.type} placeholder={input.placeholder} />
                    {/* {errors.password && <span>Field is required</span>} */}
                  </div>
                ))}
                {/* <button>Send</button> */}
                <div>
                  <input className="sendButton" type="submit" value="Send" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default NewUser;