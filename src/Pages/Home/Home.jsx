import {  useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import ContactPage from "./Contact";
import Footer from "./Footer";
import Team from "./Team";
import WhyChooseUs from "./WhyChooseUs";
import BrandCard from "./BrandCard";

const teamData = [
  {
    "member_id": 1,
    "full_name": "Alice Smith",
    "position": "Event Coordinator",
    "email": "alice.smith@example.com",
    "profile_image_url": "https://i.ibb.co/LZQNkDF/team1.jpg"
  },
  {
    "member_id": 2,
    "full_name": "John Johnson",
    "position": "Venue Specialist",
    "email": "john.johnson@example.com",
    "profile_image_url": "https://i.ibb.co/L6YbPfY/team-member-4.jpg"
  },
  {
    "member_id": 3,
    "full_name": "Emily Davis",
    "position": "Decorations Expert",
    "email": "emily.davis@example.com",
    "profile_image_url": "https://i.ibb.co/StRVT3p/team-member-01.jpg"
  },
  {
    "member_id": 4,
    "full_name": "Michael Parker",
    "position": "Catering Coordinator",
    "email": "michael.parker@example.com",
    "profile_image_url": "https://i.ibb.co/82ckMG6/team2.jpg"
  }
]

const Home = () => {
  const data = useLoaderData();

  return (
    <div className="dark:bg-slate-800">
      <Banner></Banner>
      <h3 className="container mx-auto text-center text-2xl lg:text-5xl font-bold dark:text-white mt-8 md:mt-12 lg:mt-20 mb-6">Our Brands</h3>
      <div className="container mx-auto  grid grid-cols-1 mb-8 md:mb-12 lg:mb-20 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {
               data && data?.map((brand,idx)=><BrandCard key={idx} brand={brand}></BrandCard>)
            }
        </div>
           
      <WhyChooseUs></WhyChooseUs>
      <div className="container mx-auto mt-6 lg:mt-10 ">
        <h3 className="text-xl dark:text-white md:text-2xl lg:text-4xl mb-6 lg:mb-8  pt-4 container mx-auto text-center font-bold">
          Our Team Members
        </h3>
       
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {teamData?.map((team, idx) => (
            <Team key={idx} teams={team}></Team>
          ))}
        </div>
      </div>
      <ContactPage></ContactPage>
      <Footer></Footer>
    </div>
  );
};

export default Home;
