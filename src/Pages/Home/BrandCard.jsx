import { Link } from "react-router-dom";

const BrandCard = ({brand}) => {
    // console.log(brand)
    const {name,image}=brand
    return (
        <div className="dark:bg-slate-800">
            <Link to={`/details/${name}`}>
             <div className=" flex flex-col items-center mt-4 lg:mt-7">
            <img className="rounded-full p-5 shadow-2xl w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] " src={image} alt="" />
            <h2 className=" text-xl dark:text-white lg:text-4xl font-bold mt-5 ">{name}</h2>
        </div>
           </Link>
        </div>
       
    );
};

export default BrandCard;