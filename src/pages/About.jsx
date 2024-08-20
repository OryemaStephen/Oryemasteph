import Footer from '../components/Footer';
import PageTitle from '../components/PageTitle';
import profile from '../assets/profile.png';

const About = () => {
  return (
    <div>
      <div className="w-full h-full text-black bg-white">
        <PageTitle text="About" showSearch={false} image={profile} />
      </div>
      <div>
        About
      </div>
      <div className="bottom-0 w-full md:fixed">
        <Footer />
      </div>
    </div>
  );
};

export default About;
