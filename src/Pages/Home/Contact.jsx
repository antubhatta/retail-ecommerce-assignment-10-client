

const ContactPage = () => {
  return (
    <div className="dark:bg-slate-800 mt-8 mb-8 md:mt-16 md:mb-16 py-16 ">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl text-center font-extrabold text-gray-800 dark:text-white mb-5">Contact Us</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600 text-sm dark:text-white font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                className="w-full px-4 py-2 rounded-full border border-indigo-400 focus:ring-4 focus:ring-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block dark:text-white text-gray-600 text-sm font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your email"
                className="w-full px-4 py-2 rounded-full border border-indigo-400 focus:ring-4 focus:ring-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block dark:text-white text-gray-600 text-sm font-semibold mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Write your message here..."
                className="w-full px-4 py-2 rounded-lg border border-indigo-400 focus:ring-4 focus:ring-indigo-500"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-indigo-500 dark:text-white hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-full focus:outline-none"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

