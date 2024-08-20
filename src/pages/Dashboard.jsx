import PageTitle from '../components/PageTitle';
import profile from '../assets/profile.png';
import Footer from '../components/Footer';

const Dashboard = () => {
  return (
    <div className="w-full space-y-4 text-white">
      <div className="w-full h-full text-black bg-white">
        <PageTitle text="Home" showSearch={false} image={profile} />
      </div>
      <div className="w-full h-full bg-center bg-cover">
        Home
      </div>
      <div className="bottom-0 w-full md:fixed">
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
