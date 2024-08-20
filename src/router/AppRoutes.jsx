import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import SearchJob from '../pages/SearchJob';
import Sidebar from '../components/Sidebar';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';

const AppRoutes = () => {
  return (
    <Router>
      <div
        className="flex w-full min-h-screen"
      >
        <Sidebar />
        <div className="flex-grow md:w-full">
          <Routes>
            <Route path="/" element={<Dashboard />} />            
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/skills" element={<SearchJob />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default AppRoutes;
