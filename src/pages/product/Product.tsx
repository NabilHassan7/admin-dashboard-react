
// importing the components
import Single from '../../components/single/Single';

// importing the single product data from the local source
import { singleProduct } from '../../data';

// WHEN USING API
// importing from react query
// import { useQueries } from "react-query";

// importing the CSS file
import './product.scss'

const Product = () => {
    // IF USING API CALL 
    // const [ productDetails ] = useQueries(
    //     [
    //         {
    //             queryKey: ["productDetails"],
    //             queryFn: () =>
    //             fetch("http://localhost:5000/productDetails").then(
    //                 (res) => res.json()
    //             ),
    //         }
    //     ]
    // );

    // Fetching the data and sending to single component

    return (
        <div className='product'>
            {/* dynamically sending data as prop to children element */}
            <Single {...singleProduct}></Single>
            {/* <Single {...productDetails.data}></Single> */}
        </div>
    );
};

export default Product;