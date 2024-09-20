"use client";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-10">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Me</h2>
      
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Map Placeholder */}
        <div className="w-full md:w-1/2 h-64 bg-gray-300 flex items-center justify-center mb-10 md:mb-0">
          <p className="text-gray-700">Map Placeholder</p>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2 bg-white p-8 shadow-md rounded-lg">
          <form>
            <div className="mb-5">
              <label htmlFor="name" className="block text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="message" className="block text-gray-700">Message</label>
              <textarea
                id="message"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={5}  // Updated to use a number for rows
                placeholder="Enter your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
