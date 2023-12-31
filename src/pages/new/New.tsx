// import the css file
import "./new.scss"

// import DriveFolderUploadOutlinedIcon from "@mui/material";
import { useState } from "react";

// importing from react-hook-form
import { useForm } from "react-hook-form";

// @ts-ignore
const New = ({ inputs, title }) => {
    const [file, setFile] = useState("");

    // importing for form validation
    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
    } = useForm();
  
    return (
      <div className="new">
        
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
              <form>
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
                    <input type={input.type} placeholder={input.placeholder} />
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
  
  export default New;