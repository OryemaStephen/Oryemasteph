import profile from '../assets/profile.png';
import PageTitle from '../components/PageTitle';
import Footer from '../components/Footer';

const SearchJob = () => {
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
        Jobs
      </div>
      <div className="bottom-0 w-full md:fixed">
        <Footer />
      </div>
    </div>
  );
};

export default SearchJob;
