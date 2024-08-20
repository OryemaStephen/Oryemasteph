import PageTitle from '../components/PageTitle';
import profile from '../assets/profile.jpg';
import Footer from '../components/Footer';
import Home from '../components/Home'

const Dashboard = () => {
  return (
    <div className="w-full space-y-4 text-white">
      <div className="w-full h-full text-black bg-white">
        <PageTitle text="Home" showSearch={false} image={profile} />
      </div>
      <div className="w-full text-black px-3">
        <Home />
      </div>
      <div className="bottom-0 w-full md:fixed">
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
