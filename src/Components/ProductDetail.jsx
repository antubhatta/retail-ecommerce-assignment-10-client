
import { Link } from 'react-router-dom';
const ProductDetail = ({details}) => {
    const{image,name,brand,type,price,rating}=details
    return (
        <div className="flex flex-col mt-10 justify-center gap-6 md:gap-10 md:flex-row">
        <div className="">
            <img className=" h-[400px] p-6 lg:p-0 object-cover" src={image} alt="" />
        </div>
       <div>
       <div className=" text-center p-6 w-full shadow-2xl">
            <h3 className="text-lg mt-3 mb-3 lg:text-2xl font-medium">{name}</h3>
            <h3 className="text-lg mt-3 mb-3 lg:text-2xl font-medium">BrandName:{brand}</h3>
            <p className="text-sm lg:text-xl mt-3 mb-3">Type:{type}</p>
            <p className="text-sm lg:text-xl mt-3 mb-3">Price:{price}</p>
            <p className="text-sm lg:text-xl mt-3 mb-3">Rating:{rating}</p>
            <Link to="/myCart"><button className="bg-gradient-to-r mb-12 from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-bold py-2 lg:py-3 px-6 rounded">Add To Cart</button></Link>
        </div>
       </div>

    </div>
    );
};

export default ProductDetail;

{/* <div className="flex flex-col justify-center">
<div className="flex justify-center">
    <img className="h-auto  object-cover" src={image} alt="" />
</div>
<div className="text-center">
    <h3 className="text-lg mt-3 mb-3 lg:text-2xl font-medium">{name}</h3>
    <h3 className="text-lg mt-3 mb-3 lg:text-2xl font-medium">{brand}</h3>
    <p className="text-sm lg:text-xl mt-3 mb-3">{type}</p>
    <p className="text-sm lg:text-xl mt-3 mb-3">{price}</p>
    <p className="text-sm lg:text-xl mt-3 mb-3">{rating}</p>
</div>

</div> */}