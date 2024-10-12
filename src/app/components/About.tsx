const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex justify-center items-center bg-gradient-to-b from-gray-200 to-gray-50 py-20"
      style={{ scrollMarginTop: '80px' }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between px-8 md:px-16"> {/* Added wider left and right gap */}
        {/* Left: Profile Image */}
        <div className="flex-shrink-0">
          <img
            src="/images/profile.jpg"
            alt="Robin Sharma"
            className="rounded-lg object-cover"
            style={{ width: '300px', height: '350px' }} // Adjusted the image size to match your example
          />
        </div>

        {/* Right: About Me Details */}
        <div className="md:ml-12 mt-8 md:mt-0 w-full">
          <h1 className="text-5xl font-bold mb-4">About Me</h1>
          <p className="text-lg text-gray-600 max-w-2xl mb-8">
            Passionate about developing scalable web applications, focusing on React, Node.js, and modern web technologies.
          </p>

          {/* Additional Details */}
          <div className="space-y-4">
            <div className="text-lg">
              <span className="font-bold">Name:</span> Robin Sharma
            </div>
            <div className="text-lg">
              <span className="font-bold">Email:</span> robin.sharma@example.com
            </div>
            <div className="text-lg">
              <span className="font-bold">Location:</span> Wisconsin, USA
            </div>
            <div className="text-lg">
              <span className="font-bold">Phone:</span> +1 123-456-7890
            </div>
          </div>

          <div className="mt-8 space-x-4">
            <a href="https://linkedin.com/in/robinSharma11" target="_blank" className="btn-primary">LinkedIn</a>
            <a href="https://github.com/RobMinister" target="_blank" className="btn-primary">GitHub</a>
            <a href="/resume.pdf" className="btn-primary">Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
