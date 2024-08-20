import { useState } from 'react';
import { FaBars, FaHome, FaSearch, FaTimes, FaUser } from 'react-icons/fa';
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
    <div className="z-10 h-screen md:w-64">
      <div className="relative w-full">
        <button
          className={`absolute z-50 text-xl rounded-full bg-transparent ${isOpen ? 'text-slate-700 top-4 left-[90vw]' : 'top-3 left-[90vw] text-slate-700'} md:hidden`}
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
        <div className="flex flex-col p-4">
          <Link to="/" className="flex items-center text-4xl ">
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
            <span>
              <FaHome />
            </span>
            <span>Home</span>
          </Link>
          <Link
            to="/portfolio"
            className={`flex items-center gap-4 px-4 py-2 rounded-md hover:bg-gray-700 ${
              activeLink === '/portfolio' ? 'bg-gray-700' : ''
            }`}
            onClick={() => handleLinkClick('/portfolio')}
          >
            <span>
              <GrProjects />
            </span>
            <span>Portfolio</span>
          </Link>
          <Link
            to="/skills"
            className={`flex items-center gap-4 px-4 py-2 rounded-md hover:bg-gray-700 ${
              activeLink === '/skills' ? 'bg-gray-700' : ''
            }`}
            onClick={() => handleLinkClick('/skills')}
          >
            <span>
              <FaSearch />
            </span>
            <span>Skills</span>
          </Link>
          <Link
            to="/about"
            className={`flex items-center gap-4 px-4 py-2 rounded-md hover:bg-gray-700 ${
              activeLink === '/about' ? 'bg-gray-700' : ''
            }`}
            onClick={() => handleLinkClick('/about')}
          >
            <span>
              <FaUser />
            </span>
            <span>About</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
