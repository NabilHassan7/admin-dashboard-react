
// importing the components
import Single from '../../components/single/Single';

// WHEN NOT USING API
// importing data from the local source
import { singleUser } from '../../data';

// WHEN USING API
// importing from react query
// import { useQuery } from "react-query";

// importing the css file
import './user.scss'

const User = () => {
    // IF USING API CALL  
    // const { data } = useQuery({
    //     queryKey: ["userDetails"],
    //     queryFn: () =>
    //     fetch("http://localhost:5000/userDetails").then(
    //         (res) => res.json()
    //     ),
    // });

    // Fetching the data and sending to single component

    return (
        <div>
            {/* dynamically sending data as prop to children element */}
            <Single {...singleUser}></Single>
            {/* <Single {...data}></Single> */}
        </div>
    );
};

export default User;