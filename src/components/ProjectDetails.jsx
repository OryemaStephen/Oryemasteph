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
      <div className="w-full h-full px-3">
        <Link to='/portfolio' className='cursor-pointer'>
          <div className='flex items-center justify-start w-1/2 cursor-pointer'>
            <div className='cursor-pointer'><IoMdArrowRoundBack /></div>
            <div className='cursor-pointer'>Go Back</div>
          </div>
        </Link>

        <div className='grid items-start justify-between grid-cols-1 gap-5 pt-10 lg:grid-cols-2'>
          <div className="w-full text-center">
            <img src={project.src} alt={project.title} className="object-cover w-full h-72" />
          </div>
          <div className='w-full'>
            <h1 className="pb-2 text-lg font-bold uppercase">{project.title}</h1>
            <p className="pb-2 text-lg">{project.paragraph}</p>
            <h3 className='pt-2 text-xl font-bold uppercase'>Skills</h3>
            <div className='grid w-full grid-cols-3 gap-2 py-4'>
              {project.skills.map((skill,index)=>(
                <div key={index}  className='px-3 py-1 text-black rounded-lg bg-slate-400'>{skill}</div>
              ))}
            </div>
            <div className='flex items-center justify-center w-full py-2'>
              <div className='flex items-center justify-start w-1/2 hover:cursor-pointer'>
                <a
                  href={project.live}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-3 py-1 text-white rounded-lg cursor-pointer bg-slate-950'
                >
                  <span>Live Preview</span>
                </a>
              </div>
              <div className='flex items-center justify-start w-1/2'>
                <a
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-3 py-1 text-white rounded-lg cursor-pointer bg-slate-950'
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
