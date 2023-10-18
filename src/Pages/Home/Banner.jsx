import banner from "../../assets/ecommerce.webp"

const Banner = () => {
    return (
        <div className="relative md:h-[90vh] ">
        <img className="h-full object-cover w-full" src={banner} alt="" />
        <div className="md:absolute top-0 left-0 w-full h-full">
            <div className=" absolute inset-0 bg-black h-full opacity-50"></div>
                <div className="flex absolute z-10 inset-0 flex-col items-center justify-center ">
                       
                        <h3 className="text-xl lg:text-2xl mt-3 text-white font-medium"> Discover a World of Style and Convenience</h3>
                        <h3 className="text-2xl lg:text-8xl mt-3 font-bold text-white">E-Commerce</h3>
                        <p className="text-xl lg:text-2xl  text-white mt-3 font-medium"> Shop our latest collection and experience the best in retail therapy.</p>
                </div>
                </div>
            
        

    </div>
    );
};

export default Banner;