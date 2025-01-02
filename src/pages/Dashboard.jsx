import PageTitle from "../components/PageTitle";
import profile from "../assets/profile.jpg";
import Home from "../components/Home";
import Socials from "../components/Socials";

const Dashboard = () => {
  return (
    <div className="flex flex-col w-full min-h-[90vh] text-white">
      <div className="w-full text-black bg-white">
        <PageTitle text="Home" showSearch={false} image={profile} />
      </div>
      <div className="flex items-center justify-center w-full px-3 py-0 pt-3 lg:py-10">
        <div className="w-full text-black">
          <Home />
        </div>
      </div>
      <div className="w-full">
        <Socials />
      </div>
    </div>
  );
};

export default Dashboard;
