import Footer from '../components/Footer';
import PageTitle from '../components/PageTitle';
import profile from '../assets/profile.jpg';
import Socials from '../components/Socials';
import AboutContact from '../components/AboutContact';
import AboutIntro from '../components/AboutIntro';

const About = () => {
  return (
    <div>
      <div className="w-full h-full text-black bg-white">
        <PageTitle text="About" showSearch={false} image={profile} />
      </div>
      <div className='items-start justify-between lg:flex'>
        <AboutIntro />
        <AboutContact />
      </div>
      <div className='block bg-slate-800 md:hidden'>
        <Socials /> 
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default About;
