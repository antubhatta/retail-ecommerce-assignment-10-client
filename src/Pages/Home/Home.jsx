import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import ContactPage from "./Contact";
import Footer from "./Footer";
import Team from "./Team";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <WhyChooseUs></WhyChooseUs>
      <div className="container mx-auto mt-6 lg:mt-10 ">
        <h3 className="text-xl md:text-2xl lg:text-4xl mb-6 lg:mb-8  pt-4 container mx-auto text-center font-bold">
          Our Team Members
        </h3>
       
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {data?.team_members.map((team, idx) => (
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
