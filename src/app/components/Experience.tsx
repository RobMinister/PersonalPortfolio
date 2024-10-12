const Experience = () => {
  return (
    <section id="experience" className="min-h-screen bg-gray-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
        <div className="experience-list">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold">Software Engineer II</h3>
            <p className="text-gray-700">University of Wisconsin - Superior</p>
            <p className="text-gray-500">Jun 2024 - Present</p>
          </div>
          <div className="mb-8">
            <h3 className="text-2xl font-semibold">Software Engineer</h3>
            <p className="text-gray-700">United Parcel Service (UPS)</p>
            <p className="text-gray-500">Jun 2023 - Feb 2024</p>
          </div>
          <div className="mb-8">
            <h3 className="text-2xl font-semibold">Senior Software Engineer</h3>
            <p className="text-gray-700">Infosys Ltd</p>
            <p className="text-gray-500">Nov 2019 - Dec 2021</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
