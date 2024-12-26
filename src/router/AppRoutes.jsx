import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Sidebar from "../components/Sidebar";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Skills from "../pages/Skills";
import ProjectDetails from "../components/ProjectDetails";
import { ProjectProvider } from "../contexts/ProjectContext";
import Footer from "../components/Footer";

const AppRoutes = () => {
  return (
    <ProjectProvider>
      <Router>
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex flex-col flex-grow overflow-y-auto md:ml-44">
            <div className="flex-grow">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route
                  path="/portfolio/projects/:id"
                  element={<ProjectDetails />}
                />
                <Route path="/skills" element={<Skills />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </Router>
    </ProjectProvider>
  );
};

export default AppRoutes;
