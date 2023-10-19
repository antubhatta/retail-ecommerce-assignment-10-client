import { FaShippingFast,FaGift,FaHeadset } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Why Choose Us</h2>
        <p className="text-lg text-gray-600 mb-8">
          We take pride in providing exceptional services that set us apart from the competition. Here is why you should choose us:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         
          <div className="rounded-lg p-6 bg-white shadow-lg">
            <div className="text-2xl text-blue-500 mb-4">
              <i className="text-7xl flex justify-center"><FaShippingFast></FaShippingFast></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
            <p className="text-gray-600">
              We offer lightning-fast shipping to get your orders to your doorstep as quickly as possible.
            </p>
          </div>

          
          <div className="rounded-lg p-6 bg-white shadow-lg">
            <div className="text-2xl text-blue-500 mb-4">
            <i className="text-7xl flex justify-center"><FaGift></FaGift></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
            <p className="text-gray-600">
              Explore a wide range of products from top brands, ensuring you find exactly what you need.
            </p>
          </div>

          
          <div className="rounded-lg p-6 bg-white shadow-lg">
            <div className="text-2xl text-blue-500 mb-4">
            <i className="text-7xl flex justify-center"><FaHeadset></FaHeadset></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Exceptional Support</h3>
            <p className="text-gray-600">
              Our dedicated customer support team is here to assist you with any inquiries or concerns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
