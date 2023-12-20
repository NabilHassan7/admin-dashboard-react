// import the css file
import "./newUser.scss"

// import DriveFolderUploadOutlinedIcon from "@mui/material";
import { useContext, useState } from "react";

// importing from react-hook-form
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { createPost } from "../../api/posts";

// @ts-ignore
import { v4 as uuidv4 } from 'uuid';
uuidv4();

// @ts-ignore
const NewUser = ({ inputs, title }) => {

    const [post, setPost] = useState({
      img: "",
      clientId: "",
      clientName: "",
      clientCredentials: "",
      brandId: "",
      brandName: "",
      address: "",
      contactPerson: "",
      contactPhone: "",
      contactEmail: "",
      sales: "",
      customerService: "",
      creditLimit: "",
      email: "",
      password: "",
      createdBy: "",
    });

    // const [post, setPost] = useState({
    //   username: "",
    //   fullname: "",
    //   email: "",
    //   phone: "",
    //   password: "",
    //   address: "",
    //   country: "",
    // });

    // console.log(post);

    const handleChangeInput = (e : any) => {
      setPost({
        ...post,
        [e.target.name]: e.target.value
      })
    }

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
    const onSubmit = (data : any, e : any) => {
      e.preventDefault();
      console.log("This is executing");
      console.log(post);
      setPost({
        img: "",
        clientId: "",
        clientName: "",
        clientCredentials: "",
        brandId: "",
        brandName: "",
        address: "",
        contactPerson: "",
        contactPhone: "",
        contactEmail: "",
        sales: "",
        customerService: "",
        creditLimit: "",
        email: "",
        password: "",
        createdBy: "",
      })

      createPostMutation.mutate({
        id: uuidv4(),
        // id: 3,
        ...post
      })
      console.log(data);
      createUser(data.email, data.password)
      .then( (result : any) => {
          const loggedUser = result.user;
          console.log(loggedUser);
          navigate(from, {replace: true});
      })
      
    }

    const queryClient = useQueryClient();

    const createPostMutation = useMutation({
      mutationFn: createPost,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['']});
        console.log("Success")
      }
    })

    // const handleAddPost = (post : any) => {
    //   createPostMutation.mutate({
    //     // id: uuidv4(),
    //     id: 3,
    //     ...post
    //   })
    // }
  
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
                    // onChange={(e : any) => setFile(e?.target?.files[0])}
                    style={{ display: "none" }}
                  />
                </div>
  
                {inputs.map((input : any) => (
                  <div className="formInput" key={input.id}>
                    <label>{input.label}</label>
                    <input
                      {...register(`${input.name}` , 
                      { required: true })} 
                      name={input?.name} 
                      type={input.type} 
                      placeholder={input.placeholder}
                      onChange={handleChangeInput}
                      // @ts-ignore
                      value={post[(input.label).toLowerCase()]}/>
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