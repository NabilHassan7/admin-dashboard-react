
// importing the components
import Single from '../../components/single/Single';

// importing data from the local source
import { singleUser } from '../../data';

// importing the css file
import './user.scss'

const User = () => {

    // Fetching the data and sending to single component

    return (
        <div>
            {/* dynamically sending data as prop to children element */}
            <Single {...singleUser}></Single>
        </div>
    );
};

export default User;