import { useState } from 'react';
import { FaBars, FaHome, FaTimes, FaUser } from 'react-icons/fa';
import { FaBarsStaggered } from 'react-icons/fa6';
import { GrProjects } from 'react-icons/gr';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // To get the current path
  const [activeLink, setActiveLink] = useState(location.pathname);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsOpen(false); 
  };

  return (
    <div className="fixed top-0 left-0 z-10 h-full text-white bg-gray-800 md:w-44">
      <div className="relative">
        <button
          className={`absolute z-50 text-xl rounded-full bg-transparent ${
            isOpen ? 'text-white top-6 left-32' : 'top-4 left-72 text-slate-700'
          } md:hidden`}
          onClick={toggleSidebar}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:relative md:block`}
      >
        <div className="flex flex-col items-center justify-center py-4">
          <Link to="/" className="text-3xl">
            OS
          </Link>
        </div>
        <nav className="flex flex-col gap-1 p-4">
          <Link
            to="/"
            className={`flex items-center gap-4 px-4 py-2 rounded-md hover:bg-gray-700 ${
              activeLink === '/' ? 'bg-gray-700' : ''
            }`}
            onClick={() => handleLinkClick('/')}
          >
            <FaHome />
            <span>Home</span>
          </Link>
          <Link
            to="/portfolio"
            className={`flex items-center gap-4 px-4 py-2 rounded-md hover:bg-gray-700 ${
              activeLink === '/portfolio' ? 'bg-gray-700' : ''
            }`}
            onClick={() => handleLinkClick('/portfolio')}
          >
            <GrProjects />
            <span>Portfolio</span>
          </Link>
          <Link
            to="/skills"
            className={`flex items-center gap-4 px-4 py-2 rounded-md hover:bg-gray-700 ${
              activeLink === '/skills' ? 'bg-gray-700' : ''
            }`}
            onClick={() => handleLinkClick('/skills')}
          >
            <FaBarsStaggered />
            <span>Skills</span>
          </Link>
          <Link
            to="/about"
            className={`flex items-center gap-4 px-4 py-2 rounded-md hover:bg-gray-700 ${
              activeLink === '/about' ? 'bg-gray-700' : ''
            }`}
            onClick={() => handleLinkClick('/about')}
          >
            <FaUser />
            <span>About</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
