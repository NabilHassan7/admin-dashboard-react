import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
// @ts-ignore
const PrivateRoute = ({children}) => {
    // @ts-ignore
    const {user, loading} = useContext(AuthContext);

    const location = useLocation();

    if(loading){
        return <h1>Loading!</h1>
    }

    if (user) {
        return children;
    }
    return <Navigate to='/' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;