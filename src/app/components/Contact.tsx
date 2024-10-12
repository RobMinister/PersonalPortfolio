const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>
        <div className="flex justify-center">
          <form className="w-full max-w-lg">
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="name">Full Name</label>
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="name"
                type="text"
                placeholder="Your Full Name"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="email"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="message"
                rows={4} // Corrected rows to use a number
                placeholder="Your Message"
              ></textarea>
            </div>
            <button type="submit" className="btn-primary w-full">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
