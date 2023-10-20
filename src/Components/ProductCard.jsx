import { Link } from "react-router-dom";

const ProductCard = ({products}) => {
    console.log(products)
   const {name,image,_id,brand,type,price,rating} =products
    return (
        <div className="container mx-auto px-6 rounded-lg shadow-2xl">
           
          
           <img className="rounded-lg object-cover h-auto lg:h-[400px] pt-4 r lg:px-0 w-[500px] lg:w-full mb-4" src={image} alt="" />
           <h3 className="text-xl md:text-2xl font-bold mt-10 mb-4">Name:{name}</h3>
           <h3 className="text-xl md:text-2xl font-bold  mb-4">Brand:{brand}</h3>
           <p className="text-base md:text-xl font-bold  mb-4">Type:{type}</p>
           <p className="text-base md:text-xl font-bold  mb-4">Price:{price}</p>
           <p className="text-base md:text-xl font-bold  mb-4">Rating:{rating}</p>
           
          <div className="flex justify-between">
          <Link to={`/products/${_id}/update`}><button className="bg-gradient-to-r mb-12 from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-bold py-2 lg:py-3 px-6 rounded">Update</button></Link>

          <Link to={`/productDetails/${_id}`}><button className="bg-gradient-to-r mb-12 from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-bold py-2 lg:py-3 px-6 rounded">Details</button></Link>
          </div>
        </div>
    );
};

export default ProductCard;