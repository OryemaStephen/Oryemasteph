import PageTitle from "../components/PageTitle";
import profile from "../assets/profile.jpg";
import Projects from "../components/Projects";

const Portfolio = () => {
  return (
    <div className="w-full space-y-4">
      <div className="w-full h-full">
        <PageTitle text="Portfolio" image={profile} showSearch={false} />
      </div>
      <div className="w-full h-full px-3">
        <div className="w-full py-2 text-center">
          <h1 className="pb-2 text-2xl font-bold uppercase">Works</h1>
          <p className="pb-2 text-lg">
            A showcase of design, development and experiments
          </p>
        </div>
        <Projects />
      </div>
    </div>
  );
};

export default Portfolio;
