// importing css file
import { useContext } from 'react';
import './navbar.scss'
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    // @ts-ignore
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
        .then(() => {
            navigate(from, {replace: true});
            Swal.fire({
                title: "You have been logged out",
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
        .catch((error:any) => {
            console.log(error);
        })
    }

    return (
        <div className='navbar'>
            <div className="logo">
                <img src="/logo.svg" alt="" />
                <span>Nabil Industries</span>
            </div>
            <div className="icons">
                <img src="/search.svg" alt="" className="icon" />
                <img src="/app.svg" alt="" className="icon" />
                <img src="/expand.svg" alt="" className="icon" />
                <div className="notification">
                    <img src="/notifications.svg" alt="" />
                    <span>1</span>
                </div>
                <div className="user">
                    {/* // User Image */}
                    <img
                        src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                        alt=""
                    />
                    {/* User Name */}
                    <span>{user?.email}</span>
                    {
                        user ? 
                        <>
                            <button onClick={handleLogout}>
                                Logout
                            </button>
                        </> 
                        : 
                        <>
                            <button>
                                <Link to={"/"}>Login</Link>
                            </button>
                        </>
                    }
                </div>
                <img src="/settings.svg" alt="" className="icon" />
            </div>
        </div>
    );
};

export default Navbar;