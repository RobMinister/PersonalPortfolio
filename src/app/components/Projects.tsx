const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-white py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="project-list grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="project-card bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Memory Game</h3>
            <p className="text-gray-700">An interactive memory card game built with React and Firebase.</p>
            <p className="text-gray-500">Tech Stack: React, Firebase</p>
            <a href="#" className="btn-primary mt-4 inline-block">View Project</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
