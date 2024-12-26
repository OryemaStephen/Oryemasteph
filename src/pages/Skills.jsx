import profile from "../assets/profile.jpg";
import PageTitle from "../components/PageTitle";
import Socials from "../components/Socials";
import Skill from "../components/Skill";
import Services from "../components/Services";

const Skills = () => {
  return (
    <div className="w-full space-y-4">
      <div className="w-full h-full">
        <PageTitle text="Skills" image={profile} showSearch={false} />
      </div>
      <div className="px-5">
        <Services />
        <Skill />
      </div>
      <div className="bg-slate-800">
        <Socials />
      </div>
    </div>
  );
};

export default Skills;
