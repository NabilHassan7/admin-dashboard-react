
// importing the components
import Single from '../../components/single/Single';

// importing the single product data from the local source
import { singleProduct } from '../../data';

// importing the CSS file
import './product.scss'

const Product = () => {

    // Fetching the data and sending to single component

    return (
        <div className='product'>
            {/* dynamically sending data as prop to children element */}
            <Single {...singleProduct}></Single>
        </div>
    );
};

export default Product;