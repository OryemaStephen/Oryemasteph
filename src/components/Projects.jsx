// import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useProjects } from '../contexts/ProjectContext';

const Projects = () => {
    const navigate = useNavigate()
    const projects = useProjects();

    const handleDetailsClick = (id) => {
        navigate(`/portfolio/projects/${id}`);
    };

  return (
    <div className="w-full h-full gap-2 bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <div key={index} className="relative group rounded-lg overflow-hidden grid-cols-1">
          <img
            src={project.src}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-90 flex items-center text-white flex-col justify-center transition-transform duration-500 transform translate-y-full group-hover:translate-y-0">
            <h2 className="text-white text-2xl md:text-3xl text-center pb-2">
              {project.title}
            </h2>
            <p className="text-lg text-center pb-2">{project.paragraph}</p>
            <button
              type="button"
              className="px-5 cursor-pointer py-2 border-[1px] border-white bg-white text-black hover:bg-gray-800 hover:border-black hover:text-white transition-colors duration-500 ease-in-out"
              onClick={() => handleDetailsClick(project.id)}
            >
              View More Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
