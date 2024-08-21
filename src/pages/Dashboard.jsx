import PageTitle from '../components/PageTitle';
import profile from '../assets/profile.jpg';
import Footer from '../components/Footer';
import Home from '../components/Home'
import Socials from '../components/Socials';

const Dashboard = () => {
  return (
    <div className="w-full space-y-4 text-white">
      <div className="w-full h-full text-black bg-white">
        <PageTitle text="Home" showSearch={false} image={profile} />
      </div>
      <div className="w-full px-3 text-black">
        <Home />       
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

export default Dashboard;
