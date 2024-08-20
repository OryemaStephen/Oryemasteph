import profile from '../assets/profile.jpg';
import PageTitle from '../components/PageTitle';
import Footer from '../components/Footer';

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
      <div className="bottom-0 w-full md:fixed">
        <Footer />
      </div>
    </div>
  );
};

export default Skills;
