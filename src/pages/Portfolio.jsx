import Footer from "../components/Footer"
import PageTitle from "../components/PageTitle"
import profile from '../assets/profile.jpg';
import Projects from "../components/Projects";

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
      <div className="px-3 w-full h-full">
        <div className="w-full text-center py-2">
          <h1 className="text-2xl uppercase font-bold pb-2">Works</h1>
          <p className="text-lg pb-2">
            A showcase of design,
            development and experiments
          </p>
        </div>
        <Projects />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  )
}

export default Portfolio