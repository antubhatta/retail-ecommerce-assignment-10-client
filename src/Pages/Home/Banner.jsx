import banner from "../../assets/ecommerce.webp";

const Banner = () => {
  return (
    <div className="relative md:h-[90vh] ">
      <img className="h-full object-cover w-full" src={banner} alt="" />
      <div className="md:absolute top-0 left-0 w-full h-full">
        <div className=" absolute inset-0 bg-black h-full opacity-50"></div>
        <div className="flex absolute z-10 inset-0 flex-col items-center justify-center ">
          <h3 className="text-xl w-[200px] lg:w-[350px] text-center lg:text-4xl mt-3 text-white font-medium">
            
            We Bring The Good Shopping To Life 
          </h3>
          <p className="text-sm flex text-center lg:text-xl w-auto lg:w-[750px] mx-auto text-white md:p-6 lg:p-0 mt-4 font-medium">
            Retail and e-commerce, integral to modern commerce, involve selling
            goods and services, with retail in physical stores and e-commerce
            online, catering to diverse customer preferences and shopping
            experiences..
          </p>
          <div className="flex z-10 mt-10 items-center h-[30px] md:h-[50px] justify-center">
            <input
              className="rounded-tl-lg rounded-bl-lg border border-solid border-[#11111126] md:w-[300px] lg:w-[420px] mb-6 outline-none ml-5 lg:ml-0 py-2 lg:py-4 pl-4"
              placeholder="Search here..."
              type="text"
              value=""
            />
            <button className="bg-gradient-to-r from-orange-400 to-red-500 border outline-none rounded-tl-0 rounded-tr-lg rounded-br-lg mb-6 rounded-bl-0 text-white text-base font-semibold px-3 lg:px-7 py-2 lg:py-4 mr-6">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
