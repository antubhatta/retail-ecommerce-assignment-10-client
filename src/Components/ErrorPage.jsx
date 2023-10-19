
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
const ErrorPage = () => {
    const error =useRouteError()
    return (
      
         <div className="flex flex-col items-center justify-center gap-4 min-h-screen bg-gradient-to-bl from-red-400 to-red-600 ">
            <h2 className="text-3xl lg:text-9xl  text-white font-extrabold">404</h2>
      <p className="text-3xl text-white font-medium">Page {error.statusText || error.message}</p>
      {
        error.status === 404 && <div>
            <p className="text-base lg:text-xl font-medium text-white">We encountered an error while processing your request.</p>
    <p className="text-base lg:text-xl font-medium text-white">Please try again later or contact support..</p>
          <div className="flex justify-center">
          <Link to="/"><button className="text-lg lg:text-xl mt-4 bg-gradient-to-r from-blue-500 to-pink-500 transform hover:scale-105 font-medium rounded-2xl text-white px-5 py-3 ">Home Page</button></Link>
          </div>
        </div>
      }
        </div>
       
    );
};

export default ErrorPage;