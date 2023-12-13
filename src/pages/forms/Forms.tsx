
// importing the css
import { Link } from 'react-router-dom';
import './forms.scss'

const Forms = () => {
    return (
        <div>
            <div className='forms'>
                <div className='newUser'>
                    <div>
                        <h1>Create new user</h1>
                    </div>
                    <div>
                        <Link to={'/new/users'}>Create new user</Link>
                    </div>
                </div>
                <div className='newProduct'>
                    <div>
                        <h1>Create new user</h1>
                    </div>
                    <div>
                        <Link to={'/new/products'}>Create new products</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forms;