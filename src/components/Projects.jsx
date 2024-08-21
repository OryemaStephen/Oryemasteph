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
    <div className="grid w-full h-full grid-cols-1 gap-2 bg-white sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <div key={index} className="relative grid-cols-1 overflow-hidden rounded-lg max-h-80 min-h-72 group">
          <img
            src={project.src}
            alt={project.title}
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white transition-transform duration-500 transform translate-y-full bg-black bg-opacity-90 group-hover:translate-y-0">
            <h2 className="pb-2 text-2xl text-center text-white md:text-3xl">
              {project.title}
            </h2>
            <p className="pb-2 text-lg text-center">{project.paragraph}</p>
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
