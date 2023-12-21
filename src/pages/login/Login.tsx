// importing from react simple captcha
// @ts-ignore
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

// import the css file
import './login.scss'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

import { useForm } from "react-hook-form"
import { useLocation, useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';

const Login = () => {

    window.onload=function(){
        const container = document.getElementById('container');
        const registerBtn = document.getElementById('register');
        const loginBtn = document.getElementById('login');

        registerBtn?.addEventListener('click', () => {
            container?.classList.add("active");
        });

        loginBtn?.addEventListener('click', () => {
            container?.classList.remove("active");
         })
    };

    // const captchaRef = useRef(null);

    const [disabled, setDisabled] = useState(true)

    // @ts-ignore
    const {signIn} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    // const from = location.state?.from?.pathname || "/home";
    const from = location.state?.from?.pathname || "/home";

    useEffect(() =>{
        loadCaptchaEnginge(6);
    },[])

    const handleLogin = (event : any) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email);
        // console.log(password);
        signIn(email, password)
        .then((result : any) => {
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true});
            Swal.fire({
                title: "Login Successful!",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });
        })
    }

    const handleValidateCaptcha = (e : any) => {
        const user_captcha_value = e.target.value;
        if(validateCaptcha(user_captcha_value)==true){
            setDisabled(false);
        }
        else{
            setDisabled(true);
        }
    }

    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
    } = useForm()

    // @ts-ignore
    const {createUser} = useContext(AuthContext);

    const onSubmit = (data : any) => {
        // console.log(data);
        createUser(data.email, data.password)
        .then( (result : any) => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
    }

    return (
        <div className="login">
            <div className="container" id="container">
                <div className="form-container sign-up">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1>Admin Account</h1>
                        {/* <div className="social-icons">
                            <a href="#" className="icon"><FontAwesomeIcon icon={'googlePlus'}></FontAwesomeIcon></a>
                            <a href="#" className="icon"><FontAwesomeIcon icon={'facebook'}></FontAwesomeIcon></a>
                            <a href="#" className="icon"><FontAwesomeIcon icon={'github'}></FontAwesomeIcon></a>
                            <a href="#" className="icon"><FontAwesomeIcon icon={'linkedIn'}></FontAwesomeIcon></a>
                        </div> */}
                        {/* <span>or use your email & password</span> */}
                        <input {...register("name", { required: true })} type="text" name='name' placeholder="Name"  />
                        {errors.name && <span>User Name is required</span>}
                        <input {...register("type", { required: true })} type="text" name='type' placeholder="Account Type" />
                        {errors.type && <span>Account type is required</span>}
                        <input {...register("photoURL", { required: true })} type="text" name='photoURL' placeholder="Photo URL" />
                        {errors.photoURL && <span>Photo URL is required</span>}
                        <input {...register("email", { required: true })} type="email" name='email' placeholder="Email" />
                        {errors.email && <span>Email is required</span>}
                        <input {...register("password", { 
                            required: true, 
                            minLength: 8, 
                            maxLength: 32,
                            // pattern: /^(?=.*[A_Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])$/ 
                        })} type="password" name='password' placeholder="Password" />
                        {errors.password && <span>Password is required</span>}
                        {errors.password?.type === 'minLength' && <span>Must be atleast 8 characters long</span>}
                        {errors.password?.type === 'maxLength' && <span>Must be less than 32 characters long</span>}
                        {/* {errors.password?.type === 'pattern' && <span>Must have one uppercase, one lowercase, one number and one special character</span>}  */}
                        {/* <div>
                            <LoadCanvasTemplate />
                            <input type="text" name='captcha' placeholder="Captcha" />
                        </div> */}
                        {/* <a href="#">Forget Your Password?</a> */}
                        <input type="submit" value="Create new admin" />
                        {/* <button type="submit">Create new user</button> */}
                    </form>
                </div>
                <div className="form-container sign-in">
                    <form onSubmit={handleLogin}>
                        <h1>Admin Sign In</h1>
                        {/* <div className="social-icons">
                            <a href="#" className="icon"><FontAwesomeIcon icon={'googlePlus'}></FontAwesomeIcon></a>
                            <a href="#" className="icon"><FontAwesomeIcon icon={'facebook'}></FontAwesomeIcon></a>
                            <a href="#" className="icon"><FontAwesomeIcon icon={'github'}></FontAwesomeIcon></a>
                            <a href="#" className="icon"><FontAwesomeIcon icon={'linkedIn'}></FontAwesomeIcon></a>
                        </div>
                        <span>or use your email & password</span> */}
                        <input type="email" name='email' placeholder="Email" />
                        <input type="password" name='password' placeholder="Password" />
                        <div>
                            <LoadCanvasTemplate />
                            <input onBlur={handleValidateCaptcha} type="text" name='captcha' placeholder="Type the text above" />
                            {/* <button onClick={handleValidateCaptcha}>Validate</button> */}
                            {/* <input type="submit" value="Validate" /> */}
                        </div>
                        {/* <a href="#">Forget Your Password?</a> */}
                        <input type="submit" disabled={disabled} value="Sign In" />
                        {/* <button type="submit" disabled={disabled}>Sign In</button> */}
                    </form>
                </div>
                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h1>Welcome Back, Admin!</h1>
                            <p>Login with your admin account details to use all of site features</p>
                            <button className="hidden" id="login">Go to Admin Login</button>
                        </div>
                        <div className="toggle-panel toggle-right">
                            <h1>Hello, Admin!</h1>
                            <p>Login with your admin account details to use all of the admin features</p>
                            <button className="hidden" id="register">Go to Admin Panel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;