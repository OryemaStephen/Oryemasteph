import { useParams, Link } from 'react-router-dom';
import { useProjects } from '../contexts/ProjectContext';
import Footer from './Footer';
import PageTitle from './PageTitle';
import profile from '../assets/profile.jpg';
import { IoMdArrowRoundBack } from 'react-icons/io';

const ProjectDetails = () => {
  const { id } = useParams();
  const projects = useProjects();
  const project = projects.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="w-full space-y-4">
      <div className="w-full h-full">
        <PageTitle text="Portfolio" image={profile} showSearch={false} />
      </div>
      <div className="px-3 w-full h-full">
        <Link to='/portfolio' className='cursor-pointer'>
          <div className='w-1/2 flex justify-start items-center cursor-pointer'>
            <div className='cursor-pointer'><IoMdArrowRoundBack /></div>
            <div className='cursor-pointer'>Go Back</div>
          </div>
        </Link>

        <div className='grid pt-10 grid-cols-1 lg:grid-cols-2 gap-5 justify-between items-start'>
          <div className="w-full text-center">
            <img src={project.src} alt={project.title} className="w-full h-72 object-cover" />
          </div>
          <div className='w-full'>
            <h1 className="text-lg uppercase font-bold pb-2">{project.title}</h1>
            <p className="text-lg pb-2">{project.paragraph}</p>
            <div className='w-full py-2 flex justify-center items-center'>
              <div className='flex justify-start hover:cursor-pointer items-center w-1/2'>
                <a
                  href={project.live}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-3 py-1 rounded-lg cursor-pointer bg-slate-950 text-white'
                >
                  <span>Live Preview</span>
                </a>
              </div>
              <div className='w-1/2 flex justify-start items-center'>
                <a
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-3 py-1 rounded-lg cursor-pointer bg-slate-950 text-white'
                >
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:bottom-0 md:fixed">
        <Footer />
      </div>
    </div>
  );
};

export default ProjectDetails;
