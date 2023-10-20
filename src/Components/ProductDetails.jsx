import { useLoaderData } from "react-router-dom";

import ProductDetail from "./ProductDetail";

const ProductDetails = () => {
    const loaderData=useLoaderData()
    
    if(!loaderData) return <p>Product not found</p>

    return (
        
        <div className="container mx-auto">
            <h3 className="text-xl md:text-2xl lg:text-4xl font-bold text-center mt-8 mb-6 lg:mt-10 lg:mb-8">Our Product Details Page</h3>

              <div className="lg:mb-20 ">
              <ProductDetail key={loaderData._id} details={loaderData}></ProductDetail>
              </div>
        </div>
    );
};

export default ProductDetails;