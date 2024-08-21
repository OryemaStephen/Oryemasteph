import profile from '../assets/profile.jpg';
import PageTitle from '../components/PageTitle';
import Footer from '../components/Footer';
import Socials from '../components/Socials';

const Skills = () => {
  return (
    <div className="w-full space-y-4">
      <div className="w-full h-full">
        <PageTitle
          text="Skills"
          image={profile}
          showSearch={false}
        />
      </div>
      <div>
      Skills
      </div>
      <div className='bg-slate-800'>
        <Socials /> 
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Skills;
