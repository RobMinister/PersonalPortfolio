"use client";

import { useState } from 'react';

interface Project {
  title: string;
  description: string;
  techStack: string;
  details: string;
}

const projects: Project[] = [
  {
    title: 'Card Memory Game',
    description: 'An interactive memory card game.',
    techStack: 'Angular, React, JavaScript, AWS Amplify',
    details: 'Created a memory card game using Angular and React.js, employing state management with AWS Amplify and enhancing user engagement with real-time image loading.',
  },
  {
    title: 'Recruitment Management System',
    description: 'Database system for managing recruitment data.',
    techStack: 'MS SQL, ERD, Python',
    details: 'Developed a recruitment management system database, boosting efficiency by 40% through optimized SQL queries and Python scripts.',
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="min-h-screen py-10">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="border p-5 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold mt-5">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
            <p className="mt-2 text-gray-500">Tech Stack: {project.techStack}</p>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
              onClick={() => openModal(project)}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>

      {/* Modal for project details */}
      {selectedProject && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-lg w-full">
            <button className="absolute top-2 right-2 text-xl" onClick={closeModal}>
              &times;
            </button>
            <h3 className="text-2xl font-semibold mt-5">{selectedProject.title}</h3>
            <p className="mt-3">{selectedProject.details}</p>
            <p className="mt-3 text-gray-500">Tech Stack: {selectedProject.techStack}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
