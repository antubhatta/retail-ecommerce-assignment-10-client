import { FaFacebook,FaTwitter,FaInstagram } from 'react-icons/fa';

const Team = ({teams}) => {
    const {full_name, position, email, profile_image_url}=teams
    return (
        <div data-aos="fade-right">
           
           <div className=" mt-4 w-full flex items-center ">
           <img className="rounded-full object-cover w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] mx-auto" src={profile_image_url}></img>
           </div>
           <h3 className="text-xl dark:text-white text-center font-medium mt-3">{full_name}</h3>
           <p className="text-base dark:text-white text-center font-normal mt-2">{position}</p>
           <p className="text-base dark:text-white text-center font-normal mt-2">{email}</p>
           <div className='flex dark:text-white items-center justify-center gap-3 mt-2 pb-5'>
            <FaFacebook></FaFacebook>
            <FaTwitter></FaTwitter>
            <FaInstagram></FaInstagram>
           </div>
        </div>
    );
};

export default Team;