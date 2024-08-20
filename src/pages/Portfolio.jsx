import Footer from "../components/Footer"
import PageTitle from "../components/PageTitle"
import profile from '../assets/profile.png';

const Portfolio = () => {
  return (
    <div className="w-full space-y-4">
      <div className="w-full h-full">
        <PageTitle
          text="Portfolio"
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
  )
}

export default Portfolio