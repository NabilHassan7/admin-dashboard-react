
// importing the css
import { Link } from 'react-router-dom';
import './forms.scss'

const Forms = () => {
    return (
        <div>
            <div className='forms'>
                <div className='newUser'>
                    Create new user
                    <Link to={'/new/users'}>Create new user</Link>
                </div>
                <div className='newProduct'>
                    Create new product
                    <Link to={'/new/users'}>Create new products</Link>
                </div>
            </div>
        </div>
    );
};

export default Forms;