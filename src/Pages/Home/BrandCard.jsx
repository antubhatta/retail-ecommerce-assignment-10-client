

const BrandCard = ({brand}) => {
    console.log(brand)
    const {name,image}=brand
    return (
        <div className=" flex flex-col items-center mt-7">
            <img className="rounded-full shadow-2xl w-[300px] h-[300px] " src={image} alt="" />
            <h2 className=" text-xl lg:text-4xl font-bold mt-5 ">{name}</h2>
        </div>
    );
};

export default BrandCard;