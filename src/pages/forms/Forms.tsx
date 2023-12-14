
// importing the css
import { Link } from 'react-router-dom';
import './forms.scss'

const Forms = () => {
    return (
        <div>
            <div className='forms'>
                <div className='createUser'>
                    <div>
                        <h1>Create new user</h1>
                    </div>
                    <div>
                        <button className='userButton'><Link to={'/new/users'}>Create new user</Link></button>
                    </div>
                </div>
                <div className='createProduct'>
                    <div>
                        <h1>Create new product</h1>
                    </div>
                    <div>
                        <button className='productButton'><Link to={'/new/products'}>Create new product</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forms;