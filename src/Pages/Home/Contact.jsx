

const ContactPage = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-5">Contact Us</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600 text-sm font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 text-sm font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-600 text-sm font-semibold mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Write your message here..."
                className="w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
